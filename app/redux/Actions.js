import InvocarAPI from '../utilidades/InvocarAPI'

export const updatePost = (name, value) => (dispatch, getState) => {

  dispatch({
    type: 'EXAMPLE',
    payload: {
      name: name,
      value: value
    }
  })
}
