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
                        <Card title='Sample Title 1' date="31 July 2019" author="Sample Author"/>
                        <Card title='Sample Title 2' date="26 July 2019" author="Sample Author"/>
                    </div>
                    <div className="normal">
                        <Card title='Sample Title 3' date="1 August 2019" author="Sample Author"/>

                    </div>
                    <div className="normal">
                        <Card title='Sample Title 4' date = "29 July 2019" author="Sample Author"/>

                    </div>
                </div>
            </div>
        )
    }

}
