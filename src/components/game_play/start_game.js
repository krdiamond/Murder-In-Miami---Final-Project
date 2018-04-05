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
        <button id="start_button" type="button" onClick={this.handleGoToRoom} >START GAME</button>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(StartGame);
