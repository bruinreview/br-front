import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Shop from './Shop/Shop';
import Connect from './Connect/Connect';
import Header from './Header';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/connect" component={Connect}/>
          <Route exact path="/shop" component={Shop}/>
        </Switch>
    </div>
  );
}

export default App;
