import React from 'react';
import ReactDOM from "react-dom";
import store from './js/store.js'
import { Provider } from 'react-redux';
import PropTypes from "prop-types";
import { withRouter } from "react-router";

// css files
import './css/agenda.css';
import './css/modal.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/menu.css'
import './css/login.css'

// routes
import AppRoutes from './AppRoutes.js';


ReactDOM.render(
    <Provider store={store}>
        <AppRoutes/>
    </Provider>
    ,
    document.getElementById("app")
);
