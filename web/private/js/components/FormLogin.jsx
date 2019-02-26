import React, {Component} from 'react';
import { connect } from 'react-redux';
import {setLogged} from '../actions/appActions.js'
import {
    Redirect,
    
} from 'react-router-dom'; 

class FormLogin extends Component{
    constructor(){
        super()
        this.formValues = {}
        this.getValues = this.getValues.bind(this);
        this.ajaxLogin = this.ajaxLogin.bind(this);
        this.response  = {};
    }
    getValues(){
        this.formValues.login = $('#login').val();
        this.formValues.password = $('#password').val()
    }
    ajaxLogin(){
        this.getValues();
        $.ajax({
            url: '/user/login',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(this.formValues),
            success: (ans) => { this.response = ans; },
            error: (err) => { this.response = {error : err.responseJSON.error} },
            complete: () => {
                console.log('foi a res ', this.response);
                if(this.response.data){
                    this.props._setLogged()
                    alert('loggado com sucesso')
                   
                }else{  
                    alert('error: ' + this.response.error)
                }
                
            }
        });
    }
     
    render(){
        return(
            <div className='FormLogin'>
                <form>
                    <label>
                        Email:
                        <input type="text" id='login' name="login" />
                    </label>
                    <label>
                        Senha:
                        <input type="password" id='password' name="password" />
                    </label>
                </form>
                <button onClick={()=>{this.ajaxLogin()}}>Login</button>
            </div>
        )
    }
} 

const mapStateToProps = store => ({
    isLogged: store.appReduce.isLogged,
  });


const mapDispatchToProps = dispatch => ({
    _setLogged: () => dispatch(setLogged),
  });

export default connect(mapStateToProps,mapDispatchToProps)(FormLogin);