import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import update from 'react-addons-update'
import Post from './Post'
import useGetDatos from './Hooks/useGetDatos'

function Posts () {
  const [posts, setPosts] = useGetDatos('/posts')
  return (
      <div>
        <If condition={posts}>
          <For each="post" of={posts}>
            <Post key={post.id} objeto={post} />
          </For>
        </If>
      </div>
  )
}

export default Posts
