import React from 'react'
import { render } from 'react-dom'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      plantilla: "Plantilla de Inicio React",
      saludo: "Hola Mundo React"
    }
  }

  render() {
    return(
      <div>
        <h1>{this.state.plantilla}</h1>
        <p>{this.state.saludo}</p>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
