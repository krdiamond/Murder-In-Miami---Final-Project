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
               A girl named Kelly was found brutally murdered by the beach two nights ago. Police found the body covered with fallen branches, rocks, sand and dirt.  They also found numerous cigarette butts all over the area but were too covered with sand to test for DNA. The police have not been able to find any leads and the case is looking bleak.  You are super nosy and have decided to snoop around to help solve the case.  You have come equiped with a duffle bag (on the right), to store any items that might help along the way. Point, click, and drag through Kelly's small Miami world to figure out what happened to her. If you are able to figure out who the murderer is and what the murder weapon was, please call the police from any phone as soon as possible!!!!
            </div>
            <button id="start_button" type="button" onClick={this.handleGoToRoom} >START GAME</button>
        </div>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(StartGame);
