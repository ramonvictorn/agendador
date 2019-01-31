//import Button from './js/containers/LoginContainer.jsx'
import React from 'react';
import ReactDOM from "react-dom";
import LoginView from '../private/js/views/LoginView.jsx'
//import LoginContainer from '../private/js/containers/LoginContainer.jsx';
import Agenda from '../private/js/views/Agenda.jsx';
ReactDOM.render(
    <div>
    <LoginView> </LoginView>
    <Agenda></Agenda>
    </div>
    ,
    document.getElementById("app")
);
