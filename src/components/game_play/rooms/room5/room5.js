import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room5 from '../../../../images/room5/room5.jpg';


class Room5 extends Component {

  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  render() {
    return (
      <div className="main_container">
        <img src={room5} alt="Victim's Living Room"/>
        <div id="room5_go_to_room_4" className="traverse_rooms" onClick={(e) => this.handleGoToRoom(4)}></div>
        <div id="room5_go_to_room_6" className="traverse_rooms" onClick={(e) => this.handleGoToRoom(6)}></div>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room5);
