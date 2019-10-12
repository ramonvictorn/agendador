import React, {Component} from 'react';
import CarouselBoot from 'react-bootstrap/Carousel'
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
                    <div>
                        <img src="https://www.onemoorgateplace.com/wp-content/uploads/2015/09/DSC0504-min-800x550.jpg"></img>
                    </div>
                    <div>
                        <img src="https://usandco.com/wp-content/uploads/2018/12/UsCo-Dublin-Boardroom-1.jpg"></img>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/peerspace-inc/image/upload/q_80,c_crop,g_custom/w_2048/xyfhoku8tckagmfaltow.jpg"></img>
                    </div>
                    <div>
                        <img src="https://microlab.nl/wp-content/uploads/2018/07/DSC_1838.jpg"></img>
                    </div>

                </div>
            </>
        )
    }
}
export default Carosel