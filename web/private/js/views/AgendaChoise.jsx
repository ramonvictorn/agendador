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
        console.log('agendaChoice getUserSchedules', this.props.schedules.length)
        if(this.props.schedules.length == 0 ){
            console.log('nao tem os schedules')
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
                        console.log('agendaChoice ', serverAns.data)
                        this.props._addSchedule(serverAns.data)
                    } 
                }
            });
        }else{
            console.log('ja tem os schedules')
        }
    }

    redirectToAgenda(link){
        console.log('change o drop')
        // if(eventKey == 501){
            this.props.history.push(`/agenda/${link}`)
        // }
    }
    componentDidMount(){
        console.log('agendaChoice didMount ')
        this.getUserSchedules()
    }

    render(){
        console.log('render agenda choice', this.props.schedules)
        document.title = 'Agendador - Escolher agenda'
        document.body.style = 'background: #ffffff;;';
        let cards = [];
        let key = 0;
        if(this.props.schedules.length > 0){
            for(var cont = 0; cont <this.props.schedules.length; cont++){
                let name = this.props.schedules[cont].name;
                let image = this.props.schedules[cont].details.images[0];
                let id = this.props.schedules[cont]['_id']
                let keyToPass = {id:cont};
                key = cont
                console.log('looping', cont , keyToPass)
                cards.push(
                    <Card key={key}
                    name={name} 
                    image={image} id={id} 
                    redirectToAgenda={this.redirectToAgenda}></Card>
                )
            }
            // this.props.schedules.forEach(function(el,index){
            //     // let self = this;
            //     console.log('looping ramon', this)
            //     console.log(el,index)
            //     let key = index;
            //     cards.push(
            //             // <h1 key={index}>
            //             //     {index}
            //             // </h1>
            //             <Card 
            //             key={key} 
            //             name={el.name} 
            //             image={el.details.images[0]} 
            //             id={el['_id']}
            //             // redirectToAgenda={this.redirectToAgenda}
            //             >
            //          </Card>
            //     )
            // })
        }else{
            let key = 0;
            cards.push(
                <h1 key={key}>NÃO EXISTEM AGENDAS</h1>
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