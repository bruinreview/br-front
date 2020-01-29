import React, {Component} from 'react';
import {Zoom, Fade} from 'react-reveal';
import './SearchBar.css';


export default class SearchBar extends Component{
    constructor(props){
        super(props);
    }

    componentDidUpdate() {
      this.inputRef.focus();
    }
    render(){
        return(
            <Fade top collapse duration={300} when={this.props.showSearch}>
                <input ref={(input) => {this.inputRef=input}} className="searchInput" type="text" value = {this.props.searchVal} onChange={this.props.searchChange} placeholder="Search"/>
            </Fade>



        )
    }
}
