import React, {Component} from 'react'
import { connect } from 'react-redux';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    Redirect
} from 'react-router-dom'; 
import {
    isLogged,
    setLogged, 
    saveMyId,
} from './js/actions/appActions.js'

import {
    saveUser,
} from './js/actions/usersActions.js'


// views
import LoginView from '../private/js/views/LoginView.jsx'
import NoMatch404 from '../private/js/views/NoMatch404.jsx';
import RoomsView from '../private/js/views/Rooms/index.jsx';
import ProgramacaoView from '../private/js/views/ProgramacaoView.jsx';
// import AgendaChoise from '../private/js/views/AgendaChoise.jsx'
// import Administrative from '../private/js/views/Administrative.jsx'
// import Contact from '../private/js/views/Contact.jsx'


import HeaderMenu from '../private/js/components/HeaderMenu/index.jsx'

const PrivateRoute = ({component:Component, ...rest})=> {
    return (
        <Route {...rest} render={(props)=>(
            rest.isLogged === true
            ? <Component {...props}/>
            : <Redirect to='/login'/>
        )}/>
    )
}



/**
 * @summary Defined the app route application and which routes are protected
 */
class AppRoutes extends Component{
    constructor(){
        super()
        this.getMyUser = this.getMyUser.bind(this);
    }

    componentDidMount(){
        $.ajax({
            url: '/user/isLogged',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify({teste:'oi'}),
            success: (ans) => { this.response = ans; },
            error: (err) => { this.response = {error : err.responseJSON.error} },
            complete: () => {
                if(this.response.data){
                    // console.log('setLogged para true')
                    this.props._setLogged(true);
                    this.getMyUser();       
                }else{  
                    // console.log('setLogged para false')
                    this.props._setLogged(false)
                }
                
            }
        });
    }
    getMyUser(){
        let response;
        $.ajax({
            url: '/user/getUser',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            success: (ans) => { response = ans; },
            error: (err) => { response = {error : err.responseJSON.error} },
            complete: () => {
               this.props._saveMyId(response.data._id)
               this.props._saveUser(response.data)
            }
        });
    }
    render(){
        const isLogged = this.props.isLogged;
        if (isLogged == null) {
            return <div></div>
        }
        // console.log('render  appRoutes props- > ', this.props)
        return(
            <Router>    
                <Switch>
                    <Route path='/login' component={LoginView}/>
                    {/* <Route path='/agenda/:idAgenda' isLogged={this.props.isLogged} component={AgendaView}/> */}
                    {/* <Route path='/agenda' isLogged={this.props.isLogged} component={AgendaChoise}/> */}
                    {/* <Route path='/choiseAgenda' isLogged={this.props.isLogged} component={AgendaChoise}/> */}
                    {/* <Route path='/administrative/' isLogged={this.props.isLogged} component={Administrative}/> */}
                    {/* <Route path='/contato/' isLogged={this.props.isLogged} component={Contact}/> */}
                    <Route path='/programation' component={ProgramacaoView}/>
                    <Route path='/rooms' component={RoomsView}/>
                    {/* <Route exact path='/' isLogged={this.props.isLogged} component={AgendaChoise}/> */}
                    <Route component={LoginView}/>
                    {/* <Route path={'/'} component={AgendaView}/> */}
                    {/* <PrivateRoute path='/' isLogged={this.props.isLogged} component={AgendaChoise}/> */}
                </Switch>
            </Router>
        )
    }

}

// store
const mapStateToProps = store => ({
    isLogged: store.appReduce.isLogged,
    myId: store.appReduce.myUser,
    users:store.usersReduce.users,
  });


const mapDispatchToProps = dispatch => ({
    _isLogged: () => dispatch(isLogged),
    _setLogged: (value) => dispatch(setLogged(value)),
    _saveMyId: (values) => dispatch(saveMyId(values)),
    _saveUser:(value) => dispatch(saveUser(value))
});

export default connect(mapStateToProps,mapDispatchToProps)(AppRoutes);