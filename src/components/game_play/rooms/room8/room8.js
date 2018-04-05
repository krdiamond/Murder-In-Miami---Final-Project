import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room8 from '../../../../images/room8/room8.jpg';


class Room8 extends Component {

  handleGoToRoom = () => {
    this.props.goToRoom(9)
  }

  render() {
    return (
      <div className="main_container">
        <img src={room8} alt="Victim's Living Room"/>
        <div className="go_to_room" onClick={this.handleGoToRoom}> </div>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room8);
