import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room1 from '../../../../images/room1/room1.jpg';

class Room1 extends Component {

  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }


  render() {
    return (
      <div className="main_container">
        <img src={room1} alt="Victim's Living Room"/>
        <div id="room1_go_to_room_2" className="traverse_rooms" onClick={(e) => this.handleGoToRoom(2)}></div>
        <div id="room1_go_to_room_3" className="traverse_rooms" onClick={(e) => this.handleGoToRoom(3)}></div>
        <div id="room1_go_to_room_4" className="traverse_rooms" onClick={(e) => this.handleGoToRoom(4)}></div>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room1);

// <div id="go_to_room_3" className="go_to_room" onClick={this.handleGoToRoom3}></div>
// <div id="go_to_room_4" className="go_to_room" onClick={this.handleGoToRoom4}><
