import React from 'react';
import Button from '../components/Button.jsx';
import FormLogin from '../components/FormLogin.jsx';

class LoginContainer extends React.Component{
    constructor(props){
        super(props);        
        this.state = { 
            qtdClicks: 0, 
            inverted:false,
         };
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(){
        this.setState({
            qtdClicks:this.state.qtdClicks+1,
            inverted: !this.state.inverted
        })
    }
    render() {
        return (
          <div>
              <FormLogin></FormLogin>
            <Button clickHandler={this.onClickHandler} title='Login'></Button>
          </div>  
        );
      }
}




export default LoginContainer;