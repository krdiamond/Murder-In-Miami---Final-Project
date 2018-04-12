import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../../actions';
import '../../../../App.css';
import './Room1.css';
import room1 from '../../../../images/room1/room1.jpg';
import redDot from '../../../../images/room1/red_dot.gif';
import crumpledNote from '../../../../images/room1/crumpled_note.png';
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
  }

  toggleKellysUniform =() => {
    console.log("something should happen when this is clicked but idk yet")
  }

  handleFindCrumpledNote = () => {
    this.props.toggleShowPhone(false)
    this.props.crumpledNoteFound()
    this.props.showJessicasNote(true)
    this.props.toggleHeart(false )
  }

  handleHeart = () => {
    this.props.toggleShowPhone(false)
    this.props.toggleHeart(!this.props.readingHeartMessage)
  }

  render() {
    return (
      <div className="main_container">

        <img src={room1} alt="Victim's Living Room"/>

        {this.props.findCrumpledNote? null : <img id="crumpled_note" src={crumpledNote} onClick={this.handleFindCrumpledNote} alt="Crumpled Note"/> }
        {this.props.findJessicasNote? <Note/> : null }

        <div id="heart" onClick={this.handleHeart}> </div>
        {this.props.readingHeartMessage? <div id="heart_award">"AN AWARD OF EXCELLENCE FOR BEING A SMOKE FREE ATHLETE IN 1987" what a strange award... but then why were there cigarettes found at the crime scene?
        </div> : null}

        <div id="room1phone" onClick={this.handlePhoneClick} >
          <img src={redDot} width="5" alt="blinking light"/>
        </div>
        {(this.props.showPhone === true)?
          <PhoneContainer
            message="HEYYYYYYY KEL IT'S ALLISON!!! WANNA COME OUT WITH US TONIGHT?? ME AND JESS ARE HANGING OUT AND I KNOW YOU GUYS AREN'T SO TIGHT RIGHT NOW BUT IT WILL BE SO MUCH FUN MAYBE YOU GUYS CAN MAKE UP??? EITHER WAY, CALL ME BACK AND LET ME KNOW. I CAN PICK YOU UP IN MY CAR!!!!!!  "/>: null}

        <div id="jacket"  onClick={this.toggleKellysUniform}></div>

        <div id= "opening_story_closed" className="story"> </div>
        <div id="show_story" className="story" onClick={this.toggleShowStory}>x</div>
        {this.state.openingStoryDisplayed?
          <div id="opening_story" className="story">
             A girl named Kelly was found brutally murdered by the beach two nights ago. Police found the body covered with fallen branches, rocks, sand and dirt.  They also found numerous cigarette butts all over the area but were too covered with sand to test for DNA. The police have not been able to find any leads and the case is looking bleak. You are super nosy and have decided to snoop around to try and help. If you are able to figure out who the murderer is and what the murder weapon was, please call the police from any phone as soon as possible!!!!
             <div className="story" onClick={this.toggleShowStory}>x</div>
          </div> : null}


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


//actions.
