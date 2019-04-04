import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    setLogged,
    isLogged,
} from '../actions/appActions.js';
import {
    saveUser
} from  '../actions/usersActions.js';
class UserMenu extends Component {
    constructor(){
        super()
        this.logout = this.logout.bind(this);
    }

    logout(){
        let serverAns;
        $.ajax({
            url: '/user/logout',
            dataType: 'json',
            type: 'POST',
            success: (ans) => { serverAns = ans; },
            error: (err) => { serverAns = {err : err.responseJSON} },
            complete: () => {
                if(serverAns.err == undefined){
                    this.props._setLogged(false);
                    this.props._saveUser(null)
                }
            }
        });
    }
    
    render(){
        console.log('user menu render',this.props.users)
        if(this.props.users){

        }
        if(this.props.user == null){
            let response = {}
            $.ajax({
                url: '/user/getUser',
                dataType: 'json',
                type: 'post',
                contentType: 'application/json',
                success: (ans) => { response = ans; },
                error: (err) => { response = {error : err.responseJSON.error} },
                complete: () => {
                    if(response.data){
                        this.props._saveUser(response.data)
                    }
                }
            });
        }

        let name =this.props.user ? this.props.user.name : '';
        let imgUrl = this.props.user ? this.props.user.details.urlUser : '';
        return (
            <React.Fragment>
                <div className={'userMenu'} onClick={()=>this.logout()}>
                    <h1>{name}</h1>
                    <div className={'circle'}>
                        <img className={'userImg'} 
                        src={imgUrl}></img>
                    </div>
                </div>
            </React.Fragment>
            
        )
    }
}


const mapStateToProps = store => ({
    users: store.usersReduce.users,
    isLogged: store.appReduce.isLogged,
  });

const mapDispatchToProps = dispatch => ({
    _saveUser: (values) => dispatch(saveUser(values)),
    _isLogged: () => dispatch(isLogged),
    _setLogged: (value) => dispatch(setLogged(value)),
});
export default connect(mapStateToProps,mapDispatchToProps)(UserMenu)