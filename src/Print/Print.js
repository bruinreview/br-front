import React, { Component } from 'react';
import Header from '../Header';
import SearchBar from '../Components/SearchBar';
import Footer from '../Footer';
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
                      <a href="https://google.com" className="posterCard">
                          <div  style={{backgroundImage:`url(${p1})`}} className="poster"/>
                          <div className="posterTitle"> Bruin Review Inaugural Edition</div>
                      </a>
                      <div className="posterCard">
                          <div  style={{backgroundImage:`url(${p2})`}} className="poster"/>
                          <div className="posterTitle"> News in Review Fall 2019</div>
                      </div>
                      <div className="posterCard">
                          <div  style={{backgroundImage:`url(${p3})`}} className="poster"/>
                          <div className="posterTitle"> Flagship III Winter 2020</div>
                      </div>
                  </div>
              <Footer />

          </div>
        )
    }

}
