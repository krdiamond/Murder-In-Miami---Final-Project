import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../../../../App.css';
import room7 from '../../../../images/room7/room7.jpg';
import './Room7.css';
import redDot from '../../../../images/room1/red_dot.gif';
import * as actions from '../../../../actions';
import PhoneContainer from '../../phone_container';
import fridgeNote from '../../../../images/room7/fridge_note.png';
import FridgeNote from './fridge_note'


class Room7 extends Component {

  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  handlePhoneClick = () => {
    this.props.toggleShowPhone(!this.props.showPhone)
  }

  handleFindFridgeNote = () => {
    this.props.showBeachAddress(!this.props.showNoteBeachAddress)
    this.props.foundFridgeNote()
  }



  render() {
    return (
      <div className="main_container">

          <img src={room7} alt="Allison's Kitchen"/>

          {this.props.findFridgeNote? null : <img id="fridge_note" src={fridgeNote} onClick={this.handleFindFridgeNote} alt="Fridge Note"/> }
          {this.props.showNoteBeachAddress? <FridgeNote/> : null }

          <div id="room7phone" onClick={this.handlePhoneClick} >
              <img src={redDot} width="5" alt="blinking light"/>
          </div>

          {this.props.showPhone ?
            <PhoneContainer message= "girl when are you coming back from Mexico? I am so sick of watering your plants and it's only been two days. You have so many plants ugh."/>: null}

          <div id="room7_go_to_room_6" onClick={(e) => this.handleGoToRoom(6)}>
            <div id="room7_go_to_room_6_text">GO TO ALLISON'S LIVING ROOM</div>
          </div>

          <div id="room7_go_to_room_8" onClick={(e) => this.handleGoToRoom(8)}>
            <div id="room7_go_to_room_8_text">GO TO ALLISON'S BEDROOM</div>
         </div>

      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    showPhone: state.showPhone,
    isPurseOpened: state.isPurseOpened,
    findFridgeNote :state.findFridgeNote,
    showNoteBeachAddress: state.showNoteBeachAddress,
  }
}

export default connect( mapStateToProps, actions)(Room7);
