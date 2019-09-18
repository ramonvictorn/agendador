import React , {Component} from 'react';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
import {
    Redirect
} from 'react-router-dom'; 
import LoginContainer from '../containers/LoginContainer.jsx';
import LoginLogo from '../components/LoginLogo.jsx';

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
        // document.body.style = 'background:#26819D;';
        document.body.style = `background: linear-gradient(180deg, #26819D 60%, #ffffff 40%);`;
        // <Helmet bodyAttributes={{style: 'background-color : #fff'}}/>

        if(this.props.isLogged == true){
            return <Redirect to='/agenda'/>
        }
        // let altura =  window.innerHeight;
        console.log('altura é ->>>>>>> ', altura);
        let altura2 = altura*0.60
        console.log('altura 2 ficou ', altura2, 'e o left -> ', largura);
        let styleObj = {
            // background: 'black',
            top:`${altura2-45}px`,
            left: `${largura-400}px`
        }
       
        return(
            <React.Fragment>
                <div className={'loginBackgroung'}>

                    <LoginLogo></LoginLogo>
                    <div className={'loginDiv'} style={styleObj}>    
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