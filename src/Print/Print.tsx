import React, { Component } from 'react'
import Zoom from 'react-reveal/Zoom'
import MobileNav from '../Components/MobileNav'
import Footer from '../Footer'
import Header from '../Header'
import p1 from '../resources/print1.png'
import p2 from '../resources/print2.png'
import p3 from '../resources/print3.png'
import p4 from '../resources/print4.png'
import p5 from '../resources/print5.png'
import p6 from '../resources/print6.png'
import p7 from '../resources/print7.png'
import './Print.css'

const printLinks = [
  {
    img: p1,
    title: 'The Review Inaugural Winter 2019',
    link: 'https://elasticbeanstalk-us-west-1-133954069817.s3-us-west-1.amazonaws.com/BRInauguralEdition.pdf',
  },
  {
    img: p4,
    title: 'The Review II Spring 2019',
    link: 'https://elasticbeanstalk-us-west-1-133954069817.s3-us-west-1.amazonaws.com/The+Review+II+Spring+2020.pdf',
  },
  {
    img: p3,
    title: 'The Review III Winter 2020',
    link: 'https://elasticbeanstalk-us-west-1-133954069817.s3-us-west-1.amazonaws.com/The+Review+III+Winter+2020.pdf',
  },
  {
    img: p2,
    title: 'News in Review Fall 2019',
    link: 'https://elasticbeanstalk-us-west-1-133954069817.s3-us-west-1.amazonaws.com/News+in+Review+Fall+2019+v2.pdf',
  },
  {
    img: p5,
    title: 'News in Review II Winter 2020',
    link:
      'https://elasticbeanstalk-us-west-1-133954069817.s3-us-west-1.amazonaws.com/News+in+Review+II+Winter+2020.pdf',
  },
  {
    img: p6,
    title: 'The Review IV Spring 2020',
    link: 'https://elasticbeanstalk-us-west-1-133954069817.s3-us-west-1.amazonaws.com/The+Review+IV+Spring+2020.pdf',
  },
  {
    img: p7,
    title: 'News in Review III Spring 2020',
    link:
      'https://elasticbeanstalk-us-west-1-133954069817.s3-us-west-1.amazonaws.com/News+in+Review+III+Spring+2020.pdf',
  },
]

interface IState {
  isMobile: boolean
}
interface IProp {}
export default class Print extends Component<IProp, IState> {
  constructor(props: IProp) {
    super(props)
    this.state = {
      isMobile: window.innerWidth < 480,
    }
  }

  resize = (): void => {
    this.setState({
      isMobile: window.outerWidth < 480,
    })
  }
  componentDidMount(): void {
    window.addEventListener('resize', this.resize)
  }
  render(): React.ReactElement {
    if (this.state.isMobile) {
      return (
        <div className="flex items-center flex-column home">
          <MobileNav />
          <div className="main">
            <div className="flex-col" style={{ height: '100%' }}>
              {printLinks.map((obj, ind) => (
                <div key={ind} className="posterCardMobile mv3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: 'white' }}
                    href={obj.link}
                  >
                    <img src={obj.img} className="poster" />
                    <div className="posterTitle"> {obj.title}</div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="flex justify-center home">
          {/* eslint-disable-next-line react/jsx-no-bind */}
          <Header
            clickSearch={(e: { target: HTMLDivElement }) => {
              this.setState({ isMobile: e ? this.state.isMobile : this.state.isMobile })
            }}
          />
          <div className="main flex items-start flex-wrap">
            <Zoom>
              {printLinks.map((obj, ind) => (
                <a key={ind} rel="noopener noreferrer" target="_blank" href={obj.link} className="posterCard">
                  <img src={obj.img} className="poster" />
                  <div className="posterTitle"> {obj.title}</div>
                </a>
              ))}
            </Zoom>
          </div>
          <Footer
            handleFilter={(e: { target: HTMLDivElement }) => {
              this.setState({ isMobile: e ? this.state.isMobile : this.state.isMobile })
            }}
          />
        </div>
      )
    }
  }
}
