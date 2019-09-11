import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import {
    isLogged,
    setLogged, 
} from '../actions/appActions.js'

import UserMenu from '../components/UserMenu.jsx'

class HeaderMenu extends Component{
    constructor(){
        super()
        this.nameSchedule = ''
    }
    render(){
        return(
            <React.Fragment>
                <div className={'headerMenu'}>
                <UserMenu></UserMenu>
                <div className={'currentAgenda'}>
                    <h3 className={'nameAgendaCurrent'}>{this.props.currentSchedule.name}</h3>
                </div>
                    <div className={'menu'}>
                        <Link className={'linkStyle'} to="/choiseAgenda">Programação</Link>
                        <Link  className={'linkStyle'} to="/choiseAgenda">Salas</Link>
                        <Link  className={'linkStyle'} to="/choiseAgenda">Minhas Reservas</Link>
                        {/* <Link  className={'linkStyle'}to="/administrative">Administrativo</Link> */}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


// store
const mapStateToProps = store => ({
    isLogged: store.appReduce.isLogged,
    currentSchedule: store.agendaReduce.currentSchedule,
  });


const mapDispatchToProps = dispatch => ({
    _isLogged: () => dispatch(isLogged),
    _setLogged: (value) => dispatch(setLogged(value)),
});

export default connect(mapStateToProps,mapDispatchToProps)(HeaderMenu);