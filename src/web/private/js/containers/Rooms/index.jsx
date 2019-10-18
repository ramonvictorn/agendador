import React,{Component} from 'react';
import './style.css';
class Rooms extends Component {
    render(){
        return (
            <>
            <div className={'rooms-card'}>
                <div className={'imgs-carosel'}>
                    <img src={'https://cozywork.com.br/wp-content/uploads/2019/01/12.jpg'}></img>
                </div>
                <div className={'details'}>
                        <div className={'head'}>
                            <h2>Sala 502</h2>
                        </div>
                        <h3>Localizada no bloco A,terréo</h3>
                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 10.5C15.825 10.5 16.4925 9.825 16.4925 9L16.5 1.5C16.5 0.675 15.825 0 15 0H3C2.175 0 1.5 0.675 1.5 1.5V9C1.5 9.825 2.175 10.5 3 10.5H0V12H18V10.5H15ZM3 1.5H15V9H3V1.5Z" fill="#4B4B4D"/>
</svg>

                        <h3>10 computadores</h3>
                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.3636 0H1.63636C0.736364 0 0 0.7 0 1.55556V10.8889C0 11.7444 0.736364 12.4444 1.63636 12.4444H5.72727V14H12.2727V12.4444H16.3636C17.2636 12.4444 17.9918 11.7444 17.9918 10.8889L18 1.55556C18 0.7 17.2636 0 16.3636 0ZM16.3636 10.8889H1.63636V1.55556H16.3636V10.8889Z" fill="#4B4B4D"/>
</svg>

                        <h3>Televisão</h3>
                        <h3>Ver normativa da sala</h3>
                </div>
            </div>
            </>
        )
    }
}
export default Rooms;