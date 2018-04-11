import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import './Room2.css';
import room2 from '../../../../images/room2/room2.jpg';



class Room2 extends Component {

  state = {
    showRacketMessage:false,
    showBedMessage: false,
  }

  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  toggleRacketMessage =() => {
    this.setState({
      showRacketMessage: !this.state.showRacketMessage
    })
  }

  toggleBedMessage =() => {
    this.setState({
      showBedMessage: !this.state.showBedMessage
    })
  }

  render() {
    return (
      <div className="main_container">

        <img src={room2} alt="Kelly's Bedroom"/>

        <div id="tennis_racket" onClick={this.toggleRacketMessage}></div>
        {this.state.showRacketMessage? <div id="racket_message">
          ... seems like Kelly played a lot of tennis. This racket is so dirty and worn in.
        </div> : null }

        <div id="bed" onClick={this.toggleBedMessage}></div>
        {this.state.showBedMessage? <div id="bed_message">
          ... Kelly's bed is made. Did she ever come home from work? I guess she didn't sleep here...
        </div> : null }

        <div id="room2_go_to_room_1" className="traverse_rooms" onClick={(e) => this.handleGoToRoom(1)}>
          <div id="room2_go_to_room_1_text">GO TO KELLY'S LIVING ROOM</div>
        </div>

        <div id="room2_go_to_room_3" onClick={(e) => this.handleGoToRoom(3)}>
          <div id="room2_go_to_room_3_text">GO TO KELLY'S OFFICE</div>
        </div>

      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room2);
