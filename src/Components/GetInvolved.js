import React, {Component} from 'react';
import {Zoom, Fade} from 'react-reveal';
import './About.css';
import Tags from './Tags'

export default class GetInvolved extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(props){
        return(
            <Fade>
            <div className="card">
              <h3 className="title">Get Involved</h3>
              <p>Open Discussions - Tuesdays, 7PM, Boelter 4413</p>
              <p>Contact - management@bruinreview.com</p>
            </div>
            </Fade>
        )
    }
}
