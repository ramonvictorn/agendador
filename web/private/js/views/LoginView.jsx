import React , {Component} from 'react';
import { Link } from 'react-router-dom'
import LoginContainer from '../containers/LoginContainer.jsx';
import { connect } from 'react-redux';
import {
    Redirect
} from 'react-router-dom'; 

class LoginView extends Component{
    render(){
        document.body.style = 'background: #456;;';
        if(this.props.isLogged == true){
            return <Redirect to='/agenda'/>
        }
        return(
            <div className={'login'}>    
                <div className="login-triangle"></div>
                <h2 className="login-header">Log in</h2> 
                <LoginContainer></LoginContainer>
            </div>
        )
    }
}




const mapStateToProps = store => ({
    isLogged: store.appReduce.isLogged,
  });

export default connect(mapStateToProps)(LoginView);