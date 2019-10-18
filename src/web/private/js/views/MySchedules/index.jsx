import React,{Component} from 'react';
import HeaderMenu from '../../components/HeaderMenu/index.jsx';
import MyShedulesContainer from '../../containers/MySchedules/index.jsx'
class MySchedules extends Component {
    render(){
        return(
            <>
            <HeaderMenu/>
            <MyShedulesContainer/>
            </>
        )
    }
}
export default MySchedules;