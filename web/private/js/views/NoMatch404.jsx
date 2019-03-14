import React from 'react';


//components
import HeaderMenu from '../components/HeaderMenu.jsx'
const NoMatch404 = ()=>{
    return(
        <React.Fragment>
            <HeaderMenu></HeaderMenu>   
            <div className='noMatch404'>
                <h1>Pagina não encontrada erro 404</h1>
            </div>
        </React.Fragment>
    )
}

export default NoMatch404;