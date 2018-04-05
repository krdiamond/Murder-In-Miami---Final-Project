import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room7 from '../../../../images/room7/room7.jpg';


class Room7 extends Component {

  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  render() {
    return (
      <div className="main_container">
        <img src={room7} alt="Victim's Living Room"/>
          <div id="room7_go_to_room_6" className="traverse_rooms" onClick={(e) => this.handleGoToRoom(6)}></div>
          <div id="room7_go_to_room_8" className="traverse_rooms" onClick={(e) => this.handleGoToRoom(8)}></div>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room7);
