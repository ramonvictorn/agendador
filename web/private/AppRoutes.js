import React, {Component} from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    Redirect
} from 'react-router-dom'; 
import { connect } from 'react-redux';
import {
    isLogged,
    setLogged, 
    saveUser,
} from './js/actions/appActions.js'


// views
import LoginView from '../private/js/views/LoginView.jsx'
import NoMatch404 from '../private/js/views/NoMatch404.jsx';
import AgendaView from '../private/js/views/AgendaView.jsx';
import AgendaChoise from '../private/js/views/AgendaChoise.jsx'
import Administrative from '../private/js/views/Administrative.jsx'


import HeaderMenu from '../private/js/components/HeaderMenu.jsx'

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
        this.saveUserOnStore = this.saveUserOnStore.bind(this)
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
                    this.props._setLogged(true)
                    this.saveUserOnStore()
                   
                }else{  
                    this.props._setLogged(false)
                }
                
            }
        });
    }
    saveUserOnStore(){
        
        // let response = {}
        // $.ajax({
        //     url: '/user/getUser',
        //     dataType: 'json',
        //     type: 'post',
        //     contentType: 'application/json',
        //     success: (ans) => { response = ans; },
        //     error: (err) => { response = {error : err.responseJSON.error} },
        //     complete: () => {
        //         if(response.data){
        //             this.props._saveUser(response.data)
                   
        //         }
        //     }
        // });
        
    }
    render(){
        const isLogged = this.props.isLogged;
        if (isLogged == null) {
            return <div></div>
        }
        return(
            <Router>    
                <Switch>
                    <Route path='/login' component={LoginView}/>
                    <PrivateRoute path='/agenda/:idAgenda' isLogged={this.props.isLogged} component={AgendaView}/>
                    <PrivateRoute path='/agenda' isLogged={this.props.isLogged} component={AgendaChoise}/>
                    <PrivateRoute path='/choiseAgenda' isLogged={this.props.isLogged} component={AgendaChoise}/>
                    <PrivateRoute path='/administrative/' isLogged={this.props.isLogged} component={Administrative}/>
                    <PrivateRoute exact path='/' isLogged={this.props.isLogged} component={AgendaChoise}/>
                    <Route component={NoMatch404}/>
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
    user: store.appReduce.user
  });


const mapDispatchToProps = dispatch => ({
    _isLogged: () => dispatch(isLogged),
    _setLogged: (value) => dispatch(setLogged(value)),
    _saveUser: (value) => dispatch(saveUser(value))
});

export default connect(mapStateToProps,mapDispatchToProps)(AppRoutes);