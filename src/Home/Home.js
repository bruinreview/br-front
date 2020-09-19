import React, { Component } from "react";
import "./Home.css";
import Header from "../Header";
import { Link } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import Footer from "../Footer";
import Card from "../Components/Card";
import MobileNav from "../Components/MobileNav";
import GhostContentAPI from "@tryghost/content-api";
import { key, host } from "../constants.js";
import Slide from "react-reveal/Slide";
import HamburgerMenu from "react-hamburger-menu";

class Post {
  constructor(obj) {
    this.id = obj.id;
    this.title = obj.title;
    this.type = obj.type;
    this.category = obj.category;
    this.date = obj.date;
    this.author = obj.author;
    this.html = obj.html;
    this.slug = obj.slug;
    this.text = obj.text;
    this.tags = obj.tags;
    this.image = obj.image;
  }
}

const date = (d) => new Date(d.split("T")[0]).toDateString().substring(4);

const api = new GhostContentAPI({
  url: host,
  key: "876bb28735b6e13c96024fd082",
  version: "v3",
});

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      currentPosts: [],
      filter: "",
      searchVal: "",
      menuOpen: false,
      isMobile: window.innerWidth < 480,
      isTab: window.innerWidth >= 480 && window.innerWidth <= 1024,
      showSearch: false,
      searchFocus: false,
    };
    this.clickSearch = this.clickSearch.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.searchChange = this.searchChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize);
    api.posts
      .browse({
        limit: "all",
        include: "tags,authors",
        formats: ["plaintext", "html"],
      })
      .then((postData) => {
        postData.forEach((p) => {
          this.setState({
            posts: [
              ...this.state.posts,
              new Post({
                id: p.id,
                title: p.title,
                type: "regular",
                category: p.featured ? "feature" : "normal",
                date: date(p.published_at),
                author: p.authors[0].name,
                slug: p.slug,
                html: p.html,
                tags: p.tags.map((u) => u.name),
                text: p.plaintext,
                image: p.feature_image,
              }),
            ],
          });
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleSearchBar = (e) => {
    if (e.key === "Escape") {
      this.setState({
        showSearch: false,
        searchVal: "",
      });
    }
    if (
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".includes(
        e.key
      ) &&
      !this.state.showSearch &&
      this.state.searchVal === ""
    ) {
      this.setState({
        showSearch: true,
      });
    }
  };

  resize = (e) => {
    // console.log(e.target.outerWidth);
    this.setState({
      isMobile: e.target.outerWidth < 480,
      isTab: window.innerWidth >= 480 && window.innerWidth <= 1024,
    });
  };

  componentWillMount() {
    document.addEventListener("keydown", this.handleSearchBar);
  }

  filterCards(posts) {
    let p = posts.map((post) => {
      return (
        <React.Fragment key={post.id}>
          {" "}
          <Card
            tags={post.tags}
            key={post.id}
            imgURL={post.image}
            id={post.id}
            key={post.id}
            slug={post.slug}
            transitionToFull={this.transitionToFull}
            title={post.title}
            date={post.date}
            show={true}
            category={post.category}
            type={`${post.type}Icon`}
            author={post.author}
          />{" "}
        </React.Fragment>
      );
    });
    return p;
  }

  generateCards(category, posts, normal = 1) {
    if (normal === 0) {
      return this.filterCards(
        posts.filter((post) => post.category === category)
      );
    } else if (normal === 1) {
      posts = posts.filter((post) => post.category === category);
      var half_length = Math.ceil(posts.length / 2);
      posts = posts.splice(0, half_length);
      return this.filterCards(posts);
    } else {
      posts = posts.filter((post) => post.category === category);
      var half_length = Math.ceil(posts.length / 2);
      posts = posts.splice(half_length, posts.length);
      return this.filterCards(posts);
    }
  }
  generateMobileCards(posts) {
    return this.filterCards(posts);
  }

  handleFilter(e) {
    if (this.state.filter === e.target.id) {
      this.setState({ filter: "" });
    } else {
      this.setState({ filter: e.target.id });
    }
    const posts = this.state.posts.filter(
      (post) =>
        (this.state.filter === "" || post.type === this.state.filter) &&
        (post.title
          .toLowerCase()
          .includes(this.state.searchVal.toLowerCase()) ||
          post.type
            .toLowerCase()
            .includes(this.state.searchVal.toLowerCase()) ||
          post.date
            .toLowerCase()
            .includes(this.state.searchVal.toLowerCase()) ||
          post.author
            .toLowerCase()
            .includes(this.state.searchVal.toLowerCase()))
    );
    this.setState({ currentPosts: posts });
  }
  searchChange(e) {
    this.setState({ searchVal: e.target.value });
    if (e.target.value === "") {
      this.setState({
        showSearch: false,
      });
    }
    const posts = this.state.posts.filter(
      (post) =>
        (this.state.filter === "" || post.type === this.state.filter) &&
        (post.title
          .toLowerCase()
          .includes(this.state.searchVal.toLowerCase()) ||
          post.type
            .toLowerCase()
            .includes(this.state.searchVal.toLowerCase()) ||
          post.date
            .toLowerCase()
            .includes(this.state.searchVal.toLowerCase()) ||
          post.author
            .toLowerCase()
            .includes(this.state.searchVal.toLowerCase()))
    );
    this.setState({ currentPosts: posts });
  }

  transitionToFull = (e) => {
    setTimeout(() => {
      this.props.history.push({ pathname: `/article/${e}` });
    }, 500);
  };

  clickSearch(e) {
    this.setState({ showSearch: !this.state.showSearch });
  }
  render() {
    if (
      this.state.posts !== this.state.currentPosts &&
      !this.state.filter &&
      !this.state.searchVal
    ) {
      this.setState({ currentPosts: this.state.posts });
    }

    if (this.state.isMobile)
      return (
        <div className="flex flex-column items-center  home">
          <MobileNav
            showBar={true}
            inputRef={this.inputRef}
            searchFocus={this.state.searchFocus}
            searchChange={this.searchChange}
            searchVal={this.state.searchVal}
          />
          <div className="pt4 pb3" />
          <div className="main">
            <div className="flex-col" style={{ height: "100%" }}>
              {this.generateMobileCards(this.state.posts)}
            </div>
          </div>
        </div>
      );
    else if (!this.state.isTab)
      return (
        <div className="flex justify-center home">
          <Header clickSearch={this.clickSearch} />
          <div className="main">
            <SearchBar
              inputRef={this.inputRef}
              searchFocus={this.state.searchFocus}
              searchChange={this.searchChange}
              showSearch={this.state.showSearch}
              searchVal={this.state.searchVal}
            />
            <div className="flex justify-center" style={{ height: "100%" }}>
              <div className="feature">
                {this.generateCards("feature", this.state.currentPosts, 0)}
              </div>
              <div className="normal">
                {this.generateCards("normal", this.state.currentPosts, 1)}
              </div>
              <div className="normal">
                {this.generateCards("normal", this.state.currentPosts, 2)}
              </div>
            </div>
          </div>
          <Footer handleFilter={this.handleFilter} />
        </div>
      );
    else
      return (
        <div className="flex justify-center home">
          <Header clickSearch={this.clickSearch} />
          <div className="main">
            <SearchBar
              inputRef={this.inputRef}
              searchFocus={this.state.searchFocus}
              searchChange={this.searchChange}
              showSearch={this.state.showSearch}
              searchVal={this.state.searchVal}
            />
            <div className="flex justify-center" style={{ height: "100%" }}>
              <div className="feature">
                {this.generateCards("feature", this.state.currentPosts, 0)}
              </div>
              <div
                className="normalTab"
                // style={{ backgroundColor: 'red' }}
              >
                {this.generateCards("normal", this.state.currentPosts, 1)}
                {this.generateCards("normal", this.state.currentPosts, 2)}
              </div>
            </div>
          </div>
          <Footer handleFilter={this.handleFilter} />
        </div>
      );
  }
}
