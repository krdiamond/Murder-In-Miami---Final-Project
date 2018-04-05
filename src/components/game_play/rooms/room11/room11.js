import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room11 from '../../../../images/room11/room11.jpg';


class Room11 extends Component {

  handleGoToRoom = () => {
    this.props.goToRoom(10)
  }

  render() {
    return (
      <div className="main_container">
        <img src={room11} alt="Victim's Living Room"/>
        <div className="go_to_room" onClick={this.handleGoToRoom}> </div>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room11);
