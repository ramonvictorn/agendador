import React from 'react';
import ReactDOM from "react-dom";
import LoginView from '../private/js/views/LoginView.jsx'
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import NoMatch404 from '../private/js/views/NoMatch404.jsx';
import AgendaView from '../private/js/views/AgendaView.jsx';

import './web/private/css/agenda.css';

ReactDOM.render(
    <Router>
        <div>
            <Route path='/login' component={LoginView}/>
            <Route path='/agenda' component={AgendaView}/>
            <Route component={NoMatch404}/>
        </div>
    </Router>
    ,
    document.getElementById("app")
);
