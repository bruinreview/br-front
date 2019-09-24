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
            apply: false
        }
    }

    render(props){
        return(
            <Fade>
            <div style={{overflow: "auto"}} className="card" id="contact-card">
              <h3 className="title">Contact Us</h3>
              <p>I am a...</p>
              <ButtonList />
              <p>Tell us about an issue in which you hold a contrarian view.</p>
              <textarea id="response1"/>
              <p>Describe a recent project or side-hustle.</p>
              <textarea id="response2"/>
              <button id="submitBtn">Submit</button>
            </div>
            </Fade>
        )
    }
}
