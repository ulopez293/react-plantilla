import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import InvocarAPI from '../../utilidades/InvocarAPI.js'
import regeneratorRuntime from "regenerator-runtime"

export default function useGetDato(url, props = undefined) {

  const [dato, setDato] = useState(undefined)

  useEffect(() => {
    if(props.objeto !== undefined) {
      setDato(props.objeto)
    }
    if(props.match !== undefined) {
      const loadDato = async () => {
        InvocarAPI.invocarGET(`${url}/${props.match.params.id}`, response => {
          setDato(response)
        }, error => {
          console.log(`Error al cargar los ${url}: `, error)
        })
      }
      loadDato()
    }
    return () => {
      console.log("Limpiando useGetDato")
    }
  }, [props.match])

  return [dato, setDato]
}
