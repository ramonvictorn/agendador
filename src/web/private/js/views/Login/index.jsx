import React , {Component} from 'react';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
import {
    Redirect
} from 'react-router-dom'; 
import LoginContainer from '../../containers/LoginContainer.jsx';
import LoginLogo from '../../components/LoginLogo/index.js';
import './style.css'
class LoginView extends Component{
    constructor(){
        super();
        this.state = {
            largura : window.innerWidth,
            altura :  window.innerHeight,
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    render(){
        console.log('Login view render ', this.state);
        let largura = window.innerWidth;
        let altura =  window.innerHeight;
        document.body.style = 'background-image:url("/assets/images/loginBackground.png");background-size: 100% 60%;background-repeat: no-repeat;';
        // using color--> document.body.style = `background: linear-gradient(180deg, #26819D 55%, #ffffff 45%);`;

        if(this.props.isLogged == true){
            return <Redirect to='/agenda'/>
        }
        let altura2 = altura*0.55
        let styleObj = {
            top:`${altura2-45}px`,
            left: `${largura-400}px`
        }
        return(
            <React.Fragment>
                <div className={'login-backgroung'}>
                    <div className={'logo-div'}>
                        <LoginLogo></LoginLogo>
                    </div>
                    <div className={'login-div'} style={styleObj}> 
                        <div className={'form-login-container'}>
                            <LoginContainer history={this.props.history}></LoginContainer>
                        </div>
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