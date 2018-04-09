import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room9 from '../../../../images/room9/room9.jpg';
import './Room9.css';


class Room9 extends Component {

  state = {
    hoverGoToRoom10: false,
    hoverGoToRoom1: false,
    hoverGoToRoom4: false,
    hoverGoToRoom6: false,
    clickJess: false,
    canGoIntoClub: false,
  }

  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  handlehoverEnterGoTo = (num) => { //can I do this dynamically somehow??
    if (num === 10){
      this.setState({
        hoverGoToRoom10: true
      })
    }
    else if (num === 1){
      this.setState({
        hoverGoToRoom1: true
      })
    }
    else if (num === 4){
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
    if (num === 10){
      this.setState({
        hoverGoToRoom10: false
      })
    }
    else if (num === 1){
      this.setState({
        hoverGoToRoom1: false
      })
    }
    else if (num === 4){
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

  handleJess = () => {
    this.setState({
      clickJess: !this.state.clickJess,
      canGoIntoClub: true
    })
  }

  render() {
    return (
      <div className="main_container">
        <img src={room9} alt="Beach Club Parking Lot"/>

          <div id="beach_jess" onClick={this.handleJess}></div>
          {this.state.clickJess? <div id="beach_jess_message">
            OMG you are here too? Why are you following me around. You are so weird. I am finishing this cigarette and then I'm going into work and I don't want to talk to you anymore. Ugh don't go into the club and start bothering the members. You are going to get kicked out.
          </div> : null }

          {this.state.canGoIntoClub? <div id="room9_go_to_room_10" className="traverse_rooms"
            onClick={(e) => this.handleGoToRoom(10)}
            onMouseEnter={(e) => this.handlehoverEnterGoTo(10)}
            onMouseLeave={(e) => this.handlehoverLeaveGoTo(10)}>
            {this.state.hoverGoToRoom10? <div>GO TO POOL</div> : null}
          </div> : null}
          
          <div id="room9_go_to_room_1" className="traverse_rooms"
            onClick={(e) => this.handleGoToRoom(1)}
            onMouseEnter={(e) => this.handlehoverEnterGoTo(1)}
            onMouseLeave={(e) => this.handlehoverLeaveGoTo(1)}>
            {this.state.hoverGoToRoom1? <div>GO TO KELLY'S HOUSE</div> : null}
          </div>
          <div id="room9_go_to_room_4" className="traverse_rooms"
            onClick={(e) => this.handleGoToRoom(4)}
            onMouseEnter={(e) => this.handlehoverEnterGoTo(4)}
            onMouseLeave={(e) => this.handlehoverLeaveGoTo(4)}>
            {this.state.hoverGoToRoom4? <div>GO TO JESSICA'S HOUSE</div> : null}
          </div>
          <div id="room9_go_to_room_6" className="traverse_rooms"
            onClick={(e) => this.handleGoToRoom(6)}
            onMouseEnter={(e) => this.handlehoverEnterGoTo(6)}
            onMouseLeave={(e) => this.handlehoverLeaveGoTo(6)}>
            {this.state.hoverGoToRoom6? <div>GO TO ALLISON'S HOUSE</div> : null}
          </div>
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room9);
