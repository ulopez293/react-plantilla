import React, { useState } from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, BrowserRouter as RouterTwo, Route, Switch, Link } from 'react-router-dom'
import Posts from './componentes/Posts.js'

function App() {

  const [estado, setEstado] = useState({
    plantilla: "Plantilla de Inicio React",
    saludo: "Hola Mundo React",
    estilos: { textAlign: "center" }
  })

  return(
      <div>
        <Router>
          <nav>
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">Logo</Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/posts">Posts</Link></li>
              </ul>
            </div>
          </nav>
          <div style={estado.estilos}>
            <h5>{estado.plantilla}</h5>
            <h6>{estado.saludo}</h6>
          </div>
          <br/>
          <Switch>
            <Route exact path='/' component={Posts} />
            <Route exact path='/posts' component={Posts} />
          </Switch>
        </Router>
      </div>
  )
}

render(<App />, document.getElementById('root'))
