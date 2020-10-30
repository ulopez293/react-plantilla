import { server } from '../../configuracion.js'

class InvocarAPI {
  constructor() {
    this.cabecera = {
      'Content-Type':'application/json',
      authorization: window.localStorage.getItem('token')
    }
  }

  invocarGET(ruta_api, ok, fail) {
    let parametros = { method: 'GET', headers: this.cabecera }
    this.invocar(ruta_api, parametros, ok, fail)
  }

  invocarDELETE(ruta_api, ok, fail) {
    let parametros = { method: 'DELETE', headers: this.cabecera }
    this.invocar(ruta_api, parametros, ok, fail)
  }

  invocarPUT(ruta_api, body, ok, fail) {
    let parametros = {
      method: 'PUT', headers: this.cabecera, body: JSON.stringify(body)
    }
    this.invocar(ruta_api, parametros, ok, fail)
  }

  invocarPOST(ruta_api, body, ok, fail) {
    let parametros = {
      method: 'POST', headers: this.cabecera, body: JSON.stringify(body)
    }
    this.invocar(ruta_api, parametros, ok, fail)
  }

  invocar(ruta_api, parametros, ok, fail) {
    fetch(server.host + ruta_api, parametros)
    .then(response => {
      if(response.ok) return response.json()
    })
    .then(datos => ok(datos))
    .catch(error => fail(error))
  }
}

export default new InvocarAPI()
