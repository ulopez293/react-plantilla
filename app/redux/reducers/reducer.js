import update from 'react-addons-update'

const initialState = {
  title: 'initialStateTitle',
  body: 'initialStateBody'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EXAMPLE':
      return update(state, {
        [action.payload.name]: {$set: action.payload.value}
      })
    default:
      return state
  }
}

export default reducer
