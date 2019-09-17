import React, {Component} from 'react';
// import loading from '../../../public/images/loading.gif';
class Loading  extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <React.Fragment>
               <div>
               <img className={'loading'} src={'/img/loading.gif'}></img>
               </div>
            </React.Fragment>
        )
    }
}



export default Loading;