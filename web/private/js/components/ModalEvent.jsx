import React from 'react';


const ModalEvent = ()=>{
    const toogleView = ()=> {
        console.log('clicado')
    };
    
    return (
        <div className='modalEvent'>
            <form>
                <label>
                    Titulo:
                    <input type="text" name="title" />
                </label>
                <label>
                    Inicio:
                    <input type="date" name="start" />
                </label>
                <label>
                    Fim:
                    <input type="date" name="end" />
                </label>
                <label>
                    Agenda:
                <select>
                    <option value="501">Sala de Reunião</option>
                    <option value="201">Estúdio</option>
                    </select>
                </label>
            </form>
            <button>Reservar</button>
        </div>
    )

}

export default ModalEvent;