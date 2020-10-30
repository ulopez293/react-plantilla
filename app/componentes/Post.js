import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import InvocarAPI from '../utilidades/InvocarAPI.js'

function Post (props) {

  const [post, setPost] = useState(undefined)

  useEffect(() => {
    if(props.post !== undefined) {
      setPost({
        title: props.post.title,
        body: props.post.body
      })
    }
    if(props.match !== undefined) {
      const cargarPost = async () => {
        InvocarAPI.invocarGET(`/posts/${props.match.params.id}`, response => {
          setPost(response)
        }, error => {
          console.log("Error al cargar los posts: ", error)
        })
      }
      cargarPost()
    }
    return () => {
      console.log("saneamiento")
    }
  }, [props])

  return(
    <div>
      <If condition={post}>
        <li><b>Titulo:</b> {post.title}</li>
        <li><b>Contenido:</b> {post.body}</li>
        <br/>
      </If>
    </div>
  )
}

// Post.propTypes = {
//   post: PropTypes.object.isRequired
// }

export default Post
