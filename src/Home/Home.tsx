import GhostContentAPI from '@tryghost/content-api'
import React, { Component, ReactElement } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { GhostAPI, GhostContentAPIOptions } from 'tryghost__content-api'
import Card from '../Components/Card'
import MobileNav from '../Components/MobileNav'
import SearchBar from '../Components/SearchBar'
import Footer from '../Footer'
import Header from '../Header'
import './Home.css'

const host = 'https://bruinreview.herokuapp.com'
class Post {
  id: string
  title: string
  type: string
  category: string
  date: string
  author: string
  html: string
  slug: string
  text: string
  tags: string[]
  image: string
  constructor(obj: {
    id: string
    title: string
    type: string
    category: string
    date: string
    author: string
    html: string
    slug: string
    text: string
    tags: string[]
    image: string
  }) {
    this.id = obj.id
    this.title = obj.title
    this.type = obj.type
    this.category = obj.category
    this.date = obj.date
    this.author = obj.author
    this.html = obj.html
    this.slug = obj.slug
    this.text = obj.text
    this.tags = obj.tags
    this.image = obj.image
  }
}

const date = (date: string) => new Date(date.split('T')[0]).toDateString().substring(4)

interface IState {
  posts: Array<Post>
  currentPosts: Array<Post>
  filter: string
  searchVal: string
  menuOpen: boolean
  isMobile: boolean
  isTab: boolean
  showSearch: boolean
  searchFocus: boolean
}
export default class Home extends Component<RouteComponentProps, IState> {
  constructor(props: RouteComponentProps) {
    super(props)
    this.state = {
      posts: [],
      currentPosts: [],
      filter: '',
      searchVal: '',
      menuOpen: false,
      isMobile: window.innerWidth < 480,
      isTab: window.innerWidth >= 480 && window.innerWidth <= 1024,
      showSearch: false,
      searchFocus: false,
    }
  }

