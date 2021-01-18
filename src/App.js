import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import volunteerProfile from './components/voluteerProfile/volunteerProfile';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/volunteerProfile/:vId" component={volunteerProfile}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
