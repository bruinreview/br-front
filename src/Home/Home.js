import React, { Component } from 'react';
import './Home.css';
import Header from '../Header';
import Footer from '../Footer';
import Card from '../Components/Card' ;

const data = [
    {
        title:    "Giant Tree Falls Down In Bruin Plaza",
        type:     "audio",
        category: "normal",
        date:     "31 July 2019",
        author:   "Alvin Duong",
    },
    {
        title:    "Admission Scandal Continues",
        type:     "video",
        category: "feature",
        date:     "31 July 2019",
        author:   "Joe Rainey",
    },
    {
        title:    "Bruin Review Ranked No.1 Club at UCLA",
        type:     "regular",
        category: "feature",
        date:     "31 July 2019",
        author:   "Sharon John",
    },

    {
        title:    "Daily Bruin Under Fire for Gross Misconduct",
        type:     "audio",
        category: "feature",
        date:     "31 July 2019",
        author:   "Sam Tang",
    },
    {
        title:    "Free Will. Is it an Illusion?",
        type:     "video",
        category: "normal",
        date:     "31 July 2019",
        author:   "Julia Tung",
    },
    {
        title:    "Quantum Computing Explained",
        type:     "regular",
        category: "normal",
        date:     "31 July 2019",
        author:   "Sam Tang",
    },
    {
        title:    "Professor Rosario Ranked Worst Professor at UCLA",
        type:     "audio",
        category: "normal",
        date:     "31 July 2019",
        author:   "Sharon John",
    },
    {
        title:    "Coffee vs Tea, the Century-Old Debate",
        type:     "video",
        category: "normal",
        date:     "31 July 2019",
        author:   "Joe Rainey",
    },
    {
        title:    "How To Handle Fame, Campus Organization Edition",
        type:     "regular",
        category: "normal",
        date:     "31 July 2019",
        author:   "Julia Tung",
    },
]



export default class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            posts:data,
            filter: '',
        }
        this.handleFilter = this.handleFilter.bind(this);
    }

    generateCards(category, posts){
        return posts.filter(post => post.category === category)
                    .map(post => <Card title={post.title} date = {post.date} category={post.category} type={`${post.type}Icon`} author = {post.author} />)
    }
    handleFilter(e){
        this.setState({
            filter: e.target.id,
        });
    }
    render(){
        const posts =this.state.filter != '' ?  this.state.posts.filter(post => post.type === this.state.filter)
                                             :  this.state.posts
        return(
            <div className="flex justify-center home">
                <Header />
                <div className="main flex justify-center">
                    <div className="feature">
                        {this.generateCards("feature", posts)}
                    </div>
                    <div className="normal flex flex-wrap">
                        {this.generateCards("normal", posts)}
                    </div>
                </div>
                <Footer handleFilter={this.handleFilter}/>
            </div>
        )
    }

}
