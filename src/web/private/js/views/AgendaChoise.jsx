import React, {Component} from 'react';
import {connect} from 'react-redux'
import {DropdownButton,Dropdown} from 'react-bootstrap';

//components
import HeaderMenu from '../components/HeaderMenu.jsx';
import Card from '../components/Card.jsx';
import Loading from '../components/Loading.jsx';


// acions
import {
    addSchedule,
} from '../actions/agendaAction.js'
import {
    toggleLoading,
} from '../actions/appActions.js'

class AgendaChoise extends Component {
    constructor({match,history}){
        super();
        this.history = history;
        this.redirectToAgenda = this.redirectToAgenda.bind(this);
        this.getUserSchedules = this.getUserSchedules.bind(this);
        this.schedules;
    }

    getUserSchedules(){
        // console.log('agendaChoice getUserSchedules', this.props.schedules.length)
        if(this.props.schedules.length == 0 ){
            // console.log('nao tem os schedules')
            let serverAns;
            this.props._toggleLoading();
            $.ajax({
                url: '/schedule/getUserSchedules',
                dataType: 'json',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({}),
                success: (ans) => { serverAns = ans; },
                error: (err) => { serverAns = {err : err.responseJSON} },
                complete: () => {
                    this.props._toggleLoading();
                    if(!serverAns.err){
                        // callback
                        // console.log('agendaChoice ', serverAns.data)
                        this.props._addSchedule(serverAns.data)
                    } 
                }
            });
        }else{
            // console.log('ja tem os schedules')
        }
    }

    redirectToAgenda(link){
        console.log('change o drop')
        // if(eventKey == 501){
            this.props.history.push(`/agenda/${link}`)
        // }
    }
    componentDidMount(){
        // console.log('agendaChoice didMount ')
        this.getUserSchedules()
    }

    render(){
        let loading;
        // if(this.props.loading){
            loading = <Loading></Loading>
        // }else{
        //     loading = <h1>DEU false</h1>
        // }
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
                // console.log('looping', cont , keyToPass)
                cards.push(
                    <Card key={key}
                    name={name} 
                    image={image} id={id} 
                    redirectToAgenda={this.redirectToAgenda}></Card>
                )
            }
        }else{
            let key = 0;
            cards.push(
                <h1 key={key}>NÃO EXISTEM AGENDAS</h1>
            )
        }
        return(
            <React.Fragment>
                {loading}
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
    loading: store.appReduce.loading,
  });

const mapDispatchToProps = dispatch => ({
    _addSchedule : (value) => dispatch(addSchedule(value)),
    _toggleLoading:()=>dispatch(toggleLoading()),
});
export default connect(mapStateToProps,mapDispatchToProps)(AgendaChoise)