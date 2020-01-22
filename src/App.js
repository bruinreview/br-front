import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Shop from './Shop/Shop';
import Article from './Article/Article';
import Connect from './Connect/Connect';
import Print from './Print/Print';
import Header from './Header';
import logo from './logo.svg';
import './resources/animate.css'
import './App.css';


function App() {
  return (
    <div className="App" style={{width:'100%', height:'100%'}}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/article" component={Article}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/connect" component={Connect}/>
          <Route exact path="/shop" component={Shop}/>
          <Route exact path="/print" component={Print}/>
        </Switch>
    </div>
  );
}

export default App;
