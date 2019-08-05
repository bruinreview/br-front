import React, {Component} from 'react';
import {Zoom, Fade} from 'react-reveal';
import './Card.css';

export default class Card extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(props){
        return(
            <Fade>
            <div className = "feature-card">
              <p className="article-title">{this.props.title}</p>
              <p className="date">{this.props.date}</p>
            </div>
            </Fade>
        )
    }
}
