import React, {Component} from 'react';
import {Zoom} from 'react-reveal';
import './Card.css';
import Tags from './Tags';
import {withRouter} from 'react-router-dom';
import Img from 'react-image';
import VisibilitySensor from 'react-visibility-sensor'

class Card extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(props){
        let paddingTop = "0";
        if(this.props.imgURL)
            paddingTop = "70%";
            //<Reveal collapse "animated zoomIn" when={this.props.show} delay={delay*100} duration={300}>
        let delay = Math.floor(Math.random() * 5);
        return(
            <React.Fragment>
                <Zoom appear style={{height:500}} collapse fraction={1} when={this.props.show} delay={delay*50}>
                <div onClick={()=>{this.props.transitionToFull(this.props.slug)}}
                 className ={`${this.props.category}-card card`}>
                  <div className="flex justify-between">
                      <div className="article-title">{this.props.title}</div>
                      {/*<div className= {`iconType ${this.props.type}`}/>*/}
                  </div>
                  <p className="metadata">{this.props.date}</p>
                  <div className="img" style={{paddingTop: paddingTop, backgroundImage:`url(${this.props.imgURL})`}} ></div>
                  <p className="metadata" style={{fontWeight: "bold"}}>by: {this.props.author}</p>
                </div>
                </Zoom>
            </React.Fragment>
        )
    }
}
export default withRouter(Card);
