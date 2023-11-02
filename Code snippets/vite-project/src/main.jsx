import React from 'react'
import ReactDOM from 'react-dom/client'
import CDRen_ifelse from './CDRen_ifelse'
import CDRen_switch from './CDRen_switch'
import CDRen_ternary from './CDRen_ternary'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CDRen_ifelse/>
    <CDRen_switch/>
    <CDRen_ternary/>
  </React.StrictMode>,
)
