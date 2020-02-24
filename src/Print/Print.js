import React, { Component } from 'react';
import Header from '../Header';
import SearchBar from '../Components/SearchBar';
import Footer from '../Footer';
import PrintEdition from './PrintEdition';
import './Print.css'

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
              <PrintEdition />
              </div>
              <Footer />

          </div>
        )
    }

}
