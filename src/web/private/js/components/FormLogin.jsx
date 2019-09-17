import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Modal, Button, Form, Row,Col} from 'react-bootstrap';
import {
    setLogged,
    saveMyId,
} from '../actions/appActions.js'
import {
    Redirect,
} from 'react-router-dom';

import {
    saveUser
} from  '../actions/usersActions.js';


class FormLogin extends Component{
    constructor(){
        super()
        this.formValues = {}
        this.getValues = this.getValues.bind(this);
        this.ajaxLogin = this.ajaxLogin.bind(this);
        this.response  = {};
        this.onKeyPress = this.onKeyPress.bind(this);
        this.getMyUser = this.getMyUser.bind(this)
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
                    // console.log('foi a res ', this.response);
                    if(this.response.data){
                        this.props._setLogged(true)
                        console.log('FormLogin data: loggado com sucesso', this.props)
                        this.getMyUser();     
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
    onKeyPress(event){
        if(event.charCode == 13){
            this.ajaxLogin()
        }
    }
    render(){
        return(
            <div className='FormLogin'>
            {/* <div className='login-container'> */}
            <h1>Fazer login</h1>
            <p>Novo usuário ? Crie uma conta</p>
                <form>
                     <Row>
                        <Col >
                            <label className={'label'}>
                                Email:
                                <input type="email" id='login' name="login" onKeyPress={this.onKeyPress}/>
                                </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <label className={'label'}>
                                Senha:
                                <input type="password" id='password' name="password" onKeyPress={this.onKeyPress}/>
                            </label>
                        </Col>
                     </Row>
                </form>
                Esqueceu sua senha?
                <button className={'btLogin'} onClick={()=>{this.ajaxLogin()}}>Login</button>
            </div>
        )
    }
} 

const mapStateToProps = store => ({
    isLogged: store.appReduce.isLogged,
  });


const mapDispatchToProps = dispatch => ({
    _setLogged: (value) => dispatch(setLogged(value)),
    _saveMyId: (values) => dispatch(saveMyId(values)),
    _saveUser:(value) => dispatch(saveUser(value))
  });

export default connect(mapStateToProps,mapDispatchToProps)(FormLogin);