import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    saveUser,
} from '../actions/appActions.js'
class UserMenu extends Component {
    render(){
        if(this.props.user == null){
            let response = {}
            console.log('save user no user menu')
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
        console.log('foo userMenu props ', this.props)
        return (
            <React.Fragment>
                <div className={'userMenu'}>
                <h1>{name}</h1>
                <img className={'userImg'} 
                src={imgUrl}></img>
                </div>
            </React.Fragment>
            
        )
    }
}

const mapStateToProps = store => ({
    user: store.appReduce.user
  });

const mapDispatchToProps = dispatch => ({
    _saveUser: (values) => dispatch(saveUser(values)),
});
export default connect(mapStateToProps,mapDispatchToProps)(UserMenu)