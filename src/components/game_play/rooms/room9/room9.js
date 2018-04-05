import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room9 from '../../../../images/room9/room9.jpg';


class Room9 extends Component {

  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  render() {
    return (
      <div className="main_container">
        <img src={room9} alt="Victim's Living Room"/>
          <div id="room9_go_to_room_10" className="traverse_rooms" onClick={(e) => this.handleGoToRoom(10)}></div>
          <div id="room9_go_to_room_1" className="traverse_rooms" onClick={(e) => this.handleGoToRoom(1)}></div>
          <div id="room9_go_to_room_4" className="traverse_rooms" onClick={(e) => this.handleGoToRoom(4)}></div>
          <div id="room9_go_to_room_6" className="traverse_rooms" onClick={(e) => this.handleGoToRoom(6)}></div>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room9);
