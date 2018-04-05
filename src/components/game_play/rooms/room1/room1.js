import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import './Room1.css';
import room1 from '../../../../images/room1/room1.jpg';

class Room1 extends Component {

  state = {
    hoverGoToRoom2: false,
    hoverGoToRoom4: false,
  }

  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  handlehoverEnterGoTo = (num) => { //can I do this dynamically somehow??
    if (num === 2){
      this.setState({
        hoverGoToRoom2: true
      })
    }
    else if (num === 4){
      this.setState({
        hoverGoToRoom4: true
      })
    }
  }

  handlehoverLeaveGoTo = (num) => { //can I do this dynamically somehow??
    if (num === 2){
      this.setState({
        hoverGoToRoom2: false
      })
    }
    else if (num === 4){
      this.setState({
        hoverGoToRoom4: false
      })
    }
  }


  render() {
    return (
      <div className="main_container">
        <img src={room1} alt="Victim's Living Room"/>
        <div id="room1_go_to_room_2" className="traverse_rooms"
          onClick={(e) => this.handleGoToRoom(2)}
          onMouseEnter={(e) => this.handlehoverEnterGoTo(2)}
          onMouseLeave={(e) => this.handlehoverLeaveGoTo(2)}>
            {this.state.hoverGoToRoom2? <div>GO TO KELLY'S BEDROOM</div> : null}
        </div>
        <div id="room1_go_to_room_4" className="traverse_rooms"
          onClick={(e) => this.handleGoToRoom(4)}
          onMouseEnter={(e) => this.handlehoverEnterGoTo(4)}
          onMouseLeave={(e) => this.handlehoverLeaveGoTo(4)}>
          {this.state.hoverGoToRoom4? <div>GO TO JESSICA'S HOUSE</div> : null}
        </div>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room1);
