import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ProgrammationContainer from '../containers/Programmation/index.jsx';
import HeaderMenu from '../components/HeaderMenu/index.jsx';
import { connect } from 'react-redux';

class ProgramacaoView extends Component {
    constructor({match,history}) {
        super(); 
        // this.calendarRef = React.createRef();
        this.history = history;
        this.verifySchedule = this.verifySchedule.bind(this);
        this.Calendar = {}
    }

    verifySchedule(){
        let schedulePath = {id:this.props.location.pathname.split('/')[2]}
        let response;
        $.ajax({
            url: "/schedule/getSchedule",
            type:'POST',
            context: 'document',
            data:schedulePath,
            success: (ans) => { response = ans; },
            error: (err) => { response = {error : err.responseJSON.error} },
            complete:()=>{
                if(response.error){
                    console.log('ERRO_AGENDA_VIEW');
                }else{
                    this.props._setCurrentSchedule(response.data)
                }
            }
        })
    }
    componentDidMount(){
        this.verifySchedule();
        // console.log('calendarRef ',  this.calendarRef.current.getInstance());
        // this.Calendar = this.calendarRef.current.getInstance();
        // this.Calendar.setOptions({month: {visibleWeeksCount: 6}}, true); // or null
        // this.Calendar.changeView('month', true);

        // this.calendarRef.current.getInstance();

    }
    render(){
        let today = new Date();
        console.log('AgendaView Render')
        let calendar = <div>Você não possui permissão nessa agenda</div>
        if(this.props.location.pathname.split('/')[2] == this.props.currentSchedule.id){
            // calendar = <MyCalendar/>           
        }
        // const [startDate, setStartDate] = useState(new Date());
        return (
            <React.Fragment>
                <HeaderMenu></HeaderMenu>          
                <ProgrammationContainer/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = store => ({
    modalShow: store.agendaReduce.modalShow,
    currentSchedule: store.agendaReduce.currentSchedule,
  });

  const mapDispatchToProps = dispatch => ({
    _setCurrentSchedule : (values) => dispatch(setCurrentSchedule(values)),
});

  export default connect(mapStateToProps,mapDispatchToProps)(ProgramacaoView);