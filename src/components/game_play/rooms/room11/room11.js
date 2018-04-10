import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../../../../App.css';
import room11 from '../../../../images/room11/room11.jpg';
import './Room11.css';
import * as actions from '../../../../actions';
import PhoneContainer from '../../phone_container';
import Tape from './tape'


class Room11 extends Component {

  state = {
    hoverGoToRoom10: false,
    clickParrotLeft: false,
    clickParrotRight: false,
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

  handlePhoneClick = () => {
    this.props.toggleShowPhone(!this.props.showPhone)
  }

  handleParrotLeft = () => {
    this.props.parrotTalkedTo('left')
    this.setState({
      clickParrotLeft: !this.state.clickParrotLeft
    })
  }

  handleParrotRight = () => {
    this.props.parrotTalkedTo('right')
    this.setState({
      clickParrotRight: !this.state.clickParrotRight
    })
  }

  render() {
    console.log(this.props.itemsInPurse)
    return (
      <div className="main_container">
        <img src={room11} alt="Beach Club Cafe"/>

        {this.props.showTape? <Tape/>: null}

          <div id="room11phone" onClick={this.handlePhoneClick} >
          </div> {(this.props.showPhone === true)? <PhoneContainer message="0"/>: null}

          <div id="parrot_left" onClick={this.handleParrotLeft}></div>
          {this.state.clickParrotLeft? <div className="parrot_message">
          squawk squawk take her down to the beach take her down to the beach squawk
          </div> : null }

          <div id="parrot_right" onClick={this.handleParrotRight}></div>
          {this.state.clickParrotRight? <div className="parrot_message">
          squawk ... squawk .. Heather I don't know Heather I don't know squawk ....
          </div> : null }

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

function mapStateToProps(state){
  return {
    showPhone: state.showPhone,
    isPurseOpened: state.isPurseOpened,
    showTape: state.showTape,
    talkedtoParrots: state.talkedtoParrots,
    itemsInPurse: state.itemsInPurse,
  }
}

export default connect( mapStateToProps, actions)(Room11);
