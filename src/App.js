import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPageContainer from './components/pre_game/landing_page_container';
import GameContainer from './components/game_play/game_container';
import NotFound from './components/pre_game/route_not_found';
import './App.css';


class App extends Component {
  render() {
    return (
      <div id="app">
        <Switch>
          <Route exact path="/" render={()=><LandingPageContainer/>}/>
          <Route path="/play" render={()=><GameContainer/>}/>
          <Route component={NotFound}/>
        </Switch>
        
      </div>
    );
  }
}

export default App;
