import React, { Component } from 'react';
import Header from '../Header';
import SearchBar from '../Components/SearchBar';
import Footer from '../Footer';
import Zoom from 'react-reveal';
import PrintEdition from './PrintEdition';
import './Print.css'
import p1 from '../resources/print1.png';
import p2 from '../resources/print2.png';
import p3 from '../resources/print3.png';

export default class Print extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return(
          <div className="flex justify-center home">
              <Header />
                  <div className="main flex items-start flex-row">
                    <Zoom>
                      <a target="_blank" href="https://elasticbeanstalk-us-west-1-133954069817.s3-us-west-1.amazonaws.com/BRInauguralEdition.pdf" className="posterCard">
                          <div  style={{backgroundImage:`url(${p1})`}} className="poster"/>
                          <div className="posterTitle"> Bruin Review Inaugural Edition</div>
                      </a>
                    </Zoom>
                    <Zoom>
                      <a target="_blank" href="https://elasticbeanstalk-us-west-1-133954069817.s3-us-west-1.amazonaws.com/News+in+Review+Fall+2019+v2.pdf" className="posterCard">
                          <div  style={{backgroundImage:`url(${p2})`}} className="poster"/>
                          <div className="posterTitle"> News in Review Fall 2019</div>
                      </a>
                    </Zoom>
                    <Zoom>
                      <a target="_blank" href="https://elasticbeanstalk-us-west-1-133954069817.s3-us-west-1.amazonaws.com/Flagship+III+(Winter+2020)+(2_7).pdf" className="posterCard">
                          <div  style={{backgroundImage:`url(${p3})`}} className="poster"/>
                          <div className="posterTitle"> Flagship III Winter 2020</div>
                      </a>
                    </Zoom>
                  </div>
              <Footer />

          </div>
        )
    }

}
