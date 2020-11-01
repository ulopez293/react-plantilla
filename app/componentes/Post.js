import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import InvocarAPI from '../utilidades/InvocarAPI'
import useGetDato from './Hooks/useGetDato'
import { connect } from 'react-redux'
import { updatePost } from '../redux/Actions'

function Post (props) {
  const [post, setPost] = useGetDato('/posts', props)

  const handleChange = event => {
    setPost({
      ...post,
      [event.target.name] : event.target.value
    })
  }

  const handleChangeRedux = event => {
    props.updatePost(event.target.name, event.target.value)
  }

  return(
    <div>
      <h6>redux: {props.titleRedux}, {props.bodyRedux}</h6>
      <div className="row">
        <div className="input-field col s12">
          <input onChange={handleChangeRedux} value={props.titleRedux} name="title" type="text" className="validate" />
          <label className="active" htmlFor="title">Titulo:</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input onChange={handleChangeRedux} value={props.bodyRedux} name="body" type="text" className="validate" />
          <label className="active" htmlFor="body">Contenido</label>
        </div>
      </div>
      <br/>
      <hr />
      <If condition={post}>
        <div className="row">
          <div className="input-field col s12">
            <input onChange={handleChange} value={post.title} name="title" id={'title_'+post.id} type="text" className="validate" />
            <label className="active" htmlFor="title">Titulo:</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input onChange={handleChange} value={post.body} name="body" id={'body_'+post.id} type="text" className="validate" />
            <label className="active" htmlFor="body">Contenido</label>
          </div>
        </div>
        <br/>
      </If>
    </div>
  )
}

// Post.propTypes = {
//   post: PropTypes.object.isRequired
// }

const mapStateToProps = (state) => {
  return {
    titleRedux: state.reducer.title,
    bodyRedux: state.reducer.body
  }
}

export default connect(mapStateToProps, { updatePost })(Post)
