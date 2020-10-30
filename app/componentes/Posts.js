import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import update from 'react-addons-update'
import InvocarAPI from '../utilidades/InvocarAPI.js'
import Post from './Post'
import regeneratorRuntime from "regenerator-runtime";

function Posts () {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const cargarPosts = async () => {
      InvocarAPI.invocarGET('/posts', response => {
        setPosts(response)
      }, error => {
        console.log("Error al cargar los posts: ", error)
      })
    }
    cargarPosts()
    return () => {
      console.log("saneamiento")
    }
  }, [posts.length])

  return (
      <div>
        <If condition={posts}>
          <For each="post" of={posts}>
            <Post key={post.id} post={post} />
          </For>
        </If>
      </div>
  )
}

export default Posts
