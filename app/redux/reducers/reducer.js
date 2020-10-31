const initialState = {
  title: 'initialState',
  body: 'initialState'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EXAMPLE':
      return {
        title: action.body.title,
        body: action.body.profile
      }
    default:
      return state
  }
}

export default reducer
