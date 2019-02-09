import React from 'react';



const ModalEvent = ({show})=>{
    let eventObj = {
        
    }
        
    const toggleShow = ()=> {
        if(show == true) return 'active'
        else {return 'disabled'} 
    } 
    
    function getValues(){
        eventObj.title = $('.titleEvent').val()
        eventObj.start = $('.startEvent').val()
        eventObj.end = $('.endEvent').val()
        eventObj.agenda = $('.agendaEvent').val()
        
        console.log('click in modal',eventObj)
        insertEvent(eventObj);
    }

    function insertEvent(evento){
        let serverAns;
        console.log('insertEvent',evento)
        $.ajax({
            url: '/events/insertEvent',
            dataType: 'json',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(evento),
            success: (ans) => { serverAns = ans; },
            error: (err) => { serverAns = {err : err.responseJSON} },
            complete: () => {
                console.log(serverAns)
                if(!serverAns.err){
                    const post = serverAns.data ? serverAns.data : {};
                    this.props._updatePost(post);  
                } 
            }
        });
    }
    
    return (
        <div className={'modalEvent ' + toggleShow()}>
            <form>
                <label>
                    Titulo:
                    <input type="text" name="title" className="titleEvent" />
                </label>
                <label>
                    Inicio:
                    <input type="datetime-local" name="start" className="startEvent"/>
                </label>
                <label>
                    Fim:
                    <input type="datetime-local" name="end" className="endEvent"/>
                </label>
                <label>
                    Agenda:
                <select className="agendaEvent">
                    <option value="501">Sala de Reunião</option>
                    <option value="201">Estúdio</option>
                    </select>
                </label>
            </form>
            <button onClick={getValues}>Reservar</button>
        </div>
    )

}

export default ModalEvent;