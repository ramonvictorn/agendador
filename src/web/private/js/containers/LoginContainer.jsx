import React from 'react';
import Button from '../components/Button.jsx';
import FormLogin from '../components/FormLogin.jsx';

class LoginContainer extends React.Component{
    constructor(props){
        super(props);        
    }
    render() {
        return (
          
          <FormLogin></FormLogin>  
        );
      }
}




export default LoginContainer;