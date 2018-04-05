import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room9 from '../../../../images/room9/room9.jpg';


class Room9 extends Component {

  handleGoToRoom = () => {
    this.props.goToRoom(10)
  }

  render() {
    return (
      <div className="main_container">
        <img src={room9} alt="Victim's Living Room"/>
        <div className="go_to_room" onClick={this.handleGoToRoom}> </div>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room9);
