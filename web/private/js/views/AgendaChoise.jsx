import React, {Component} from 'react';
import {connect} from 'react-redux'
import {DropdownButton,Dropdown} from 'react-bootstrap';
import Card from '../components/Card.jsx';
//components
import HeaderMenu from '../components/HeaderMenu.jsx';

// acions
import {
    addSchedule,
} from '../actions/agendaAction.js'

class AgendaChoise extends Component {
    constructor({match,history}){
        super();
        this.history = history;
        this.redirectToAgenda = this.redirectToAgenda.bind(this);
        this.getUserSchedules = this.getUserSchedules.bind(this);
        this.schedules;
    }

    getUserSchedules(){
        let serverAns;
        $.ajax({
            url: '/schedule/getUserSchedules',
            dataType: 'json',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({}),
            success: (ans) => { serverAns = ans; },
            error: (err) => { serverAns = {err : err.responseJSON} },
            complete: () => {
                if(!serverAns.err){
                    // callback
                    console.log("getUserSchedule ",serverAns.data)
                    this.props._addSchedule(serverAns.data)
                } 
            }
        });
    }

    redirectToAgenda(eventKey,event){
        // console.log('change o drop', eventKey)
        // if(eventKey == 501){
        //     this.props.history.push('/agenda/501')
        // }
    }
    componentDidMount(){
        console.log('agendaChoice didMount ')
        this.getUserSchedules()
    }

    render(){
        console.log('render agenda choice', this.props)
        document.title = 'Agendador - Escolher agenda'
        document.body.style = 'background: #ffffff;;';
        let cards = []
        for(var cont = 0; cont <this.props.schedules.length; cont++){
            console.log('looping', cont)
            let name = this.props.schedules[cont].name;
            let image = this.props.schedules[cont].details.images[0]
            cards.push(
                <Card key={cont} name={name} image={image}></Card>
            )
        }
        return(
            <React.Fragment>
                <HeaderMenu></HeaderMenu>
                    <div className={'cards'}>
                    {cards}
                        {/* <Card history={history}></Card> */}
                        {/* <Card history={history}></Card> */}
                    </div>
                    {/* <DropdownButton onSelect={(eventKey,event)=>{this.redirectToAgenda(eventKey,event)}} id="dropdown-basic-button" title=" Escolha uma agenda:" className={'divCenter'}>
                        <Dropdown.Item eventKey={'501'}>501 - Sala de reunião</Dropdown.Item>
                        <Dropdown.Item disabled eventKey={'500'}>500 - Estúdio</Dropdown.Item>
                    </DropdownButton> */}
                {/* {options} */}
                
            </React.Fragment>
        )
    }

}


const mapStateToProps = store => ({
    schedules: store.agendaReduce.schedules,
  });

const mapDispatchToProps = dispatch => ({
    _addSchedule : (value) => dispatch(addSchedule(value)),
});
export default connect(mapStateToProps,mapDispatchToProps)(AgendaChoise)