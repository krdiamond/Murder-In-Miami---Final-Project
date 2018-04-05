import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room11 from '../../../../images/room11/room11.jpg';


class Room11 extends Component {

  state = {
    hoverGoToRoom10: false,
  }

  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  handlehoverEnterGoTo = () => {
    this.setState({
      hoverGoToRoom10: true
    })
  }

  handlehoverLeaveGoTo = () => {
    this.setState({
      hoverGoToRoom10: false
    })
  }

  render() {
    return (
      <div className="main_container">
        <img src={room11} alt="Victim's Living Room"/>
          <div id="room11_go_to_room_10" className="traverse_rooms"
            onClick={(e) => this.handleGoToRoom(10)}
            onMouseEnter={this.handlehoverEnterGoTo}
            onMouseLeave={this.handlehoverLeaveGoTo}>
            {this.state.hoverGoToRoom10? <div>GO TO POOL</div> : null}
          </div>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room11);
