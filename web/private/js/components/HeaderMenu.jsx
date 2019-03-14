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
    }
    render(){
        return(
            <React.Fragment>
                <div className={'headerMenu'}>
                <UserMenu></UserMenu>
                    <div className={'menu'}>
                        <Link className={'linkStyle'} to="/choiseAgenda">Agenda</Link>
                        <Link  className={'linkStyle'} to="/espaços">Espaços</Link>
                        <Link  className={'linkStyle'} to="/agenda">Contato</Link>
                        <Link  className={'linkStyle'}to="/administrative">Administrativo</Link>
                        
                    </div>
                    
                </div>
            </React.Fragment>
        )
    }
}


// store
const mapStateToProps = store => ({
    isLogged: store.appReduce.isLogged,
  });


const mapDispatchToProps = dispatch => ({
    _isLogged: () => dispatch(isLogged),
    _setLogged: (value) => dispatch(setLogged(value)),
});

export default connect(mapStateToProps,mapDispatchToProps)(HeaderMenu);