import React, { Component } from 'react';
import './Home.css';
import Header from '../Header';
import SearchBar from '../Components/SearchBar'
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
            searchVal: '',
            showSearch: false,
            searchFocus: false
        }
        this.clickSearch = this.clickSearch.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.searchChange = this.searchChange.bind(this);
    }

    handleSearchBar = (e) => {
        console.log(e);
        if(e.key === 'Escape'){
            this.setState({
                showSearch: false,
                searchVal: ''
            })

        }
        if("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".includes(e.key) &&
           !this.state.showSearch && this.state.searchVal === ''){
            this.setState({
                showSearch: true,
            })
        }

    }

    componentWillMount(){
        document.addEventListener('keydown', this.handleSearchBar);

    }

    filterCards(posts){
        return posts
                    .map(post => {
                if((this.state.filter === '' || post.type === this.state.filter) &&
                                    (post.title.toLowerCase().includes(this.state.searchVal.toLowerCase()) ||
                                    post.type.toLowerCase().includes(this.state.searchVal.toLowerCase()) ||
                                    post.date.toLowerCase().includes(this.state.searchVal.toLowerCase()) ||
                                    post.author.toLowerCase().includes(this.state.searchVal.toLowerCase()))){
                    return <Card transitionToFull={this.transitionToFull} title={post.title} date = {post.date} show = {true} category={post.category} type={`${post.type}Icon`} author = {post.author} />
                }
                else if(post.type !== this.state.filter){
                    return <Card transitionToFull={this.transitionToFull} title={post.title} date = {post.date} show = {false} category={post.category} type={`${post.type}Icon`} author = {post.author} />
                }
            })
    }

    generateCards(category, posts, normal=1){
        if(normal === 0){
            return this.filterCards(posts.filter(post => post.category === category));
        }
        else if(normal === 1){
            posts = posts.filter(post => post.category === category)
            var half_length = Math.ceil(posts.length / 2);
            posts = posts.splice(0,half_length);
            return this.filterCards(posts);
        }
        else{
            posts = posts.filter(post => post.category === category)
            var half_length = Math.ceil(posts.length / 2);
            posts = posts.splice(half_length, posts.length);
            return this.filterCards(posts);

        }
    }
    handleFilter(e){
        if(this.state.filter === e.target.id){
            this.setState({filter: ''});
        }
        else{
            this.setState({filter: e.target.id});
        }
    }
    searchChange(e){
        this.setState({searchVal: e.target.value})
        if(e.target.value===''){
            this.setState({
                showSearch:false
            })
        }
    }

    transitionToFull = (e)=>{
        this.setState({searchVal:'$'})
        setTimeout(()=>{this.props.history.push('/article')}, 500);
    }

    clickSearch(e){
        this.setState({showSearch: !this.state.showSearch});
    }
    render(){
        return(
            <div className="flex justify-center home">
                <Header clickSearch={this.clickSearch}/>
                <div className="main">
                    <SearchBar inputRef={this.inputRef} searchFocus={this.state.searchFocus} searchChange={this.searchChange} showSearch = {this.state.showSearch} searchVal ={this.state.searchVal}/>
                    <div className="flex justify-center">
                        <div className="feature">
                            {this.generateCards("feature", this.state.posts)}
                        </div>
                        <div className="normal">
                            {this.generateCards("normal", this.state.posts, 1)}
                        </div>
                        <div className="normal">
                            {this.generateCards("normal", this.state.posts, 2)}
                        </div>
                    </div>
                </div>
                <Footer handleFilter={this.handleFilter}/>
            </div>
        )
    }

}
