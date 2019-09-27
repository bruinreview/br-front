import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';



export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return(
            <div className="flex justify-start container">
                <div className="flex vertical-text">
                    <div className="line-bottom"></div>
                        <Link className="no-underline ph3 nav" to="/connect">connect</Link>
                        <Link className="no-underline ph3 nav" to="/shop">shop</Link>
                        <Link className="no-underline ph3 nav" to="/print">print</Link>
                        <Link className="no-underline ph3 nav" to="/">home</Link>
                    <div className="line-top"></div>
                </div>

            </div>

        )
    }

}
