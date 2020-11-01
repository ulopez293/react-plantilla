import React, { useState, useContext, Fragment } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import context from './Context/paddingContext'
const PaddingContext = context.PaddingContext

function Navegador () {
  const padding = useContext(PaddingContext)

  return (
    <Fragment>
      <nav className="nav-extended" style={padding}>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">Logo</Link>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/posts/1">Post</Link></li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/posts/1">Post</Link></li>
      </ul>
    </Fragment>
  )

}

export default Navegador
