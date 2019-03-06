import React , {Component} from 'react';
import { Link } from 'react-router-dom'
import LoginContainer from '../containers/LoginContainer.jsx';
import { connect } from 'react-redux';
import {
    Redirect
} from 'react-router-dom'; 

class LoginView extends Component{
    render(){
        if(this.props.isLogged == true){
            return <Redirect to='/agenda'/>
        }
        return(
            <div>    
                <h1>ESSA É A PAGINA DE LOGIN</h1>
                <Link to="/agenda">Agenda</Link>
                <LoginContainer></LoginContainer>
            </div>
        )
    }
}




const mapStateToProps = store => ({
    isLogged: store.appReduce.isLogged,
  });

export default connect(mapStateToProps)(LoginView);