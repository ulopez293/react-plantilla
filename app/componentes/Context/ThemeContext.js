import React from 'react'

const theme = {
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
const ThemeContext = React.createContext(theme);

const context = {
  theme: theme,
  ThemeContext: ThemeContext
}

export default context
