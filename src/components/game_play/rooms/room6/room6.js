import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room6 from '../../../../images/room6/room6.jpg';


class Room6 extends Component {

  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  render() {
    return (
      <div className="main_container">
        <img src={room6} alt="Victim's Living Room"/>
          <div id="room6_go_to_room_4" className="traverse_rooms" onClick={(e) => this.handleGoToRoom(4)}></div>
          <div id="room6_go_to_room_7" className="traverse_rooms" onClick={(e) => this.handleGoToRoom(7)}></div>
          <div id="room6_go_to_room_9" className="traverse_rooms" onClick={(e) => this.handleGoToRoom(9)}></div>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room6);
