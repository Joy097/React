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
import Hook_useRef_Mutable from './Hook_useRef_Mutable'
import Hook_useRef_cache from './Hook_useRef_cache'
import Hook_useState from './Hook_useState'
import Hook_useState_obj from './Hook_useState_obj'
import Hook_useState_todo from './Hook_useState_todo'
import Hook_useState_form from './Hook_useState_form'
import 'milligram/dist/milligram.css'
import Hook_useEffect from './Hook_useEffect'
import Hook_useEffect_promise from './Hook_useEffect_promise'
import Hook_useEffect_async from './Hook_useEffect_async'
import React_Router_Dom from './React_Router_Dom'

//use if necessary <Res_2_evnt_Btn/> ( removed this for loading issue)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React_Router_Dom/>
  </React.StrictMode>,
)
