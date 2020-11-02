import React from 'react'

const initialState = {
  padding: {
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  buttons: {
    delete:{
      background: 'brown'
    }
  }
}
const ThemeContext = React.createContext(initialState);

const context = {
  initialState: initialState,
  ThemeContext: ThemeContext
}

export default context
