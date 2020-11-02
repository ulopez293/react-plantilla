import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, BrowserRouter as RouterTwo, Route, Switch, Redirect } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'

import styles from '../public/css/styles.css'

import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './redux/reducers'

import Posts from './componentes/Posts'
import Post from './componentes/Post'
import Tabla from './componentes/Tabla'
import Navegador from './componentes/Navegador'
import Home from './componentes/Home'

import context from './componentes/Context/ThemeContext'
const ThemeContext = context.ThemeContext

const store = createStore(reducers, applyMiddleware(thunk))

function App() {

  useEffect(() => {
    M.AutoInit()
  }, [])

  return(
  <Provider store={store}>
    <ThemeContext.Provider value={context.theme}>
      <Router>
        <Navegador />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Home' component={Home} />
          <Route exact path='/posts' component={() => <Tabla rutaAPI={'/posts'} />} />
          <Route exact path='/posts/:id' component={Post} />
          <Redirect exact from="/*" to="/" />
        </Switch>
      </Router>
    </ThemeContext.Provider>
  </Provider>
  )
}

render(<App />, document.getElementById('root'))
