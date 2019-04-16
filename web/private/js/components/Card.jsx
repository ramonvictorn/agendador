import React,{Component} from "react";
import {Link} from "react-router-dom";



class Card extends Component{
    constructor({history,img,name,link}){
        super()
        this.redirect = this.redirect.bind(this);
        this.state = {

        }
    }


    redirect(link){
        this.props.history.push(`agenda/${link}`)
    }
    render(){
        console.log('ramon no card',this.props)
        var style = {
            color:'black',
            background: ` url(${this.props.image})`,
            backgroundSize: 'cover',
        }
        return( 
            <React.Fragment>
                <div className={'cardSpace'} style={style}>
                    <div className={'nameSpace'}>
                        <h3 className={'nameTxt'}>{this.props.name}</h3>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Card;