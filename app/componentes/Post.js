import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'

function Post (props) {
  return(
      <div>
        <li><b>Titulo:</b> {props.post.title}</li>
        <li><b>Contenido:</b> {props.post.body}</li>
        <br/>
      </div>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default Post
