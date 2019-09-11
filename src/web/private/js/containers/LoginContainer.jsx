import React from 'react';
import Button from '../components/Button.jsx';
import FormLogin from '../components/FormLogin.jsx';

class LoginContainer extends React.Component{
    constructor(props){
        super(props);        
    }
    render() {
        return (
          <div>
              <FormLogin></FormLogin>
          </div>  
        );
      }
}




export default LoginContainer;