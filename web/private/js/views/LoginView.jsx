import React from 'react';
import { Link } from 'react-router-dom'
import LoginContainer from '../containers/LoginContainer.jsx';


const LoginView = ()=>{
    return(
        <div>    
            <h1>ESSA É A PAGINA DE LOGIN</h1>
            <Link to="/agenda">Agenda</Link>
            <LoginContainer></LoginContainer>
        </div>
    )
}


export default LoginView;