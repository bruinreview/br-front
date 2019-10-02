import React, { Component } from 'react';
import Header from '../Header';
import SearchBar from '../Components/SearchBar';


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
              <SearchBar/>
              <div className="main flex justify-center">

              </div>
          </div>
        )
    }

}
