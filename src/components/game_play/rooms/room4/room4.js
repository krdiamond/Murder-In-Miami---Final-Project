import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../../../../App.css';
import room4 from '../../../../images/room4/room4.jpg';
import * as actions from '../../../../actions';
import './Room4.css';
import PhoneContainer from '../../phone_container';
import PhoneNumber from './phone_number'
import crumpledNote from '../../../../images/room4/crumpled_note.png';


class Room4 extends Component {

  state = {
    toggleTalkToJessMessage: false,
    toggleJessKneesMessage: false,
    toggleTooBusyMessage: false,
    togglePlantMessage: false,
    toggleStopSnoopingMessage: false,
    toggleNoseyMessage: false,
    jessSaidShesTooBusyToTalk: false,
  }

  handleGoToRoom = (roomNum) => {
    if (roomNum === 5 && this.state.jessSaidShesTooBusyToTalk === false){
      this.props.toggleShowPhone(false)
      this.setState({
        toggleNoseyMessage: !this.state.toggleNoseyMessage,
        toggleTalkToJessMessage: false,
        toggleJessKneesMessage: false,
        toggleTooBusyMessage: false,
        togglePlantMessage: false,
        toggleStopSnoopingMessage: false,
      })
    }
    else {
      this.props.goToRoom(roomNum)
    }
  }

  handleTalkToJess = () => {
    this.props.toggleShowPhone(false)
    this.setState({
      toggleTalkToJessMessage: !this.state.toggleTalkToJessMessage,
      toggleJessKneesMessage: false,
      toggleTooBusyMessage: false,
      togglePlantMessage: false,
      toggleNoseyMessage: false,
      toggleStopSnoopingMessage: false,
    })
    this.props.addToPeopleYouHaveTalkedTo("Jessica")
  }

  handleJessKnees = () => {
    this.props.toggleShowPhone(false)
    this.setState({
      toggleJessKneesMessage: !this.state.toggleJessKneesMessage,
      toggleTalkToJessMessage: false,
      toggleTooBusyMessage: false,
      togglePlantMessage: false,
      toggleNoseyMessage: false,
      toggleStopSnoopingMessage: false,
    })
  }

  handleCellPhone = () => {
    this.props.toggleShowPhone(false)
    this.setState({
      jessSaidShesTooBusyToTalk: true,
      toggleTooBusyMessage: !this.state.toggleTooBusyMessage,
      toggleTalkToJessMessage: false,
      toggleJessKneesMessage: false,
      togglePlantMessage: false,
      toggleNoseyMessage: false,
      toggleStopSnoopingMessage: false,
    })
  }

  handlePlant = () => {
    this.props.toggleShowPhone(false)
    this.setState({
      togglePlantMessage: !this.state.togglePlantMessage,
      toggleTalkToJessMessage: false,
      toggleJessKneesMessage: false,
      toggleTooBusyMessage: false,
      toggleStopSnoopingMessage: false,
    })
  }

  handlePhoneClick = () => {
    this.setState({
      toggleTalkToJessMessage: false,
      toggleJessKneesMessage: false,
      toggleTooBusyMessage: false,
      togglePlantMessage: false,
      toggleNoseyMessage: false,
      toggleStopSnoopingMessage: false,
    })
      this.props.toggleIsPurseOpened(false)
      this.props.toggleShowPhone(!this.props.showPhone)
  }

  handleFindCrumpledNote = () => {
    if (this.state.jessSaidShesTooBusyToTalk) {
      this.props.crumpledNoteRoom4Found()
      this.props.showAllisonsPhoneNumber(!this.props.showingAllisonsPhoneNumber)
      this.props.toggleShowPhone(false)
      this.setState({
        toggleTalkToJessMessage: false,
        toggleJessKneesMessage: false,
        toggleTooBusyMessage: false,
        togglePlantMessage: false,
        toggleNoseyMessage: false,
        toggleStopSnoopingMessage: false,
      })
    }
    else {
      this.props.toggleShowPhone(false)
      this.setState({
        toggleStopSnoopingMessage: !this.state.toggleStopSnoopingMessage,
        toggleTalkToJessMessage: false,
        toggleJessKneesMessage: false,
        toggleTooBusyMessage: false,
        togglePlantMessage: false,
        toggleNoseyMessage: false,
      })
    }
  }

