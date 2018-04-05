import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room5 from '../../../../images/room5/room5.jpg';


class Room5 extends Component {

  handleGoToRoom = () => {
    this.props.goToRoom(6)
  }

  render() {
    return (
      <div className="main_container">
        <img src={room5} alt="Victim's Living Room"/>
        <div className="go_to_room" onClick={this.handleGoToRoom}> </div>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room5);
