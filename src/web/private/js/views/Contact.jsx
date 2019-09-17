import React, {Component} from 'react';

//components
import HeaderMenu from '../components/HeaderMenu.jsx'

class Contact extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <React.Fragment>
                <HeaderMenu></HeaderMenu>
                <h1>Página de contato  AQUI</h1>
            </React.Fragment>
        )
    }
}


export default Contact;