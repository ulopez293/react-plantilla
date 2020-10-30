import React, { useState } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'

function Navegador () {

  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">Logo</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/posts/1">Post</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )

}

export default Navegador
