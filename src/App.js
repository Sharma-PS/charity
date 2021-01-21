import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import volunteerProfile from './components/voluteerProfile/volunteerProfile';
import Login from './components/Login/Login';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
          <Switch>
            <Route path="/Login" component={Login}/>
            <div>
            <Navbar/>
              <Route exact path="/" component={Home}/>
              <Route path="/volunteerProfile/:vId" component={volunteerProfile}/>            
            </div>
          </Switch>
      </BrowserRouter>
    );
  }
  
}

export default App;
