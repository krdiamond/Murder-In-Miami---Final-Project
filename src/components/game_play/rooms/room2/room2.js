import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room2 from '../../../../images/room2/room2.jpg';


class Room2 extends Component {

  handleGoToRoom = () => {
    this.props.goToRoom(3)
  }

  render() {
    return (
      <div className="main_container">
        <img src={room2} alt="Victim's Living Room"/>
        <div className="go_to_room" onClick={this.handleGoToRoom}> </div>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room2);
