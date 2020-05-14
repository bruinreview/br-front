import React, { Component } from 'react';
import Header from '../Header';
import SearchBar from '../Components/SearchBar';
import Footer from '../Footer';
import Zoom from 'react-reveal';
import MobileNav from '../Components/MobileNav';
import PrintEdition from './PrintEdition';
import './Print.css'
import p1 from '../resources/print1.png';
import p2 from '../resources/print2.png';
import p3 from '../resources/print3.png';
import p4 from '../resources/print4.png';
import p5 from '../resources/print5.png';


const printLinks = [
    {
        img: p1,
        title:  'The Review Inaugural Winter 2019',
        link: 'https://elasticbeanstalk-us-west-1-133954069817.s3-us-west-1.amazonaws.com/BRInauguralEdition.pdf'
    },
    {
        img: p4,
        title:  'The Review II Spring 2019',
        link: 'https://elasticbeanstalk-us-west-1-133954069817.s3-us-west-1.amazonaws.com/The+Review+II+Spring+2020.pdf'
    },
    {
        img: p3,
        title:  'The Review III Winter 2020',
        link: 'https://elasticbeanstalk-us-west-1-133954069817.s3-us-west-1.amazonaws.com/The+Review+III+Winter+2020.pdf'
    },
    {
        img: p2,
        title:  'News in Review Fall 2019',
        link: 'https://elasticbeanstalk-us-west-1-133954069817.s3-us-west-1.amazonaws.com/News+in+Review+Fall+2019+v2.pdf'
    },
    {
        img: p5,
        title:  'News in Review II Winter 2020',
        link: 'https://elasticbeanstalk-us-west-1-133954069817.s3-us-west-1.amazonaws.com/News+in+Review+II+Winter+2020.pdf'
    },
]



export default class Print extends Component{
    constructor(props){
        super(props);
        this.state = {
            isMobile: window.innerWidth < 480,
        }
    }

    resize = (e) =>{
        this.setState({isMobile: window.innerWidth < 480});
    }
    componentDidMount(){
        window.addEventListener('resize', this.resize);
    }
    render(){
        if(this.state.isMobile)
        return(
          <div className="flex justify-center" style={{height:'100%'}}>
            <MobileNav/>
                  <div className="flex mt4 pt2 items-center flex-column" style={{height:'100%',width:'85%'}}>
                      {printLinks.map((obj)=>
                          <a target="_blank" href={obj.link} className="posterCardMobile">
                              <img  src={obj.img} className="poster"/>
                              <div className="posterTitle"> {obj.title}</div>
                          </a>
                      )}
                  </div>

          </div>

        );
        else
        return(
          <div className="flex justify-center home">
              <Header />
                  <div className="main flex items-start flex-wrap">
                    <Zoom>
                      {printLinks.map((obj)=>
                          <a target="_blank" href={obj.link} className="posterCard">
                              <img  src={obj.img} className="poster"/>
                              <div className="posterTitle"> {obj.title}</div>
                          </a>
                      )}
                    </Zoom>
                  </div>
              <Footer />

          </div>
        )
    }

}
