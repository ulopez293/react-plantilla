import React, { useState } from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, BrowserRouter as RouterTwo, Route, Switch, Redirect } from 'react-router-dom'
import Posts from './componentes/Posts'
import Post from './componentes/Post'
import Navegador from './componentes/Navegador'
import Home from './componentes/Home'

function App() {

  return(
    <Router>
      <Navegador />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Home' component={Home} />
        <Route exact path='/posts' component={Posts} />
        <Route exact path='/posts/:id' component={Post} />
        <Redirect exact from="/*" to="/" />
      </Switch>
    </Router>
  )
}

render(<App />, document.getElementById('root'))
