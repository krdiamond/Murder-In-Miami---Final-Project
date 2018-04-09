import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room6 from '../../../../images/room6/room6.jpg';
import './Room6.css';
import redDot from '../../../../images/room1/red_dot.gif';
import * as actions from '../../../../actions';
import PhoneContainer from '../../phone_container';


class Room6 extends Component {

  state = {
    hoverGoToRoom4: false,
    hoverGoToRoom7: false,
    hoverGoToRoom9: false,
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
    else if (num === 7){
      this.setState({
        hoverGoToRoom7: true
      })
    }
    else if (num === 9){
      this.setState({
        hoverGoToRoom9: true
      })
    }
  }

  handlehoverLeaveGoTo = (num) => { //can I do this dynamically somehow??
    if (num === 4){
      this.setState({
        hoverGoToRoom4: false
      })
    }
    else if (num === 7){
      this.setState({
        hoverGoToRoom7: false
      })
    }
    else if (num === 9){
      this.setState({
        hoverGoToRoom9: false
      })
    }
  }

  handlePhoneClick = () => {
    this.props.toggleShowPhone(!this.props.showPhone)
  }

  render() {
    return (
      <div className="main_container">
        <img src={room6} alt="Victim's Living Room"/>

          <div id="room6phone" onClick={this.handlePhoneClick} >
          </div> {(this.props.showPhone === true && this.props.isPurseOpened === false)? <PhoneContainer message="0"/>: null}

          <div id="room6_go_to_room_4" className="traverse_rooms"
            onClick={(e) => this.handleGoToRoom(4)}
            onMouseEnter={(e) => this.handlehoverEnterGoTo(4)}
            onMouseLeave={(e) => this.handlehoverLeaveGoTo(4)}>
            {this.state.hoverGoToRoom4? <div>GO TO JESSICA'S HOUSE</div> : null}
          </div>
          <div id="room6_go_to_room_7" className="traverse_rooms"
            onClick={(e) => this.handleGoToRoom(7)}
            onMouseEnter={(e) => this.handlehoverEnterGoTo(7)}
            onMouseLeave={(e) => this.handlehoverLeaveGoTo(7)}>
            {this.state.hoverGoToRoom7? <div>GO TO ALLISON'S KITCHEN</div> : null}
          </div>
          <div id="room6_go_to_room_9" className="traverse_rooms"
            onClick={(e) => this.handleGoToRoom(9)}
            onMouseEnter={(e) => this.handlehoverEnterGoTo(9)}
            onMouseLeave={(e) => this.handlehoverLeaveGoTo(9)}>
            {this.state.hoverGoToRoom9? <div>GO TO THE BEACH CLUB</div> : null}
          </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    showPhone: state.showPhone,
    isPurseOpened: state.isPurseOpened,
  }
}

export default connect( mapStateToProps, actions)(Room6);

  // {this.props.room1listenedToMessage? null : <img src={redDot} width="5" alt="blinking light"/>}
