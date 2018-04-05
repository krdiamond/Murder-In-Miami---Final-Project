import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room7 from '../../../../images/room7/room7.jpg';


class Room7 extends Component {

  handleGoToRoom = () => {
    this.props.goToRoom(8)
  }

  render() {
    return (
      <div className="main_container">
        <img src={room7} alt="Victim's Living Room"/>
        <div className="go_to_room" onClick={this.handleGoToRoom}> </div>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room7);
