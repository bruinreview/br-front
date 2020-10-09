import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Article from './Article/Article'
import Apply from './Connect/Apply'
import Connect from './Connect/Connect'
import Home from './Home/Home'
import Print from './Print/Print'
import './resources/animate.css'
import './App.css'

function App() {
  return (
    <div className="App" style={{ width: '100%', height: '100%' }}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/article/:articleID" component={Article} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/info" component={Connect} />
        <Route exact path="/print" component={Print} />
        <Route exact path="/apply" component={Apply} />
      </Switch>
    </div>
  )
}

export default App