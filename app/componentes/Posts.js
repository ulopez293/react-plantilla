import React from 'react'
import { render } from 'react-dom'
import update from 'react-addons-update'
import InvocarAPI from '../utilidades/InvocarAPI.js'
import Post from './Post'

class Posts extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    InvocarAPI.invocarGET('/posts', response => {
      let stateUpdate = update(this.state, {
        posts: {$set: response}
      })
      this.setState(stateUpdate)
    }, error => {
      console.log("Error al cargar los posts: ", error)
    })
  }

  render() {
    return(
      <div>
        <For each="post" of={this.state.posts}>
          <Post key={post.id} post={post} />
        </For>
      </div>
    )
  }
}

export default Posts
