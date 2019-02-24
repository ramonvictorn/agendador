import React, {Component} from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    Redirect
} from 'react-router-dom'; 
import { connect } from 'react-redux';
import {
    IS_LOGGED 
} from './js/actions/appActions.js'

// views
import LoginView from '../private/js/views/LoginView.jsx'
import NoMatch404 from '../private/js/views/NoMatch404.jsx';
import AgendaView from '../private/js/views/AgendaView.jsx';


const PrivateRoute = ({component:Component, ...rest})=> {
    console.log('private aqui', rest ,)
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
    }
    render(){
        console.log('render app routes ', this.props,)
        return(
            <Router>    
                <Switch>
                    <Route path='/login' component={LoginView}/>
                    <Route path='/ramon' component={AgendaView}/>
                    <PrivateRoute path='/agenda' isLogged={this.props.isLogged} component={AgendaView}/>
                    <Route component={NoMatch404}/>
                </Switch>
            </Router>
        )
    }

}

// store
const mapStateToProps = store => ({
    isLogged: store.appReduce.isLogged
  });


// const mapDispatchToProps = dispatch => ({
//     _toggleModal: () => dispatch(toggleModal),
// });

export default connect(mapStateToProps)(AppRoutes);