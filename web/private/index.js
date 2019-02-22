import React from 'react';
import ReactDOM from "react-dom";
import store from './js/store.js'
import { Provider } from 'react-redux';

// css files
import './css/agenda.css';

// routes
import AppRoutes from './AppRoutes.js';


ReactDOM.render(
    <Provider store={store}>
        <AppRoutes/>
    </Provider>
    ,
    document.getElementById("app")
);
