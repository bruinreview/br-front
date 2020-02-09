import React, {Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {Zoom} from 'react-reveal';
import './Article.css'

export default class Article extends Component{
  constructor(props){
      super(props);
      this.state = {
      }
  }
  render(){
      let delay1 = Math.floor(Math.random() * 5);
      let delay2 = Math.floor(Math.random() * 5);
      let delay3 = Math.floor(Math.random() * 5);
      console.log(this.props.location.state.post);
      // console.log(this.props.location);
      let image = null;
      if(this.props.location.state.post.image)
        image = <img alt="" style={{'border-radius':'10px', 'padding-bottom':'32px'}} src={this.props.location.state.post.image}/>
      return(
        <div className="flex justify-center">
          <Header />
            <div className="main flex justify-center">
            <Zoom delay={delay1*50}>
              <div className="primary card">
                  <h3 id="article-title">{this.props.location.state.post.title}</h3>
                  {image}
                  <p>
                  {this.props.location.state.post.text}
                  </p>
              </div>
          </Zoom>
              <div className="normal">
            <Zoom delay={delay2*50}>
                <div className="card" id="facts-card">
                  <h4>Quick Facts</h4>
                  <hr />
                  <p id="date">5 January 2020</p>
                  <div id="info">
                  <p id="author">BY GODIS BLASPHEMY</p>
                  <p>Class of 2020</p>
                  <p id="byline">I once thought of a funny byline but can't remember</p>
                  </div>
                  <h5>Topics</h5>
                  <button className="button-article">politics</button>
                  <button className="button-article">smarticle</button>
                  <button className="button-article">springtime</button>
                  <button className="button-article">particles</button>
                  <button className="button-article">head-to-head</button>
                  <button className="button-article">satire</button>
                </div>
          </Zoom>
            <Zoom delay={delay3*50}>
                <div className="card">
                  <h4>Share</h4>
                </div>
            </Zoom>
              </div>
            </div>
          <Footer />
        </div>
      )
  }

}
