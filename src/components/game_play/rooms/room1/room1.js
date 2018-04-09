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
import BeachClubAddress from './beach_club_address'

class Room1 extends Component {

  state = {
    hoverGoToRoom2: false,
    hoverGoToRoom4: false,
    openingStoryDisplayed: true,
    readHeart: false,
  }

  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  handlehoverEnterGoTo = (num) => { //can I do this dynamically somehow??
    if (num === 2){
      this.setState({
        hoverGoToRoom2: true
      })
    }
    else if (num === 4){
      this.setState({
        hoverGoToRoom4: true
      })
    }
  }

  handlehoverLeaveGoTo = (num) => { //can I do this dynamically somehow??
    if (num === 2){
      this.setState({
        hoverGoToRoom2: false
      })
    }
    else if (num === 4){
      this.setState({
        hoverGoToRoom4: false
      })
    }
  }

  toggleShowStory = () => {
    this.setState({
      openingStoryDisplayed: !this.state.openingStoryDisplayed
    })
  }

  handlePhoneClick = () => {
    this.props.toggleShowPhone(!this.props.showPhone)
    this.setState({
      showKellysUniformMessage: false
    })
  }

  toggleKellysUniform =() => {
    this.props.isBeachAddressShowing(!this.props.showNoteWithBeachAddress)
  }

  handleFindCrumpledNote = () => {
    this.props.crumpledNoteFound()
    this.props.showJessicasNote(!this.props.findJessicasNote)
  }

  handleHeart = () => {
    this.setState({
      readHeart: !this.state.readHeart
    })
  }



  render() {
    return (
      <div className="main_container">

        <img src={room1} alt="Victim's Living Room"/>

        {this.props.findCrumpledNote? null : <img id="crumpled_note" src={crumpledNote} onClick={this.handleFindCrumpledNote} alt="Crumpled Note"/> }
        {this.props.findJessicasNote? <Note/> : null }

        <div id="heart" onClick={this.handleHeart}> </div>
        {this.state.readHeart? <div id="heart_award">"AN AWARD OF EXCELLENCE FOR BEING A SMOKE FREE ATHLETE IN 1987" what a strange award... but then why were there cigarettes found at the crime scene?
        </div> : null}

        <div id="room1phone" onClick={this.handlePhoneClick} >
          {this.props.room1listenedToMessage? null : <img src={redDot} width="5" alt="blinking light"/>}
        </div>
        {(this.props.showPhone === true && this.props.isPurseOpened === false)?
          <PhoneContainer
            message="HEYYYYYYY KEL IT'S ALLISON!!! WANNA COME OUT WITH US TONIGHT?? ME AND JESS ARE HANGING OUT AND I KNOW YOU GUYS AREN'T SO TIGHT RIGHT NOW BUT IT WILL BE SO MUCH FUN MAYBE YOU GUYS CAN MAKE UP??? EITHER WAY, CALL ME BACK AND LET ME KNOW. I CAN PICK YOU UP IN MY CAR!!!!!!  "/>: null}

        <div id="jacket"  onClick={this.toggleKellysUniform}></div>
        {this.props.showNoteWithBeachAddress? <BeachClubAddress/>: null }


        <div id="room1_go_to_room_2" className="traverse_rooms"
          onClick={(e) => this.handleGoToRoom(2)}
          onMouseEnter={(e) => this.handlehoverEnterGoTo(2)}
          onMouseLeave={(e) => this.handlehoverLeaveGoTo(2)}>
            {this.state.hoverGoToRoom2? <div>GO TO KELLY''S BEDROOM</div> : null}
        </div>

        <div id="room1_go_to_room_4" className="traverse_rooms"
          onClick={(e) => this.handleGoToRoom(4)}
          onMouseEnter={(e) => this.handlehoverEnterGoTo(4)}
          onMouseLeave={(e) => this.handlehoverLeaveGoTo(4)}>
          {this.state.hoverGoToRoom4? <div>GO TO JESSICA''S HOUSE</div> : null}
        </div>

        <div id= "opening_story_closed" className="story"> </div>
        <div id="show_story" className="story" onClick={this.toggleShowStory}>x</div>
        {this.state.openingStoryDisplayed?
          <div id="opening_story" className="story">
             A girl named Kelly was found brutally murdered by the beach two nights ago. Police found the body covered with fallen branches, rocks, sand and dirt.  They also found numerous cigarette butts all over the area but were too covered with sand to test for DNA. The police have not been able to find any leads and the case is looking bleak. You are super nosy and have decided to snoop around to try and help. If you are able to figure out who the murderer is and what the murder weapon was, please call 911 from any phone as soon as possible!!!!
             <div className="story" onClick={this.toggleShowStory}>x</div>
          </div> : null}

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
  }
}

export default connect( mapStateToProps, actions)(Room1);


//actions.
