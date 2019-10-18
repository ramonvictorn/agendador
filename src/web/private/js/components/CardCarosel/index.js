import React from 'react';
import './style.css';
let CardCarosel = ()=>{
    return <div className={'card-room'}>
       <div>
            <img src={'https://cozywork.com.br/wp-content/uploads/2019/01/12.jpg'}></img>
       </div>
       <div className={'details'}>
            <div className={'head'}>
                <h2>Sala 502</h2>
           </div>
            <h3>Localizada no bloco A,terréo</h3>
       </div>
    </div>
}
export default CardCarosel;