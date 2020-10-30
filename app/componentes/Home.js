import React, { useState } from 'react'
import { render } from 'react-dom'

function Home () {

  const [estado, setEstado] = useState({
    plantilla: "Plantilla de Inicio React",
    saludo: "Hola Mundo React",
    estilos: { textAlign: "center" }
  })

  return (
    <div>
      <br/>
      <div style={estado.estilos}>
        <h5>{estado.plantilla}</h5>
        <h6>{estado.saludo}</h6>
      </div>
      <br/>
    </div>
  )

}

export default Home