  componentDidMount(): void {
    document.addEventListener('keydown', this.handleSearchBar)
    window.addEventListener('resize', this.resize)
    const options: GhostContentAPIOptions = {
      url: host,
      key: '876bb28735b6e13c96024fd082',
      version: 'v3',
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
    const api: GhostAPI = new GhostContentAPI(options)
    api.posts
      .browse({
        limit: 'all',
        include: ['tags', 'authors'],
        formats: ['plaintext', 'html'],
      })
      .then(postData => {
        postData.forEach(p => {
          this.setState({
            posts: [
              ...this.state.posts,
              new Post({
                id: p.id,
                title: p.title ?? '',
                type: 'regular',
                category: p.featured ? 'feature' : 'normal',
                date: date(p.published_at ?? ''),
                author: (p.authors ?? [{ name: 'Unkonwn' }])[0].name ?? 'Unkonwn',
                slug: p.slug,
                html: p.html ?? '',
                tags: (p.tags ?? []).map(u => u.name ?? ''),
                text: p.plaintext ?? '',
                image: p.feature_image ?? '',
              }),
            ],
          })
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  handleSearchBar = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      this.setState({
        showSearch: false,
        searchVal: '',
      })
    }
    if (
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.includes(event.key) &&
      !this.state.showSearch &&
      this.state.searchVal === ''
    ) {
      this.setState({
        showSearch: true,
      })
    }
  }

  resize = (): void => {
    this.setState({
      isMobile: window.outerWidth < 480,
      isTab: window.innerWidth >= 480 && window.innerWidth <= 1024,
    })
  }

  filterCards(posts: Array<Post>): Array<React.ReactNode> {
    const p = posts.map(post => (
      <React.Fragment key={post.id}>
        <Card
          tags={post.tags}
          key={post.id}
          imgURL={post.image}
          id={post.id}
          slug={post.slug}
          transitionToFull={this.transitionToFull}
          title={post.title}
          date={post.date}
          show={true}
          category={post.category}
          type={`${post.type}Icon`}
          author={post.author}
        />
      </React.Fragment>
    ))
    return p
  }

  generateCards(category: string, posts: Array<Post>, normal = 1): Array<React.ReactNode> {
    if (normal === 0) {
      return this.filterCards(posts.filter(post => post.category === category))
    } else if (normal === 1) {
      posts = posts.filter(post => post.category === category)
      const half_length = Math.ceil(posts.length / 2)
      posts = posts.splice(0, half_length)
      return this.filterCards(posts)
    } else {
      posts = posts.filter(post => post.category === category)
      const half_length = Math.ceil(posts.length / 2)
      posts = posts.splice(half_length, posts.length)
      return this.filterCards(posts)
    }
  }

  generateMobileCards(posts: Array<Post>): Array<React.ReactNode> {
    return this.filterCards(posts)
  }

  handleFilter = (e: { target: HTMLDivElement }): void => {
    if (this.state.filter === e.target.id) {
      this.setState({ filter: '' })
    } else {
      this.setState({ filter: e.target.id })
    }
    const posts = this.state.posts.filter(
      post =>
        (this.state.filter === '' || post.type === this.state.filter) &&
        (post.title.toLowerCase().includes(this.state.searchVal.toLowerCase()) ||
          post.type.toLowerCase().includes(this.state.searchVal.toLowerCase()) ||
          post.date.toLowerCase().includes(this.state.searchVal.toLowerCase()) ||
          post.author.toLowerCase().includes(this.state.searchVal.toLowerCase()))
    )
    this.setState({ currentPosts: posts })
  }

  searchChange = (event: { target: HTMLInputElement }): void => {
    this.setState({ searchVal: event.target.value })
    if (event.target.value === '') {
      this.setState({
        showSearch: false,
      })
    }
    const posts = this.state.posts.filter(
      post =>
        (this.state.filter === '' || post.type === this.state.filter) &&
        (post.title.toLowerCase().includes(this.state.searchVal.toLowerCase()) ||
          post.type.toLowerCase().includes(this.state.searchVal.toLowerCase()) ||
          post.date.toLowerCase().includes(this.state.searchVal.toLowerCase()) ||
          post.author.toLowerCase().includes(this.state.searchVal.toLowerCase()))
    )
    this.setState({ currentPosts: posts })
  }

  transitionToFull = (URL: string): void => {
    setTimeout(() => {
      this.props.history.push({ pathname: `/article/${URL}` })
    }, 500)
  }

  clickSearch = (): void => {
    this.setState({ showSearch: !this.state.showSearch })
  }

  render(): ReactElement {
    if (this.state.posts !== this.state.currentPosts && !this.state.filter && !this.state.searchVal) {
      this.setState({ currentPosts: this.state.posts })
    }

    if (this.state.isMobile) {
      return (
        <div className="flex flex-column items-center  home">
          <MobileNav
            showBar={true}
            searchFocus={this.state.searchFocus}
            searchChange={this.searchChange}
            searchVal={this.state.searchVal}
          />
          <div className="pt4 pb3" />
          <div className="main">
            <div className="flex-col" style={{ height: '100%' }}>
              {this.generateMobileCards(this.state.posts)}
            </div>
          </div>
        </div>
      )
    } else if (!this.state.isTab) {
      return (
        <div className="flex justify-center home">
          <Header clickSearch={this.clickSearch} />
          <div className="main">
            <SearchBar
              searchFocus={this.state.searchFocus}
              searchChange={this.searchChange}
              showSearch={this.state.showSearch}
              searchVal={this.state.searchVal}
            />
            <div className="flex justify-center" style={{ height: '100%' }}>
              <div className="feature">{this.generateCards('feature', this.state.currentPosts, 0)}</div>
              <div className="normal">{this.generateCards('normal', this.state.currentPosts, 1)}</div>
              <div className="normal">{this.generateCards('normal', this.state.currentPosts, 2)}</div>
            </div>
          </div>
          <Footer handleFilter={this.handleFilter} />
        </div>
      )
    } else {
      return (
        <div className="flex justify-center home">
          <Header clickSearch={this.clickSearch} />
          <div className="main">
            <SearchBar
              searchFocus={this.state.searchFocus}
              searchChange={this.searchChange}
              showSearch={this.state.showSearch}
              searchVal={this.state.searchVal}
            />
            <div className="flex justify-center" style={{ height: '100%' }}>
              <div className="feature">{this.generateCards('feature', this.state.currentPosts, 0)}</div>
              <div
                className="normalTab"
                // style={{ backgroundColor: 'red' }}
              >
                {this.generateCards('normal', this.state.currentPosts, 1)}
                {this.generateCards('normal', this.state.currentPosts, 2)}
              </div>
            </div>
          </div>
          <Footer handleFilter={this.handleFilter} />
        </div>
      )
    }
  }
}
