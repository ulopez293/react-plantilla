import React, { useState, useEffect, useContext } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import update from 'react-addons-update'
import useGetDatos from './Hooks/useGetDatos'
import Parser from 'html-react-parser'
import context from './Context/ThemeContext'

function Tabla ({ rutaAPI }) {
  const [datos, setDatos] = useGetDatos(rutaAPI)
  const [titulos, setTitulos] = useState(undefined)
  const themeContext = useContext(context.ThemeContext)
  const edicion = <th>Acciones</th>

  useEffect(() => {
    if (datos.length) {
      let aux = []
      for (let key in datos[0]) {
        if(key.toLowerCase().indexOf('id')>=0) continue
        aux.push(key);
      }
      setTitulos(aux)
    }
  }, [datos])

  return (
      <div style={themeContext.theme.padding}>
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
                  {edicion}
                </tr>
              </thead>
              <tbody>
                <For each="dato" of={datos}>
                  <tr key={dato.id}>
                    {
                      Object.keys(dato).map(function(key) {
                        if(key.toLowerCase().indexOf('id')>=0) return
                        return <td key={key}>{dato[key]}</td>
                      })
                    }
                    <td>
                      <Link replace to={rutaAPI} style={{ margin: '5px' }}
                            onClick={()=>alert(`Editar en api ${rutaAPI}/${dato.id}`)}
                            className="waves-effect waves-light btn-small">Editar</Link>
                      <Link replace to={rutaAPI} style={themeContext.theme.buttons.delete}
                            onClick={()=>alert(`Eliminar en api  ${rutaAPI}/${dato.id}`)}
                            className="waves-effect waves-light btn-small">Eliminar</Link>
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
      </div>
  )
}

export default Tabla
