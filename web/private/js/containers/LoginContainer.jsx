import React from 'react';
import ReactDOM from "react-dom";
import Button from '../components/Button.jsx';

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
           <h1>Oi cara</h1>
            
          </div>  
        );
      }
}




export default LoginContainer;