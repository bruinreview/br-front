import GhostContentAPI from '@tryghost/content-api'
import React, { Component } from 'react'
import { Zoom, Fade } from 'react-reveal'
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'react-share'
import MobileNav from '../Components/MobileNav'
import Footer from '../Footer'
import Header from '../Header'
import AudioPage from './AudioPage'
import './Article.css'

const key = '876bb28735b6e13c96024fd082'
const host = 'https://bruinreview.herokuapp.com'
const url = 'https://master.d3444to1ugvoot.amplifyapp.com'
const api = new GhostContentAPI({
  url: host,
  key,
  version: 'v3',
})
const defa = {
  id: '',
  title: "Sorry, this post doesn't exist. :(",
  type: '',
  tags: [],
  category: '',
  date: '',
  author: '',
  html: '',
  text: '',
  image: '',
}

class Post {
  constructor(obj) {
    this.id = obj.id
    this.title = obj.title
    this.type = obj.type
    this.category = obj.category
    this.date = obj.date
    this.author = obj.author
    this.html = obj.html
    this.tags = obj.tags
    this.text = obj.text
    this.image = obj.image
  }
}
const date = d => new Date(d.split('T')[0]).toDateString().substring(4)
export default class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: window.innerWidth < 480,
      post: new Post(defa),
    }
  }
  resize = () => {
    this.setState({ isMobile: window.innerWidth < 480 })
  }
  componentDidMount() {
    window.addEventListener('resize', this.resize)
    api.posts
      .read({ slug: this.props.match.params.articleID, include: 'tags,authors' }, { formats: ['html', 'plaintext'] })
      .then(p => {
        console.log(p)
        this.setState({
          post: new Post({
            id: p.id,
            title: p.title,
            type: 'regular',
            category: p.featured ? 'feature' : 'normal',
            date: date(p.published_at),
            author: p.authors[0].name,
            tags: p.tags.map(u => u.name),
            html: p.html,
            text: p.plaintext,
            image: p.feature_image,
          }),
        })
      })
      .catch(err => {
        console.error(err)
      })
  }
  render() {
    const delay1 = Math.floor(Math.random() * 5)
    const delay2 = Math.floor(Math.random() * 5)
    const delay3 = Math.floor(Math.random() * 5)
    let image = null
    if (this.state.post.image) {
      image = (
        <img
          alt=""
          className={this.state.isMobile ? 'articleMobileImage' : 'articleImage'}
          src={this.state.post.image}
        />
      )
    }
    if (this.state.isMobile) {
      return (
        <div className="flex-column justify-center">
          <MobileNav showBar={false} />
          <div className="mobileArticle">
            <div className="articleMobileImage" style={{ backgroundImage: `url(${this.state.post.image})` }} />
            <div className="pa4">
              <h3 id="article-title">{this.state.post.title}</h3>
              <Fade>
                <div className="articleContent" dangerouslySetInnerHTML={{ __html: this.state.post.html }} />
                <div className="articleContent pb3">Written By: {this.state.post.author}</div>
                <div className="articleContent">{this.state.post.date}</div>
              </Fade>
              <hr className="mt4" />
              <div style={{ width: '100%' }} className="pv3 flex flex-row justify-between">
                <FacebookShareButton url={`${url}/article/${this.props.match.params.articleID}`}>
                  <FacebookIcon size={40} round={true} />
                </FacebookShareButton>
                <TwitterShareButton url={`${url}/article/${this.props.match.params.articleID}`}>
                  <TwitterIcon size={40} round={true} />
                </TwitterShareButton>
                <LinkedinShareButton url={`${url}/article/${this.props.match.params.articleID}`}>
                  <LinkedinIcon size={40} round={true} />
                </LinkedinShareButton>
                <EmailShareButton url={`${url}/article/${this.props.match.params.articleID}`}>
                  <EmailIcon size={40} round={true} />
                </EmailShareButton>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="flex justify-center">
          <Header />
          <div className="main flex justify-center">
            <div style={{ width: '72%' }}>
              <Zoom delay={delay1 * 50}>
                {/*<AudioPage />*/}
                <div className="primary card">
                  <h3 id="article-title">{this.state.post.title}</h3>
                  {image}
                  <div dangerouslySetInnerHTML={{ __html: this.state.post.html }} />
                </div>
              </Zoom>
            </div>
            <div className="normal">
              <Zoom delay={delay2 * 50}>
                <div className="card" id="facts-card">
                  <h4>Quick Facts</h4>
                  <hr />
                  <p id="date">{this.state.post.date}</p>
                  <div id="info">
                    <p id="author">By {this.state.post.author}</p>
                  </div>
                  <h5>Topics</h5>
                  {this.state.post.tags.map((t, i) => (
                    <button className="button-article" key={i}>
                      {t}
                    </button>
                  ))}
                </div>
              </Zoom>
              <Zoom delay={delay3 * 50}>
                <div className="card">
                  <h4>Share</h4>
                  <div style={{ width: '100%' }} className="pv3 flex flex-row justify-between">
                    <FacebookShareButton url={`${url}/article/${this.props.match.params.articleID}`}>
                      <FacebookIcon size={40} round={true} />
                    </FacebookShareButton>
                    <TwitterShareButton url={`${url}/article/${this.props.match.params.articleID}`}>
                      <TwitterIcon size={40} round={true} />
                    </TwitterShareButton>
                    <LinkedinShareButton url={`${url}/article/${this.props.match.params.articleID}`}>
                      <LinkedinIcon size={40} round={true} />
                    </LinkedinShareButton>
                    <EmailShareButton url={`${url}/article/${this.props.match.params.articleID}`}>
                      <EmailIcon size={40} round={true} />
                    </EmailShareButton>
                  </div>
                </div>
              </Zoom>
            </div>
          </div>
          <Footer />
        </div>
      )
    }
  }
}
