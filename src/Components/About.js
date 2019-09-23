import React, {Component} from 'react';
import {Zoom, Fade} from 'react-reveal';
import './About.css';
import Tags from './Tags'

export default class About extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(props){
        return(
            <Fade>
            <div className="card">
              <h3 className="title">About the Bruin Review</h3>
              <p>The University was once a place of eclectic thought – the gathering of bright minds to encourage the exchange, deliberation, and inspection of ideas. Today, the inverse is true. Universities are proxy for a narrow viewpoint that is easily predictable and left unquestioned. Ideas are no longer submitted as subjects of observation and scrutiny; rather, they are endowed to students as delicacies to be defended at any cost.</p>
              <p>The Bruin Review was founded to end this soft treatment of ideas. Thought should be forged, not coddled. The University has lost its edge as a tool for truth. Instead, it is a cog in the wheel of ideology. The Review aims to bring back those tools for the scrutiny of thought. To learn is to be curious, and to be curious is to question. The Review is here to question.</p>
              <p>Universities should be less similar to a cultivated garden of monolithic ideals and more like a battleground of beliefs. Buckle up, because we plan to pick fights where dissension is rarely fostered and disputation seldom tolerated. Contention is our middle name.</p>
              <p>The Bruin Review will always push to be on the edge of truth, at times nearly falling off. Our goal is to present diverse arguments on all applicable topics, transcendent of partisan semantics. First and foremost, we are a society of those who enjoy civil discourse and push-ing the limits of their intellect. Second, we are a medium for any responsible message. Our publication does not exist to bolster rumors, gossip, or pontificate over national politics. We hope to bring forward dialogue on issues which affect students’ lives and challenge the sta-tus quo of ideas. Not through simple debate, but by productive and sympathetic discussion of things sparsely mentioned.</p>
            </div>
            </Fade>
        )
    }
}
