import React, {Component} from 'react';
import {connect} from 'react-redux'
import {DropdownButton,Dropdown} from 'react-bootstrap';

//components
import HeaderMenu from '../components/HeaderMenu.jsx'

class AgendaChoise extends Component {
    constructor({match,history}){
        super();
        this.history = history;
        this.redirectToAgenda = this.redirectToAgenda.bind(this)
    }

    redirectToAgenda(eventKey,event){
        console.log('change o drop', eventKey)
        if(eventKey == 501){
            this.props.history.push('/agenda/501')
        }
    }
    render(){
        document.title = 'Agendador - Escolher agenda'
        document.body.style = 'background: #ffffff;;';
        return(
            <React.Fragment>
                <HeaderMenu></HeaderMenu>
                
                    <DropdownButton onSelect={(eventKey,event)=>{this.redirectToAgenda(eventKey,event)}} id="dropdown-basic-button" title=" Escolha uma agenda:" className={'divCenter'}>
                        <Dropdown.Item eventKey={'501'}>501 - Sala de reunião</Dropdown.Item>
                        <Dropdown.Item disabled eventKey={'500'}>500 - Estúdio</Dropdown.Item>
                    </DropdownButton>
                
                
            </React.Fragment>
        )
    }

}

export default connect()(AgendaChoise)