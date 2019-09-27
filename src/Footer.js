import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';



export default class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return(
            <div className="flex flex-column justify-end footer items-center" >
                <div id="audio" className="iconType audioIcon"   onClick={this.props.handleFilter}/>
                <div id="regular" className="iconType regularIcon" onClick={this.props.handleFilter}/>
                <div id="video" className="iconType videoIcon"   onClick={this.props.handleFilter}/>
                <div className="ft-line-top"></div>
                <div className="iconType profileIcon" />
                <div className="ft-line-bottom"></div>
            </div>

        )
    }

}
