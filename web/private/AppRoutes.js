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
        console.log('props app routes ', this.props)
    }

    componentDidMount(){
        console.log('oi did app routes')
        $.ajax({
            url: '/user/isLogged',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify({teste:'oi'}),
            success: (ans) => { this.response = ans; },
            error: (err) => { this.response = {error : err.responseJSON.error} },
            complete: () => {
                console.log('foi a res ', this.response);
                if(this.response.data){
                    this.props._setLogged()
                    console.log('loggado com sucesso')
                   
                }else{  
                    console.log('error: ' + this.response.error)
                }
                
            }
        });
    }
    render(){
        console.log('render app routes ', this.props,)
        const isLogged = this.props.isLogged;
        if (isLogged == null) {
            return <div></div>
        }
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


const mapDispatchToProps = dispatch => ({
    _isLogged: () => dispatch(isLogged),
    _setLogged: () => dispatch(setLogged),
});

export default connect(mapStateToProps,mapDispatchToProps)(AppRoutes);