import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import UserMenu from '../components/UserMenu.jsx'

class HeaderMenu extends Component{

    render(){
        return(
            <React.Fragment>
                <div className={'headerMenu'}>
                <UserMenu></UserMenu>
                    <div className={'menu'}>
                        <Link className={'linkStyle'} to="/choiseAgenda">Agenda</Link>
                        <Link  className={'linkStyle'} to="/espaços">Espaços</Link>
                        <Link  className={'linkStyle'} to="/agenda">Contato</Link>
                        <Link  className={'linkStyle'}to="/agenda">Administrativo</Link>
                        
                    </div>
                    
                </div>
            </React.Fragment>
        )
    }
}

export default HeaderMenu