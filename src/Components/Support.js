import React, {Component} from 'react';
import {Zoom, Fade} from 'react-reveal';
import './About.css';
import Tags from './Tags'

export default class Support extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(props){
        return(
            <Fade>
            <div className="card">
              <h3 className="title">Support the Bruin Review</h3>
            </div>
            </Fade>
        )
    }
}
