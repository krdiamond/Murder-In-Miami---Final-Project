import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room3 from '../../../../images/room3/room3.jpg';


class Room3 extends Component {

  state = {
    hoverGoToRoom2: false,
  }

  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  handlehoverEnterGoTo = () => {
    this.setState({
      hoverGoToRoom2: true
    })
  }

  handlehoverLeaveGoTo = () => {
    this.setState({
      hoverGoToRoom2: false
    })
  }

  render() {
    return (
      <div className="main_container">
        <img src={room3} alt="Victim's Living Room"/>
          <div id="room3_go_to_room_2" className="traverse_rooms"
            onClick={(e) => this.handleGoToRoom(2)}
            onMouseEnter={this.handlehoverEnterGoTo}
            onMouseLeave={this.handlehoverLeaveGoTo}>
              {this.state.hoverGoToRoom2? <div>GO TO KELLY'S BEDROOM</div> : null}
          </div>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room3);
