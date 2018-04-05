import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room6 from '../../../../images/room6/room6.jpg';


class Room6 extends Component {

  handleGoToRoom = () => {
    this.props.goToRoom(7)
  }

  render() {
    return (
      <div className="main_container">
        <img src={room6} alt="Victim's Living Room"/>
        <div className="go_to_room" onClick={this.handleGoToRoom}> </div>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room6);