  render() {
    return (
      <div className="main_container">

        <img src={room4} alt="Jessica's Study Room"/>

        {this.props.findRoom4CrumpledNote? null :
          <img id="room4crumpled_note" src={crumpledNote} onClick={this.handleFindCrumpledNote} alt="Crumpled Note"/> }

        {this.state.toggleStopSnoopingMessage?
          <div className="jessicas_message">
           DON'T TOUCH ANY OF MY THINGS!!!!! STOP SNOOPING AROUND!!!!
         </div> :null}

        {this.props.showingAllisonsPhoneNumber? <PhoneNumber/> : null }

        <div id="jessica" onClick={this.handleTalkToJess}></div>
        {this.state.toggleTalkToJessMessage? <div className="jessicas_message">
          Woah what are you doing here? How do you even know where I live? Whatever, I'm too upset to care. I was with Kelly that night can you believe that?? I was with her!! We smoked cigarettes down by the beach and Allison dropped her off at home. She probably went to sleep when she got home. I don't know. Ugh can you leave please, like I'm really upset.
        </div> : null }

        <div id="knees" onClick={this.handleJessKnees}></div>
        {this.state.toggleJessKneesMessage?
          <div className="jessicas_message">
            OMG you are so annoying, my knees are fine. It's just a bruise and some cuts I got from playing tennis. Its nothing. I get bruises like this all the time. Can you leave now????'
          </div> : null }

        <div id="cell_phone" onClick={this.handleCellPhone}></div>
        {this.state.toggleTooBusyMessage?
          <div className="jessicas_message">
            You haven't left yet? I AM TOO BUSY AND UPSET texting everyone I know to talk to you. I need to find out what happened to Kelly!!!
          </div> : null }

        <div id="plant" onClick={this.handlePlant}></div>
        {this.state.togglePlantMessage?
          <div className="jessicas_message">
            mumble ... mumble ...  ugh I have so many plants to water, I have to go to Allison's later to water hers too. Ugh, it's so annoying... mumble
          </div> : null }

        <div id="room4phone" onClick={this.handlePhoneClick}></div>
        {(this.props.showPhone === true)? <PhoneContainer message="0"/>: null}

        <div id="room4_go_to_room_1" onClick={(e) => this.handleGoToRoom(1)}>
            <div id="room4_go_to_room_1_text"> GO TO KELLY'S HOUSE</div>
        </div>

        {this.state.jessSaidShesTooBusyToTalk?
        <div id="room4_go_to_room_5" className="traverse_rooms" onClick={(e) => this.handleGoToRoom(5)}>
           <div id="room4_go_to_room_5_text">SNEAK INTO JESSICA'S LIVING ROOM WHILE SHE'S BUSY TEXTING </div>
        </div> :
        <div id="room4_go_to_room_5" className="traverse_rooms" onClick={(e) => this.handleGoToRoom(5)}>
          <div id="room4_go_to_room_5_text" >GO TO JESSICA'S LIVING ROOM</div>
        </div> }

        {this.state.toggleNoseyMessage?
           <div className="jessicas_message">
             OMG WHAT ARE YOU DOING??? You can't just walk around my house. STOP SNOOPING AROUND. PLEASE LEAVE.
          </div> : null}

      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    showPhone: state.showPhone,
    isPurseOpened: state.isPurseOpened,
    findRoom4CrumpledNote: state.findRoom4CrumpledNote,
    showingAllisonsPhoneNumber: state.showingAllisonsPhoneNumber,
  }
}

export default connect( mapStateToProps, actions)(Room4);


          // <div className="jessicas_message"> DON'T TOUCH ANYTHING IN MY HOUSE. STOP SNOOPING AROUND AND LEAVE?</div>

        // {this.props.showingAllisonsPhoneNumber? <PhoneNumber/> : null}
