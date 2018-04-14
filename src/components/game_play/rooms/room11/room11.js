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
    toggleParrotMessageLeft: false,
    toggleParrotMessageRight: false,
  }

  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  handlePhoneClick = () => {
    this.props.toggleShowPhone(!this.props.showPhone)
    this.props.toggleIsPurseOpened(false)
    this.setState({
      toggleParrotMessageLeft: false,
      toggleParrotMessageRight: false,
    })
  }

  handleParrotLeft = () => {
    this.props.toggleShowPhone(false)
    this.props.parrotTalkedTo('left')
    this.setState({
      toggleParrotMessageLeft: !this.state.toggleParrotMessageLeft,
      toggleParrotMessageRight: false,
    })
  }

  handleParrotRight = () => {
    this.props.toggleShowPhone(false)
    this.props.parrotTalkedTo('right')
    this.setState({
      toggleParrotMessageRight: !this.state.toggleParrotMessageRight,
      toggleParrotMessageLeft: false,
    })
  }

  render() {
    return (
      <div className="main_container">

        <img src={room11} alt="Beach Club Cafe"/>

        {this.props.showTape? <Tape/>: null}

          <div id="room11phone" onClick={this.handlePhoneClick} >
          </div> {this.props.showPhone? <PhoneContainer message="0"/>: null}

          <div id="parrot_left" onClick={this.handleParrotLeft}></div>
          {this.state.toggleParrotMessageLeft? <div className="parrot_message">
          squawk squawk take her down to the beach take her down to the beach squawk
          </div> : null }

          <div id="parrot_right" onClick={this.handleParrotRight}></div>
          {this.state.toggleParrotMessageRight? <div className="parrot_message">
          squawk ... squawk .. Heather I don't know Heather I don't know squawk ....
          </div> : null }

          <div id="room11_go_to_room_10" onClick={(e) => this.handleGoToRoom(10)}>
             <div id="room11_go_to_room_10_text">GO TO THE POOL</div>
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
