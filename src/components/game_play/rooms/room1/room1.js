import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room1 from '../../../../images/room1/room1.jpg';

class Room1 extends Component {

  handleGoToRoom = () => {
    this.props.goToRoom(2)
  }

  render() {
    return (
      <div className="main_container">
        <img src={room1} alt="Victim's Living Room"/>
        <div className="go_to_room" onClick={this.handleGoToRoom}></div>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room1);
