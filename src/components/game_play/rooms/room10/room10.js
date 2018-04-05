import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room10 from '../../../../images/room10/room10.jpg';


class Room10 extends Component {

  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  render() {
    return (
      <div className="main_container">
        <img src={room10} alt="Victim's Living Room"/>
          <div id="room10_go_to_room_11" className="traverse_rooms" onClick={(e) => this.handleGoToRoom(11)}></div>
          <div id="room10_go_to_room_9" className="traverse_rooms" onClick={(e) => this.handleGoToRoom(9)}></div>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room10);
