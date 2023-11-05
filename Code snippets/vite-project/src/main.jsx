import React from 'react'
import ReactDOM from 'react-dom/client'
import CDRen_ifelse from './CDRen_ifelse'
import CDRen_switch from './CDRen_switch'
import CDRen_ternary from './CDRen_ternary'
import CDRen_logi_and from './CDRen_logi_and'
import CDRen_Im_invoke from './CDRen_Im_invoke'
import PARENT from './PARENT';
import Res_2_evnt_Btn from './Res_2_evnt_Btn'
import Res_2_evnt_Form from './Res_2_evnt_Form'
import Hook_useRef from './Hook_useRef'
import Hook_useRef_attr from './Hook_useRef_attr'
import Hook_useRef_input from './Hook_useRef_input'
import Hook_useRef_css from './Hook_useRef_css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CDRen_ifelse/>
    <CDRen_switch/>
    <CDRen_ternary/>
    <CDRen_logi_and/>
    <CDRen_Im_invoke/>
    <PARENT/>
    <Res_2_evnt_Btn/>
    <Res_2_evnt_Form/>
    <Hook_useRef/>
    <Hook_useRef_attr/>
    <Hook_useRef_input/>
    <Hook_useRef_css/>
  </React.StrictMode>,
)
