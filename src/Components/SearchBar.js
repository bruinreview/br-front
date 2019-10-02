import React, {Component} from 'react';
import Zoom from 'react-reveal';


export default class SearchBar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Zoom>
                <input type="text" value = {this.props.searchVal} onChange={this.props.searchChange} placeholder="Search"/>
            </Zoom>


        )
    }
}
