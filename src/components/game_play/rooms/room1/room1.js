import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../../actions';
import '../../../../App.css';
import './Room1.css';
import room1 from '../../../../images/room1/room1.jpg';
import redDot from '../../../../images/room1/red_dot.gif';
import crumpledNote from '../../../../images/room1/crumpled_note.png';
import rightThought from '../../../../images/right_thought_bubble.png';
import PhoneContainer from '../../phone_container';
import Note from './note'

class Room1 extends Component {

  state = {
    openingStoryDisplayed: true,
  }

  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  toggleShowStory = () => {
    this.setState({
      openingStoryDisplayed: !this.state.openingStoryDisplayed
    })
  }

  handlePhoneClick = () => {
    this.props.toggleShowPhone(!this.props.showPhone)
    this.props.toggleIsPurseOpened(false)
    this.props.toggleHeart(false)
    this.setState({
      openingStoryDisplayed: false,
    })
  }

  toggleKellysUniform =() => {
    console.log("something should happen when this is clicked but idk yet")
  }

  handleFindCrumpledNote = () => {
    this.props.toggleShowPhone(false)
    this.props.crumpledNoteFound()
    this.props.showJessicasNote(true)
    this.props.toggleHeart(false )
    this.setState({
      openingStoryDisplayed: false,
    })
  }

  handleHeart = () => {
    this.props.toggleShowPhone(false)
    this.props.toggleHeart(!this.props.readingHeartMessage)
    this.setState({
      openingStoryDisplayed: false,
    })
  }

  render() {
    return (
      <div className="main_container">

        <img src={room1} alt="Victim's Living Room"/>

        {this.props.findCrumpledNote? null : <img id="crumpled_note" src={crumpledNote} onClick={this.handleFindCrumpledNote} alt="Crumpled Note"/> }
        {this.props.findJessicasNote? <Note/> : null }

        <div id="heart" onClick={this.handleHeart}> </div>
        {this.props.readingHeartMessage?
          <div id="heart_message">
            <img className="thought_bubble" src={rightThought} alt="Heart Award Thoughts"/>
            <div id="heart_message_text">
              "AN AWARD OF EXCELLENCE FOR BEING A SMOKE FREE ATHLETE"... hmm... what a strange award. Why were there cigarettes found at the crime scene?
            </div>
        </div> : null}

        <div id="room1phone" onClick={this.handlePhoneClick} >
          <img src={redDot} width="5" alt="blinking light"/>
        </div>
        {(this.props.showPhone === true)?
          <PhoneContainer
            message="HEYYYYYYY KEL IT'S ALLISON!!! WANNA COME OUT WITH US TONIGHT?? ME AND JESS ARE HANGING OUT AND I KNOW YOU GUYS AREN'T SO TIGHT RIGHT NOW BUT IT WILL BE SO MUCH FUN MAYBE YOU GUYS CAN MAKE UP??? EITHER WAY, CALL ME BACK AND LET ME KNOW. I CAN PICK YOU UP IN MY CAR!!!!!!  "/>: null}

        <div id="room1_go_to_room_2" onClick={(e) => this.handleGoToRoom(2)}>
            <div id="room1_go_to_room_2_text">GO TO KELLY'S BEDROOM</div>
        </div>

        {this.props.gotClueFromSnake?
        <div id="room1_go_to_room_4" onClick={(e) => this.handleGoToRoom(4)}>
          <div id="room1_go_to_room_4_text"> VISIT JESSICA </div>
        </div> :null}

      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    showPhone: state.showPhone,
    isPurseOpened: state.isPurseOpened,
    itemsInPurse: state.itemsInPurse,
    findCrumpledNote: state.findCrumpledNote,
    findJessicasNote: state.findJessicasNote,
    showNoteWithBeachAddress: state.showNoteWithBeachAddress,
    gotClueFromSnake: state.gotClueFromSnake,
    readingHeartMessage: state.readingHeartMessage
  }
}

export default connect( mapStateToProps, actions)(Room1);

        // <div id="jacket"  onClick={this.toggleKellysUniform}></div>
