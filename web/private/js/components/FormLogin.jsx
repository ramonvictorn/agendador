import React from 'react';

const FormLogin = ()=>{
    return(
        <form>
            <label>
                Email:
                <input type="text" name="login" />
            </label>
            <label>
                Senha:
                <input type="password" name="password" />
            </label>
            
            <input type="submit" value="Log in" />
        </form>
    )
    
} 

export default FormLogin;