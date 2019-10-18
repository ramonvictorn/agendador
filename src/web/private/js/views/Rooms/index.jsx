import React,{Component} from 'react';
import HeaderMenu from '../../components/HeaderMenu/index.jsx';
import RoomsContainer from '../../containers/Rooms/index.jsx';
class Rooms extends Component {
    render(){
        return(
            <>
            <HeaderMenu/>
            <RoomsContainer/>
            </>
        )
    }
}
export default Rooms;