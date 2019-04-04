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
        this.onKeyPress = this.onKeyPress.bind(this)
    }
    getValues(){
        this.formValues.login = $('#login').val();
        this.formValues.password = $('#password').val();
    }
    ajaxLogin(){
        this.getValues();
        if(this.formValues.login.length != 0 && this.formValues.password.length != 0){
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
                        this.props._setLogged(true)
                        console.log('FormLogin data: loggado com sucesso', this.props)
                        return <Redirect to='/login'/>
                       
                    }else{  
                        console.log('FormLogin error: ' + this.response.error)
                        alert('dados incorretos')
                    }
                    
                }
            });
        }else{
            alert('Preencha todos os campos para fazer login!')
        }
    }
    onKeyPress(event){
        if(event.charCode == 13){
            this.ajaxLogin()
        }
    }
    render(){
        return(
            <div className='FormLogin'>
                <form>
                    <label>
                        Email:
                        <input type="text" id='login' name="login" onKeyPress={this.onKeyPress}/>
                    </label>
                    <label>
                        Senha:
                        <input type="password" id='password' name="password" onKeyPress={this.onKeyPress}/>
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
    _setLogged: (value) => dispatch(setLogged(value)),
  });

export default connect(mapStateToProps,mapDispatchToProps)(FormLogin);