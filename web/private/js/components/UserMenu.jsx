import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
//     saveMyId,
    setLogged,
} from '../actions/appActions.js';
import {
    saveUser
} from  '../actions/usersActions.js';

class UserMenu extends Component {
    constructor(){
        super()
        this.logout = this.logout.bind(this);
        this.saveMyUser = this.saveMyUser.bind(this)
    }
    saveMyUser(){
        // let response;
        // $.ajax({
        //     url: '/user/getUser',
        //     dataType: 'json',
        //     type: 'post',
        //     contentType: 'application/json',
        //     success: (ans) => { response = ans; },
        //     error: (err) => { response = {error : err.responseJSON.error} },
        //     complete: () => {
        //         // this.props._saveMyId(response.data)
        //         console.log('data save!',response.data)
        //         this.props._saveUser(response.data)
        //     }
        // });
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
                    // this.props._saveUser(null);
                }
            }
        });
    }
    render(){
        // {this.props.users['5c70b2fc03ee561eb476035e'].img}
        let name = '';
        let img = '';
        if(this.props.users[this.props.myUser]){
            name = this.props.users[this.props.myUser]['name'];
            img = this.props.users[this.props.myUser]['img'];
        }else{
            name = 'nao sei';
            img = 'nao sei';
        }
        /* <h1>NOME AQUI: {this.props.myUser} </h1>
        <h1>IMG AQUI: {name} </h1> */
        return (
            <React.Fragment>
                <div className={'userMenu'} onClick={()=>this.logout()}>
                    <h1>{name}</h1>
                    <div className={'circle'}>
                        <img className={'userImg'} 
                        src={img}></img>
                    </div> 
                </div>
            </React.Fragment>
            
        )
    }
}


const mapStateToProps = store => ({
    myUser: store.appReduce.myUser,
    users: store.usersReduce.users,
    // isLogged: store.appReduce.isLogged,
  });

const mapDispatchToProps = dispatch => ({
    // _saveUser: (values) => dispatch(saveUser(values)),
    // _saveMyId: (values) => dispatch(saveMyId(values)),
   // _isLogged: () => dispatch(isLogged),
   _setLogged: (value) => dispatch(setLogged(value)),
});
export default connect(mapStateToProps,mapDispatchToProps)(UserMenu)