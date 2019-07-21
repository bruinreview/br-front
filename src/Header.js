import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return(
            <div className="mh4 flex">
                <Link className="no-underline pa3 white" to="/">Home</Link>
                <Link className="no-underline pa3 white" to="/connect">Connect</Link>
                <Link className="no-underline pa3 white" to="/Shop">Shop</Link>
            </div>

        )
    }

}
