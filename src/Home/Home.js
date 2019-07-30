import React, { Component } from 'react';
import './Home.css';
import Header from '../Header';
import Card from '../Components/Card' ;


export default class Home extends Component{
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
                    <div className="feature">
                        <Card/>
                        <Card/>
                    </div>
                    <div className="normal">
                        <Card/>

                    </div>
                    <div className="normal">
                        <Card/>

                    </div>
                </div>
            </div>
        )
    }

}
