import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'

class Post extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <li><b>Titulo:</b> {this.props.post.title}</li>
        <li><b>Contenido:</b> {this.props.post.body}</li>
        <br/>
      </div>
    )
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default Post
