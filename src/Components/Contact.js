import React, {Component} from 'react';
import {Zoom, Fade} from 'react-reveal';
import './About.css';
import ButtonList from './ButtonList';
import Button from './Button';
import Tags from './Tags'

export default class Contact extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(props){
        return(
            <Fade>
            <div style={{overflow: "auto"}} className="card">
              <h3 className="title">Contact Us</h3>
              <p>I am a...</p>
              <ButtonList />
              <textarea id="message"/>
              <button id="submitBtn">Submit</button>
            </div>
            </Fade>
        )
    }
}
