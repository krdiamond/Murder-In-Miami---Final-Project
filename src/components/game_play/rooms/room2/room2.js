import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room2 from '../../../../images/room2/room2.jpg';


class Room2 extends Component {

  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  render() {
    return (
      <div className="main_container">
        <img src={room2} alt="Victim's Living Room"/>
          <div id="room2_go_to_room_1" className="traverse_rooms" onClick={(e) => this.handleGoToRoom(1)}></div>
          <div id="room2_go_to_room_3" className="traverse_rooms" onClick={(e) => this.handleGoToRoom(3)}></div>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room2);
