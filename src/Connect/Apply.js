import React, { Component } from 'react'
import { Fade } from 'react-reveal'
import MobileNav from '../Components/MobileNav'
import Footer from '../Footer'
import Header from '../Header'
import './Connect.css'
import p1 from '../resources/fall.png'
import About from './Components/About'

export default class Apply extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: window.innerWidth < 480,
      amount: '',
      hovered: false,
      pptHovered: false,
    }
  }
  resize = e => {
    this.setState({
      isMobile: e.target.innerWidth < 480,
    })
  }
  componentDidMount() {
    window.addEventListener('resize', this.resize)
  }
  render() {
    if (this.state.isMobile) {
      return (
        <div className="flex justify-center home">
          <MobileNav showBar={false} />
          <div className="mobileAbout">
            <h3 className="mobileAboutTitle">Welcome to the Bruin Review</h3>
            <hr />
            We're a society of independent thinkers who care about bringing discourse back to UCLA and we want you to
            join us. Fall applications are now open! Here are the important dates:
            <li>
              Info Session: October 7 @ 7 pm on Janns w/ masks (
              <a href="https://ucla.zoom.us/j/95596344714">Zoom Info Session </a>@ 8:30 pm)
            </li>
            <li>Applications Due: October 11 @ 11:59 pm</li>
            You can check out our complete works under the "Print" tab and read our articles on the home page. These
            only scrape the surface of what we do here, but they're a great example of how our six departments work
            together to promote diversity of thought. Click the pdf to learn more!
            <div className="pv4" />
            <h3 className="mobileAboutTitle">Apply to the Bruin Review</h3>
            <hr />
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => {
                console.log(this.state.pptHovered)
                this.setState({ pptHovered: true })
              }}
              onMouseLeave={() => {
                console.log(this.state.pptHovered)
                this.setState({ pptHovered: false })
              }}
            >
              <a
                target="_blank"
                href=" https://elasticbeanstalk-us-west-1-133954069817.s3.us-west-1.amazonaws.com/Fall%202020%20BR%20Recruitment%20.pdf"
              >
                <div
                  style={{
                    width: '100%',
                    height: '200px',
                    backgroundSize: 'cover',
                    backgroundImage: `url(${p1})`,
                  }}
                />
              </a>
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
              href="https://docs.google.com/forms/d/e/1FAIpQLSc-motHQzqb0aMmQM0Vh5QmXwGK47kF_AIRU0D_SNaAmnzv4Q/viewform?usp=sf_link"
            >
              <div
                onMouseEnter={() => {
                  this.setState({ hovered: true })
                }}
                onMouseLeave={() => {
                  this.setState({ hovered: false })
                }}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '10px',
                  alignItems: 'center',
                  borderRadius: '7px',
                  width: '100%',
                  height: '40px',
                  backgroundColor: this.state.hovered ? '#61dafb' : '#b3e7fa',
                  textDecoration: 'none',
                  color: 'black',
                  fontFamily: 'freight-sans',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                }}
              >
                Apply Now
              </div>
            </a>
            <div className="pv4" />
            <h3 className="mobileAboutTitle">About the Bruin Review</h3>
            <hr />
            <p>
              The University was once a place of eclectic thought – the gathering of bright minds to encourage the
              exchange, deliberation, and inspection of ideas. Today, the inverse is true. Universities are proxy for a
              narrow viewpoint that is easily predictable and left unquestioned. Ideas are no longer submitted as
              subjects of observation and scrutiny; rather, they are endowed to students as delicacies to be defended at
              any cost.
            </p>
            <p>
              The Bruin Review was founded to end this soft treatment of ideas. Thought should be forged, not coddled.
              The University has lost its edge as a tool for truth. Instead, it is a cog in the wheel of ideology. The
              Review aims to bring back those tools for the scrutiny of thought. To learn is to be curious, and to be
              curious is to question. The Review is here to question.
            </p>
            <p>
              Universities should be less similar to a cultivated garden of monolithic ideals and more like a
              battleground of beliefs. Buckle up, because we plan to pick fights where dissension is rarely fostered and
              disputation seldom tolerated. Contention is our middle name.
            </p>
            <p>
              The Bruin Review will always push to be on the edge of truth, at times nearly falling off. Our goal is to
              present diverse arguments on all applicable topics, transcendent of partisan semantics. First and
              foremost, we are a society of those who enjoy civil discourse and pushing the limits of their intellect.
              Second, we are a medium for any responsible message. Our publication does not exist to bolster rumors,
              gossip, or pontificate over national politics. We hope to bring forward dialogue on issues which affect
              students’ lives and challenge the status quo of ideas. Not through simple debate, but by productive and
              sympathetic discussion of things sparsely mentioned.
            </p>
          </div>
        </div>
      )
    } else {
      return (
        <div className="flex justify-center home">
          <Header />
          <div className="main flex justify-center">
            <div className="left-col">
              <Fade>
                <div className="card">
                  <h3 className="title">Apply to the Bruin Review</h3>
                  <hr />
                  <div
                    style={{ position: 'relative' }}
                    onMouseEnter={() => {
                      this.setState({ pptHovered: true })
                    }}
                    onMouseLeave={() => {
                      this.setState({ pptHovered: false })
                    }}
                  >
                    <a
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                      href=" https://elasticbeanstalk-us-west-1-133954069817.s3.us-west-1.amazonaws.com/Fall%202020%20BR%20Recruitment%20.pdf"
                    >
                      <div
                        style={{
                          width: '100%',
                          paddingTop: '50%',
                          backgroundSize: 'cover',
                          backgroundImage: `url(${p1})`,
                        }}
                      />
                      {this.state.pptHovered && (
                        <div
                          className="flex justify-center items-center"
                          style={{
                            cursor: 'pointer',
                            color: 'white',
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(18,18,18,0.8)',
                            fontSize: '25px',
                            position: 'absolute',
                            top: '0px',
                          }}
                        >
                          Click to See More
                        </div>
                      )}
                    </a>
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                    href="https://forms.gle/zZmMxBccKw4LNR6Z6"
                  >
                    <div
                      onMouseEnter={() => {
                        this.setState({ hovered: true })
                      }}
                      onMouseLeave={() => {
                        this.setState({ hovered: false })
                      }}
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '10px',
                        alignItems: 'center',
                        borderRadius: '7px',
                        width: '120px',
                        height: '40px',
                        backgroundColor: this.state.hovered ? '#61dafb' : '#b3e7fa',
                        textDecoration: 'none',
                        color: 'black',
                        fontFamily: 'freight-sans',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                      }}
                    >
                      Apply Now
                    </div>
                  </a>
                </div>
              </Fade>
            </div>
            <div className="right-col">
              <div className="card">
                <h3 className="title">Welcome to the Bruin Review</h3>
                <hr />
                We're a society of independent thinkers who care about bringing discourse back to UCLA and we want you
                to join us. Fall applications are now open! Here are the important dates:
                <li>
                  <a href="https://ucla.zoom.us/j/91084876508">Zoom Info Session </a> Monday January 11th @ 8:30 pm
                </li>
                <li>Applications Due: Wednesday January 13th @ 11:59 pm</li>
                You can check out our complete works under the "Print" tab and read our articles on the home page. These
                only scrape the surface of what we do here, but they're a great example of how our six departments work
                together to promote diversity of thought. Click the pdf to learn more!
              </div>
              <About />
            </div>
          </div>
          <Footer />
        </div>
      )
    }
  }
}
