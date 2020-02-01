import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal'
import {Zoom, Fade} from 'react-reveal';
import './Card.css';
import Tags from './Tags';
import {withRouter} from 'react-router-dom';

class Card extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(props){
            //<Reveal collapse "animated zoomIn" when={this.props.show} delay={delay*100} duration={300}>
        let delay = Math.floor(Math.random() * 5);
        return(
            <Zoom collapse when={this.props.show} delay={delay*50}>
            <div onClick={()=>{this.props.transitionToFull(this.props.id)}}
             className ={`${this.props.category}-card card`}>
              <div className="flex justify-between title">
                  <p className="article-title">{this.props.title}</p>
                  <div className= {`iconType ${this.props.type}`}/>
              </div>
              <p className="metadata">{this.props.date}</p>
              <div><img src={this.props.imgURL}/></div>
              <Tags className="metadata" tags={["#test1", "#test2", "#test3"]} />
              <p className="metadata" style={{fontWeight: "bold"}}>by: {this.props.author}</p>
            </div>
            </Zoom>
        )
    }
}
export default withRouter(Card);
