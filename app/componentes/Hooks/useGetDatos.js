import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import InvocarAPI from '../../utilidades/InvocarAPI.js'
import regeneratorRuntime from "regenerator-runtime"

export default function useGetDatos(url, props) {
  const [datos, setDatos] = useState([])

  useEffect(() => {
    const loadDatos = async () => {
      InvocarAPI.invocarGET(url, response => {
        setDatos(response)
      }, error => {
        console.log(`Error al cargar los ${url}: `, error)
      })
    }
    loadDatos()
    return () => {
      console.log("Limpiando useGetDatos")
    }
  }, [])

  return [datos, setDatos]
}
