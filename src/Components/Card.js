import React, {Component} from 'react';
import {Zoom, Fade} from 'react-reveal';
import './Card.css';
import Tags from './Tags'

export default class Card extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(props){
      // if(this.props.imgURL){
      //   image='<img src={this.props.imgURL} />'
      // } else {
      //   image=null
      // }
        return(
            <Fade>
            <div className = "feature-card">
              <p className="article-title">{this.props.title}</p>
              <p className="metadata">{this.props.date}</p>
              <Tags className="metadata" tags={["#test1", "#test2", "#test3"]} />
              <p className="metadata" style={{fontWeight: "bold"}}>by: {this.props.author}</p>
            </div>
            </Fade>
        )
    }
}
