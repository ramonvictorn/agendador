import React, {Component} from 'react';

//components
import HeaderMenu from '../components/HeaderMenu.jsx'

class Administrative extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <React.Fragment>
                <HeaderMenu></HeaderMenu>
                <h1>ADM AQUI</h1>
            </React.Fragment>
        )
    }
}


export default Administrative;