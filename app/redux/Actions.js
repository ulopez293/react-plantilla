import InvocarAPI from '../utilidades/InvocarAPI'

export const actionE = () => (dispatch, getState) => {
  dispatch({
    type: 'EXAMPLE',
    body: {
      title: 'xxxx',
      body: 'yyyy'
    }
  })
}
