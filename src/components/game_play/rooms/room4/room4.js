import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room4 from '../../../../images/room4/room4.jpg';


class Room4 extends Component {

  state = {
    hoverGoToRoom5: false,
    hoverGoToRoom1: false,
  }

  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  handlehoverEnterGoTo = (num) => { //can I do this dynamically somehow??
    if (num === 1){
      this.setState({
        hoverGoToRoom1: true
      })
    }
    else if (num === 5){
      this.setState({
        hoverGoToRoom5: true
      })
    }
  }

  handlehoverLeaveGoTo = (num) => { //can I do this dynamically somehow??
    if (num === 1){
      this.setState({
        hoverGoToRoom1: false
      })
    }
    else if (num === 5){
      this.setState({
        hoverGoToRoom5: false
      })
    }
  }

  render() {
    return (
      <div className="main_container">
        <img src={room4} alt="Victim's Living Room"/>
        <div id="room4_go_to_room_5" className="traverse_rooms"
          onClick={(e) => this.handleGoToRoom(5)}
          onMouseEnter={(e) => this.handlehoverEnterGoTo(5)}
          onMouseLeave={(e) => this.handlehoverLeaveGoTo(5)}>
          {this.state.hoverGoToRoom5? <div>SNEAK INTO JESSICA'S LIVING ROOM</div> : null}
        </div>
        <div id="room4_go_to_room_1" className="traverse_rooms"
          onClick={(e) => this.handleGoToRoom(1)}
          onMouseEnter={(e) => this.handlehoverEnterGoTo(1)}
          onMouseLeave={(e) => this.handlehoverLeaveGoTo(1)}>
          {this.state.hoverGoToRoom1? <div> GO BACK TO KELLY'S HOUSE</div> : null}
        </div>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room4);
