import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room8 from '../../../../images/room8/room8.jpg';


class Room8 extends Component {

  state = {
    hoverGoToRoom7: false,
  }

  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  handlehoverEnterGoTo = () => {
    this.setState({
      hoverGoToRoom7: true
    })
  }

  handlehoverLeaveGoTo = () => {
    this.setState({
      hoverGoToRoom7: false
    })
  }

  render() {
    return (
      <div className="main_container">
        <img src={room8} alt="Victim's Living Room"/>
        <div id="room8_go_to_room_7" className="traverse_rooms"
          onClick={(e) => this.handleGoToRoom(7)}
          onMouseEnter={this.handlehoverEnterGoTo}
          onMouseLeave={this.handlehoverLeaveGoTo}>
          {this.state.hoverGoToRoom7? <div>GO TO ALLISON'S KITCHEN</div> : null}
        </div>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room8);
