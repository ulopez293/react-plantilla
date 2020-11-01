import React, { useState, useEffect, Fragment } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import update from 'react-addons-update'
import useGetDatos from './Hooks/useGetDatos'
import Parser from 'html-react-parser'

function Tabla ({ rutaAPI }) {
  const [datos, setDatos] = useGetDatos(rutaAPI)
  const [titulos, setTitulos] = useState(undefined)

  useEffect(() => {
    if (datos.length) {
      let aux = []
      for (let key in datos[0]) {
        aux.push(key);
      }
      setTitulos(aux)
    }
  }, [datos])

  return (
      <Fragment>
        <Choose>
          <When condition={titulos !== undefined}>
            <table>
              <thead>
                <tr>
                  {
                    titulos.map((titulo, index) =>
                      <th key={index}>{titulo}</th>
                    )
                  }
                  <th>Edición</th>
                </tr>
              </thead>
              <tbody>
                <For each="dato" of={datos}>
                  <tr key={dato.id}>
                    {
                      Object.keys(dato).map(function(key) {
                          return <td key={key}>{dato[key]}</td>
                      })
                    }
                    <td>
                      <Link to="/" style={{ margin: '5px' }} className="waves-effect waves-light btn-small">Editar</Link>
                      <Link to="/" className="waves-effect waves-light btn-small">Eliminar</Link>
                    </td>
                  </tr>
                </For>
              </tbody>
            </table>
          </When>
          <Otherwise>
            <h2>Cargando...</h2>
          </Otherwise>
        </Choose>
      </Fragment>
  )
}

export default Tabla
