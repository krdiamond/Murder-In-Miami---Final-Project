import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room10 from '../../../../images/room10/room10.jpg';


class Room10 extends Component {

  handleGoToRoom = () => {
    this.props.goToRoom(11)
  }

  render() {
    return (
      <div className="main_container">
        <img src={room10} alt="Victim's Living Room"/>
        <div className="go_to_room" onClick={this.handleGoToRoom}> </div>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room10);
