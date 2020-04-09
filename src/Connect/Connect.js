import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './Connect.css';
import About from './Components/About';
import Contact from './Components/Contact';
import GetInvolved from './Components/GetInvolved';
import Support from './Components/Support';
import Zoom from 'react-reveal/Zoom';
import p1 from '../resources/br-about.png';


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
              <div className="main flex justify-center">
                <div className="left-col">
                  <About />
                  {/*<Support />*/}

                </div>
                <div className="right-col">
                  <Contact />
                  <GetInvolved />
                </div>
              </div>
              <Footer />
          </div>
        )
    }

}
