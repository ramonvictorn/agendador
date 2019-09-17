import React , {Component} from 'react';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
import {
    Redirect
} from 'react-router-dom'; 
import LoginContainer from '../containers/LoginContainer.jsx';
import LoginLogo from '../components/LoginLogo.jsx';

class LoginView extends Component{
    render(){
        // document.body.style = 'background:#26819D;';
        document.body.style = 'background: linear-gradient(180deg, #26819D 65%, #ffffff 45%);';
        // <Helmet bodyAttributes={{style: 'background-color : #fff'}}/>

        if(this.props.isLogged == true){
            return <Redirect to='/agenda'/>
        }
        return(
            <React.Fragment>
                <div className={'loginBackgroung'}>

                <LoginLogo></LoginLogo>
                <div className={'login'}>    
                    {/* <div className="login-triangle"></div>
                    <h2 className="login-header">Log in</h2>  */}
                <LoginContainer></LoginContainer>
                </div>
                </div>
            </React.Fragment>
        )
    }
}




const mapStateToProps = store => ({
    isLogged: store.appReduce.isLogged,
  });

export default connect(mapStateToProps)(LoginView);