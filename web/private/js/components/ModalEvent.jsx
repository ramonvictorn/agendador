import React from 'react';


const ModalEvent = ({show})=>{
        
    const toggleShow = ()=> {
        if(show == true) return 'active'
        else {return 'disabled'} 
    }   
    
    return (
        <div className={'modalEvent ' + toggleShow()}>
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