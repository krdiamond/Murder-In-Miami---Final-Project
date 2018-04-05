import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room8 from '../../../../images/room8/room8.jpg';


class Room8 extends Component {

  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  render() {
    return (
      <div className="main_container">
        <img src={room8} alt="Victim's Living Room"/>
          <div id="room8_go_to_room_7" className="traverse_rooms" onClick={(e) => this.handleGoToRoom(7)}></div>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room8);
