import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../../../../App.css';
import room4 from '../../../../images/room4/room4.jpg';
import * as actions from '../../../../actions';
import './Room4.css';
import PhoneContainer from '../../phone_container';
import PhoneNumber from './phone_number'
import crumpledNote from '../../../../images/room4/crumpled_note.png';
import squareSpeech from '../../../../images/square_talk_bubble.png';


class Room4 extends Component {

  state = {
    toggleTalkToJessMessage: false,
    toggleJessKneesMessage: false,
    toggleVacuumMessage: false,
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
        toggleVacuumMessage: false,
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
      toggleVacuumMessage: false,
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
        toggleVacuumMessage: false,
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
        toggleVacuumMessage: false,
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
        toggleVacuumMessage: false,
      toggleTalkToJessMessage: false,
      toggleJessKneesMessage: false,
      toggleTooBusyMessage: false,
      toggleStopSnoopingMessage: false,
    })
  }

  handleVacuum = () => {
    this.props.toggleShowPhone(false)
    this.setState({
      toggleVacuumMessage: !this.state.toggleVacuumMessage,
      togglePlantMessage: false,
      toggleTalkToJessMessage: false,
      toggleJessKneesMessage: false,
      toggleTooBusyMessage: false,
      toggleStopSnoopingMessage: false,
    })
  }

  handlePhoneClick = () => {
    this.setState({
      toggleTalkToJessMessage: false,
        toggleVacuumMessage: false,
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
        toggleVacuumMessage: false,
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
        toggleVacuumMessage: false,
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
            <img className="jessicas_thought_bubble" src={squareSpeech} alt="Jessica's Thoughts"/>
            <div id="stop_snooping_text">
               DON'T TOUCH ANY OF MY THINGS!!!!! STOP SNOOPING AROUND!!!!
            </div>
         </div> :null}

        {this.props.showingAllisonsPhoneNumber? <PhoneNumber/> : null }

        <div id="jessica" onClick={this.handleTalkToJess}></div>
        {this.state.toggleTalkToJessMessage?
          <div id="jessicas_message_long">
            <img id="jessicas_thought_bubble_long" src={squareSpeech} alt="Jessica's Thoughts"/>
            <div id="long_text">
               Woah what are you doing here? Whatever, I'm too upset to care. I was with Kelly that night can you believe that?? I was with her!! We smoked cigarettes down by the beach and Allison dropped her off at home. She probably went to sleep when she got home. I don't know. Ugh can you leave please, like I'm really upset.
           </div>
        </div> : null }

        <div id="knees" onClick={this.handleJessKnees}></div>
        {this.state.toggleJessKneesMessage?
          <div className="jessicas_message">
            <img className="jessicas_thought_bubble" src={squareSpeech} alt="Jessica's Thoughts"/>
            <div id="knees_text">
              OMG you are so annoying, my knees are fine. It's just a bruise shaped like tennis racket strings. I get bruises like this all the time. Can you leave now????'
            </div>
          </div> : null }

        <div id="cell_phone" onClick={this.handleCellPhone}></div>
        {this.state.toggleTooBusyMessage?
          <div className="jessicas_message">
            <img className="jessicas_thought_bubble" src={squareSpeech} alt="Jessica's Thoughts"/>
            <div id="cell_text">
              You haven't left yet? I AM TOO BUSY AND UPSET texting everyone I know to talk to you. I need to find out what happened to Kelly!!!
            </div>
          </div> : null }

        <div id="plant" onClick={this.handlePlant}></div>
        {this.state.togglePlantMessage?
          <div className="jessicas_message">
            <img className="jessicas_thought_bubble" src={squareSpeech} alt="Jessica's Thoughts"/>
            <div id="cell_text">
              mumble... ugh I have so many plants to water, I have to go to Allison's later to water hers too. Ugh, it's so annoying...
            </div>
          </div> : null }

          <div id="vacuum" onClick={this.handleVacuum}></div>
          {this.state.toggleVacuumMessage?
            <div className="jessicas_message">
              <img className="jessicas_thought_bubble" src={squareSpeech} alt="Jessica's Thoughts"/>
              <div id="vacuum_text">
                OMG don't touch my vacuum. 
              </div>
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
             <img className="jessicas_thought_bubble" src={squareSpeech} alt="Jessica's Thoughts"/>
             <div id="stairs_text">
                OMG WHAT ARE YOU DOING??? You can't just walk around my house. STOP SNOOPING AROUND. PLEASE LEAVE.
              </div>
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
