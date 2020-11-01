import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, BrowserRouter as RouterTwo, Route, Switch, Redirect } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './redux/reducers'
import Posts from './componentes/Posts'
import Post from './componentes/Post'
import Navegador from './componentes/Navegador'
import Home from './componentes/Home'

const store = createStore(reducers, applyMiddleware(thunk))

function App() {

  useEffect(() => {
    M.AutoInit()
  }, [])

  return(
  <Provider store={store}>
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
  </Provider>
  )
}

render(<App />, document.getElementById('root'))
