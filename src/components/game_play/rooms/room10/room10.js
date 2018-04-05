import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room10 from '../../../../images/room10/room10.jpg';


class Room10 extends Component {

  state = {
    hoverGoToRoom11: false,
    hoverGoToRoom9: false,
  }


  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  handlehoverEnterGoTo = (num) => { //can I do this dynamically somehow??
    if (num === 11){
      this.setState({
        hoverGoToRoom11: true
      })
    }
    else if (num === 9){
      this.setState({
        hoverGoToRoom9: true
      })
    }
  }

  handlehoverLeaveGoTo = (num) => { //can I do this dynamically somehow??
    if (num === 11){
      this.setState({
        hoverGoToRoom11: false
      })
    }
    else if (num === 9){
      this.setState({
        hoverGoToRoom9: false
      })
    }
  }

  render() {
    return (
      <div className="main_container">
        <img src={room10} alt="Victim's Living Room"/>
          <div id="room10_go_to_room_11" className="traverse_rooms"
            onClick={(e) => this.handleGoToRoom(11)}
            onMouseEnter={(e) => this.handlehoverEnterGoTo(11)}
            onMouseLeave={(e) => this.handlehoverLeaveGoTo(11)}>
            {this.state.hoverGoToRoom11? <div>GO TO CLUB CAFE</div> : null}
          </div>
          <div id="room10_go_to_room_9" className="traverse_rooms"
            onClick={(e) => this.handleGoToRoom(9)}
            onMouseEnter={(e) => this.handlehoverEnterGoTo(9)}
            onMouseLeave={(e) => this.handlehoverLeaveGoTo(9)}>
            {this.state.hoverGoToRoom9? <div>GO TO CLUB PARKING LOT</div> : null}
          </div>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room10);
