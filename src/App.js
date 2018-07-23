import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPageContainer from './components/pre_game/landing_page_container';
import GameContainer from './components/game_play/game_container';
import NotFound from './components/pre_game/route_not_found';
import './App.css';

const interact = require('interactjs');

class App extends Component {

  componentDidMount = () => {
    interact('.draggable')
      .draggable({
        onmove: this.dragMoveListener
      });
  }

  dragMoveListener (event) {
    var target = event.target,
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }



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
