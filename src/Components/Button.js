import React, {Component} from 'react';
import {Zoom, Fade} from 'react-reveal';
import './About.css';

export default class Button extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    selectBtn(){
      document.getElementById('writer').backgroundColor="#b3e7fa";
      document.getElementById('artist').backgroundColor="#b3e7fa";
      document.getElementById('developer').backgroundColor="#66cef5";
      document.getElementById('sponsor').backgroundColor="#b3e7fa";
      document.getElementById('other').backgroundColor="#b3e7fa";
      this.backgroundColor="#66cef5";
    }

    render(props){
        return(
            <button className="button" onClick={(e) => this.selectBtn(e)} id={this.props.label}>{this.props.label}</button>
        )
    }
}
