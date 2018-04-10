import React, { Component } from 'react';
import {connect} from 'react-redux'
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

          {this.props.displayDadsMessage? <div id="dads_message">THIS IS YOUR FATHER</div>:null}

          <div id="room6phone" onClick={this.handlePhoneClick} >
            <img src={redDot} width="5" alt="blinking light"/>}
          </div>
          {(this.props.showPhone === true)? <PhoneContainer message="Hi Allison, It's your father. Your mother and I went by your house today and we noticed you weren't home. I thought we had plans to do our usual sunday brunch? Where are you? Call me back when you get this. "/>: null}



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

          {this.props.findFridgeNote?
          <div id="room6_go_to_room_9" className="traverse_rooms"
            onClick={(e) => this.handleGoToRoom(9)}
            onMouseEnter={(e) => this.handlehoverEnterGoTo(9)}
            onMouseLeave={(e) => this.handlehoverLeaveGoTo(9)}>
            {this.state.hoverGoToRoom9? <div>GO TO THE BEACH CLUB</div> : null}
          </div> :null}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    showPhone: state.showPhone,
    isPurseOpened: state.isPurseOpened,
    findFridgeNote: state.findFridgeNote,
    timer: state.timer,
    displayDadsMessage: state.displayDadsMessage,
  }
}

export default connect( mapStateToProps, actions)(Room6);
