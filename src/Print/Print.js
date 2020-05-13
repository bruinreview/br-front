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
                      <a target="_blank" href="https://elasticbeanstalk-us-west-1-133954069817.s3-us-west-1.amazonaws.com/BRInauguralEdition.pdf" className="posterCardMobile">
                          <img  src={p1} className="poster"/>
                          <div className="posterTitle"> The Review Inaugural Winter 2019</div>
                      </a>
                      <a target="_blank" href="https://elasticbeanstalk-us-west-1-133954069817.s3-us-west-1.amazonaws.com/The+Review+II+Spring+2020.pdf" className="posterCardMobile">
                          <img src={p4} className="poster"/>
                          <div className="posterTitle"> The Review II Spring 2019</div>
                      </a>
                      <a target="_blank" href="https://elasticbeanstalk-us-west-1-133954069817.s3-us-west-1.amazonaws.com/News+in+Review+Fall+2019+v2.pdf" className="posterCardMobile">
                          <img src={p2} className="poster"/>
                          <div className="posterTitle"> News in Review Fall 2019</div>
                      </a>
                      <a target="_blank" href="https://elasticbeanstalk-us-west-1-133954069817.s3-us-west-1.amazonaws.com/The+Review+III+Winter+2020.pdf" className="posterCardMobile">
                          <img src={p3} className="poster"/>
                          <div className="posterTitle"> The Review III Winter 2020</div>
                      </a>
                  </div>

          </div>

        );
        else
        return(
          <div className="flex justify-center home">
              <Header />
                  <div className="main flex items-start flex-row">
                    <Zoom>
                      <a target="_blank" href="https://elasticbeanstalk-us-west-1-133954069817.s3-us-west-1.amazonaws.com/BRInauguralEdition.pdf" className="posterCard">
                          <div  style={{backgroundImage:`url(${p1})`}} className="poster"/>
                          <div className="posterTitle"> The Review Inaugural Winter 2019</div>
                      </a>
                    </Zoom>
                    <Zoom>
                      <a target="_blank" href="https://elasticbeanstalk-us-west-1-133954069817.s3-us-west-1.amazonaws.com/The+Review+II+Spring+2020.pdf" className="posterCard">
                          <div  style={{backgroundImage:`url(${p4})`}} className="poster"/>
                          <div className="posterTitle"> The Review II Spring 2019</div>
                      </a>
                    </Zoom>
                    <Zoom>
                      <a target="_blank" href="https://elasticbeanstalk-us-west-1-133954069817.s3-us-west-1.amazonaws.com/News+in+Review+Fall+2019+v2.pdf" className="posterCard">
                          <div  style={{backgroundImage:`url(${p2})`}} className="poster"/>
                          <div className="posterTitle"> News in Review Fall 2019</div>
                      </a>
                    </Zoom>
                    <Zoom>
                      <a target="_blank" href="https://elasticbeanstalk-us-west-1-133954069817.s3-us-west-1.amazonaws.com/The+Review+III+Winter+2020.pdf" className="posterCard">
                          <div  style={{backgroundImage:`url(${p3})`}} className="poster"/>
                          <div className="posterTitle"> The Review III Winter 2020</div>
                      </a>
                    </Zoom>
                  </div>
              <Footer />

          </div>
        )
    }

}
