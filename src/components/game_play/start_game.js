import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../actions'
import '../../App.css';
import startIMG from '../../images/start_game.jpg';


class StartGame extends Component {

  handleGoToRoom = () => {
    this.props.goToRoom(1)
  }

  render() {
    return (
      <div className="main_container">
        <img src={startIMG} height="900" alt="start page"/>
        <div id="header">Murder In Miami</div>
        <div id="intro">
            <div id="opening_story">
               A girl named Kelly was found brutally murdered by the beach. Police have been combing the area for clues. The body was found covered with fallen branches, rocks, and sand. Cigarette butts were found all over the area but were too sandy to test for for DNA.  The police do not have any leads and the case is looking bleak.  You are nosy and have decided to snoop around. You are equiped with a duffle bag (on the right), to store any items that might help along the way. Explore Kelly's world to figure out what happened to her. If you think you know who the murderer is and what the murder weapon was, please call the police from any phone as soon as possible!!!!
            </div>
            <button id="start_button" type="button" onMouseUp={this.handleGoToRoom} >START GAME</button>
        </div>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(StartGame);
