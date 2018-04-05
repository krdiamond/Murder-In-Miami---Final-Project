import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room4 from '../../../../images/room4/room4.jpg';


class Room4 extends Component {

  handleGoToRoom = () => {
    this.props.goToRoom(5)
  }

  render() {
    return (
      <div className="main_container">
        <img src={room4} alt="Victim's Living Room"/>
        <div className="go_to_room" onClick={this.handleGoToRoom}> </div>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room4);
