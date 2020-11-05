import React, { useReducer } from 'react'
import update from 'react-addons-update'
import context from './ThemeContext'

const initialState = context.initialState
const ThemeContext = context.ThemeContext

const reducerTheme = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_BUTTON_DELETE':
      return  {
          ...state,
          buttons: {
            delete: { ...action.payload }
          }
      }
      //FORMA 2 LIBRERIA
      // return update(state, {
      //   buttons: {
      //     delete: { $set: action.payload }
      //   }
      // })
    default:
      return state
  }
}

function ThemeProvider(props) {
  const [theme, themeAction] = useReducer(reducerTheme, initialState)
  return (
    <ThemeContext.Provider value={ { theme, themeAction } }>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
