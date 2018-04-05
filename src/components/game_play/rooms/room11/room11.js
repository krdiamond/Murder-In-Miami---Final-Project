import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room11 from '../../../../images/room11/room11.jpg';


class Room11 extends Component {

  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  render() {
    return (
      <div className="main_container">
        <img src={room11} alt="Victim's Living Room"/>
          <div id="room11_go_to_room_10" className="traverse_rooms" onClick={(e) => this.handleGoToRoom(10)}></div>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room11);
