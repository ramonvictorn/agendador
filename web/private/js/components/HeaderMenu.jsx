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
        if(this.props.currentSchedule != null){
            // console.log(this.props.currentSchedule ,'foo head')
            // let test = {id:this.props.location.pathname.split('/')[2]}
            // let response;
            // $.ajax({
            //     url: "/schedule/getSchedule",
            //     type:'POST',
            //     context: 'document',
            //     data:{id:this.props.currentSchedule},
            //     success: (ans) => { response = ans; },
            //     error: (err) => { response = {error : err.responseJSON.error} },
            //     complete:()=>{
            //         console.log('header menu complete', response)
            //     }
            // })
        }
        return(
            <React.Fragment>
                <div className={'headerMenu'}>
                <UserMenu></UserMenu>
                <div className={'currentAgenda'}>
                    <h3 className={'nameAgendaCurrent'}>{this.props.currentSchedule.name}</h3>
                </div>
                    <div className={'menu'}>
                        <Link className={'linkStyle'} to="/choiseAgenda">Agendas</Link>
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
    currentSchedule: store.agendaReduce.currentSchedule,
  });


const mapDispatchToProps = dispatch => ({
    _isLogged: () => dispatch(isLogged),
    _setLogged: (value) => dispatch(setLogged(value)),
});

export default connect(mapStateToProps,mapDispatchToProps)(HeaderMenu);