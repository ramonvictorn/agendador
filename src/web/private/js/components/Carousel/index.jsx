import React, {Component} from 'react';
import CarouselBoot from 'react-bootstrap/Carousel'
import CardCarosel from '../CardCarosel/index.js';
import './style.css'
class Carosel extends Component{
    constructor(){
        super();
        this.state = {
            index:0,
            direction:null,
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect (selectedIndex, e) {
        this.setState({index:selectedIndex});
        this.setState({direction:e.direction});
      };
    render(){
        return(
            <>
                <div className={'carousel-container'}>
                    <CardCarosel/>
                    <CardCarosel/>
                    <CardCarosel/>
                </div>
            </>
        )
    }
}
export default Carosel