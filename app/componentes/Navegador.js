import React, { useState, useContext, Fragment } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import context from './Context/ThemeContext'
const ThemeContext = context.ThemeContext

function Navegador () {
  const themeContext = useContext(ThemeContext)
  return (
    <Fragment>
      <nav className="nav-extended" style={themeContext.padding}>
        <div className="nav-wrapper">
          <Link replace to="/" className="brand-logo">Logo</Link>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link replace to="/">Home</Link></li>
            <li><Link replace to="/posts">Posts</Link></li>
            <li><Link replace to="/posts/1">Post</Link></li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li><Link replace to="/">Home</Link></li>
        <li><Link replace to="/posts">Posts</Link></li>
        <li><Link replace to="/posts/1">Post</Link></li>
      </ul>
    </Fragment>
  )

}

export default Navegador
