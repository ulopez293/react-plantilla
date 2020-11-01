import React from 'react'

const paddingCSS = {
  paddingLeft: '5%',
  paddingRight: '5%'
}
const PaddingContext = React.createContext(paddingCSS);

const context = {
  paddingCSS: paddingCSS,
  PaddingContext: PaddingContext
}

export default context
