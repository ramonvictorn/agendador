import React,{Component} from "react";
import {Link} from "react-router-dom";



class Card extends Component{
    // constructor({history,img,name,id,keyToPass,redirectToAgenda}){
        constructor({history,img,name,id,redirectToAgenda}){
        super()
        // this.redirectSchedule = this.redirectSchedule.bind(this);
        this.state = {

        }
    }


    // redirectSchedule(link){
    //     console.log('redirect card = ','link', this.props)
    //     // this.props.history.push(`agenda/${link}`)
    // }
    render(){
        // console.log('ramon no card',this.props)
        var style = {
            color:'black',
            background: ` url(${this.props.image})`,
            backgroundSize: 'cover',
        }
        return( 
            <React.Fragment>
                {/* <div className={'cardSpace'} style={style} onClick={()=>{this.props.redirectToAgenda(this.props.id)}}> */}
                <div className={'cardSpace'} style={style} onClick={()=>{this.props.redirectToAgenda(this.props.id)}}>
                    <div className={'nameSpace'}>
                        <h3 className={'nameTxt'}>{this.props.name}</h3>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Card;