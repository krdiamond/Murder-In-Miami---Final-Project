import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room2 from '../../../../images/room2/room2.jpg';


class Room2 extends Component {

  state = {
    hoverGoToRoom1: false,
    hoverGoToRoom3: false,
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
    else if (num === 3){
      this.setState({
        hoverGoToRoom3: true
      })
    }
  }

  handlehoverLeaveGoTo = (num) => { //can I do this dynamically somehow??
    if (num === 1){
      this.setState({
        hoverGoToRoom1: false
      })
    }
    else if (num === 3){
      this.setState({
        hoverGoToRoom3: false
      })
    }
  }

  render() {
    return (
      <div className="main_container">
        <img src={room2} alt="Victim's Living Room"/>
          <div id="room2_go_to_room_1" className="traverse_rooms"
            onClick={(e) => this.handleGoToRoom(1)}
            onMouseEnter={(e) => this.handlehoverEnterGoTo(1)}
            onMouseLeave={(e) => this.handlehoverLeaveGoTo(1)}>
              {this.state.hoverGoToRoom1? <div>GO TO KELLY'S LIVING ROOM</div> : null}
          </div>
          <div id="room2_go_to_room_3" className="traverse_rooms"
            onClick={(e) => this.handleGoToRoom(3)}
            onMouseEnter={(e) => this.handlehoverEnterGoTo(3)}
            onMouseLeave={(e) => this.handlehoverLeaveGoTo(3)}>
              {this.state.hoverGoToRoom3? <div>GO TO KELLY'S STUDY</div> : null}
          </div>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room2);
