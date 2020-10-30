import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, BrowserRouter as RouterTwo, Route, Switch, Link } from 'react-router-dom'
import Posts from './componentes/Posts.js'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      plantilla: "Plantilla de Inicio React",
      saludo: "Hola Mundo React",
      estilos: { textAlign: "center" }
    }
  }

  render() {
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
          <div style={this.state.estilos}>
            <h5>{this.state.plantilla}</h5>
            <h6>{this.state.saludo}</h6>
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
}

render(<App />, document.getElementById('root'))
