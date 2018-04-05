import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room3 from '../../../../images/room3/room3.jpg';


class Room3 extends Component {

  handleGoToRoom = () => {
    this.props.goToRoom(4)
  }

  render() {
    return (
      <div className="main_container">
        <img src={room3} alt="Victim's Living Room"/>
        <div className="go_to_room" onClick={this.handleGoToRoom}> </div>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room3);
