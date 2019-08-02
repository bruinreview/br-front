import React, {Component} from 'react';
import {Zoom, Fade} from 'react-reveal';
import './Card.css';

export default class Card extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <Fade>
            <div className = "feature-card">

            </div>
            </Fade>
        )
    }


}
