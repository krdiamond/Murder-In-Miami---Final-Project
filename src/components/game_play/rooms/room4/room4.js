import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room4 from '../../../../images/room4/room4.jpg';


class Room4 extends Component {

  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  render() {
    return (
      <div className="main_container">
        <img src={room4} alt="Victim's Living Room"/>
        <div id="room4_go_to_room_5" className="traverse_rooms" onClick={(e) => this.handleGoToRoom(5)}></div>
        <div id="room4_go_to_room_1" className="traverse_rooms" onClick={(e) => this.handleGoToRoom(1)}></div>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room4);
