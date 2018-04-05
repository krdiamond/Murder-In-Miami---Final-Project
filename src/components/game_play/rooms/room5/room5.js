import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room5 from '../../../../images/room5/room5.jpg';


class Room5 extends Component {

  state = {
    hoverGoToRoom4: false,
    hoverGoToRoom6: false,
  }

  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  handlehoverEnterGoTo = (num) => { //can I do this dynamically somehow??
    if (num === 4){
      this.setState({
        hoverGoToRoom4: true
      })
    }
    else if (num === 6){
      this.setState({
        hoverGoToRoom6: true
      })
    }
  }

  handlehoverLeaveGoTo = (num) => { //can I do this dynamically somehow??
    if (num === 4){
      this.setState({
        hoverGoToRoom4: false
      })
    }
    else if (num === 6){
      this.setState({
        hoverGoToRoom6: false
      })
    }
  }

  render() {
    return (
      <div className="main_container">
        <img src={room5} alt="Victim's Living Room"/>
        <div id="room5_go_to_room_4" className="traverse_rooms"
          onClick={(e) => this.handleGoToRoom(4)}
          onMouseEnter={(e) => this.handlehoverEnterGoTo(4)}
          onMouseLeave={(e) => this.handlehoverLeaveGoTo(4)}>
          {this.state.hoverGoToRoom4? <div>GO BACK TO JESSICA'S STUDY</div> : null}
        </div>
        <div id="room5_go_to_room_6" className="traverse_rooms"
          onClick={(e) => this.handleGoToRoom(6)}
          onMouseEnter={(e) => this.handlehoverEnterGoTo(6)}
          onMouseLeave={(e) => this.handlehoverLeaveGoTo(6)}>
          {this.state.hoverGoToRoom6? <div>SNEAK OUT TO ALLISON'S HOUSE</div> : null}
        </div>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room5);
