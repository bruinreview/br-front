import React, {Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {Zoom} from 'react-reveal';
import GhostContentAPI from '@tryghost/content-api'
import {key, host} from '../constants.js';
import './Article.css'

const api = new GhostContentAPI({
  url: host,
  key: key,
  version: "v3"
});
const defa={
    id :"",
    title :"Sorry, this post doesn't exist. :(",
    type :"",
    category :"",
    date :"",
    author :"",
    html :"",
    text :"",
    image : "",
}

class Post{
    constructor(obj){
        this.id = obj.id;
        this.title = obj.title;
        this.type = obj.type;
        this.category = obj.category;
        this.date = obj.date;
        this.author = obj.author;
        this.html = obj.html;
        this.text = obj.text;
        this.image = obj.image;
    }

}
export default class Article extends Component{
  constructor(props){
      super(props);
      this.state = {
          post: new Post(defa),
      }
  }
  componentDidMount(){
        api.posts.read({id:this.props.match.params.articleID, include: 'tags,authors'},{formats: ['html', 'plaintext']})
            .then((p) => {
                console.log(p);
                this.setState({post:
                    new Post({id: p.id,
                              title: p.title,
                              type: "regular",
                              category: p.featured ? "feature" : "normal",
                              date: "January 27th 2020",
                              author: p.authors[0].name,
                              html: p.html,
                              text: p.plaintext,
                              image: p.feature_image})
                    });
            })
            .catch((err) => {
                console.error(err);
            });

  }
  render(){
      let {location, match} = this.props;
      console.log(this.state.post);
      let delay1 = Math.floor(Math.random() * 5);
      let delay2 = Math.floor(Math.random() * 5);
      let delay3 = Math.floor(Math.random() * 5);
      // console.log(location);
      let image = null;
      if(this.state.post.image)
        image = <img alt="" style={{'border-radius':'10px', 'padding-bottom':'32px'}} src={this.state.post.image}/>
      return(
        <div className="flex justify-center">
          <Header />
            <div className="main flex justify-center">
            <Zoom delay={delay1*50}>
              <div className="primary card">
                  <h3 id="article-title">{this.state.post.title}</h3>
                    {image}
                  <p>
                  {this.state.post.text}
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
