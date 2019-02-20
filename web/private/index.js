import React from 'react';
import ReactDOM from "react-dom";
import LoginView from '../private/js/views/LoginView.jsx'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import NoMatch404 from '../private/js/views/NoMatch404.jsx';
import AgendaView from '../private/js/views/AgendaView.jsx';
import { Provider } from 'react-redux';
import store from './js/store.js'
import './css/agenda.css';




ReactDOM.render(
    <Provider store={store}>
        <Router>    
            <Switch>
                <Route path='/login' component={LoginView}/>
                <Route path='/agenda' component={AgendaView}/>
                <Route component={NoMatch404}/>
            </Switch>
        </Router>
    </Provider>
    ,
    document.getElementById("app")
);
