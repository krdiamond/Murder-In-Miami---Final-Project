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
    hoverGoToRoom5: false,
    hoverGoToRoom1: false,
    talkToJessica: false,
    jessKnees: false,
    jessTooBusy: false,
    tooBusyMessage: false,
    youAreBeingNosey: false,
    plantclicked: false,
  }

  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  handlehoverEnterGoTo = (num) => { //can I do this dynamically somehow??
    if (num === 1){
      this.setState({
        hoverGoToRoom1: true
      })
    }
    else if (num === 5){
      this.setState({
        hoverGoToRoom5: true
      })
    }
  }

  handlehoverLeaveGoTo = (num) => { //can I do this dynamically somehow??
    if (num === 1){
      this.setState({
        hoverGoToRoom1: false
      })
    }
    else if (num === 5){
      this.setState({
        hoverGoToRoom5: false
      })
    }
  }

  handleTalkToJess = () => {
    this.setState({
      talkToJessica: !this.state.talkToJessica
    })
    this.props.addToPeopleYouHaveTalkedTo("Jessica")
  }

  handleJessKnees = () => {
    this.setState({
      jessKnees: !this.state.jessKnees
    })
  }

  handleCellPhone = () => {
    this.setState({
      jessTooBusy: true,
      tooBusyMessage: !this.state.tooBusyMessage,
    })
  }

  stopBeingNosey = () => {
    this.setState({
      youAreBeingNosey: !this.state.youAreBeingNosey
    })
  }

  handlePlant = () => {
    this.setState({
      plantclicked: !this.state.plantclicked
    })
  }

  handlePhoneClick = () => {
    this.props.toggleShowPhone(!this.props.showPhone)
  }

  handleFindCrumpledNote = () => {
    this.props.crumpledNoteRoom4Found()
    this.props.showAllisonsPhoneNumber(!this.props.showingAllisonsPhoneNumber)
  }

  render() {
    return (
      <div className="main_container">

        <img src={room4} alt="Victim's Living Room"/>


        {this.props.findRoom4CrumpledNote? null : <img id="room4crumpled_note" src={crumpledNote} onClick={this.handleFindCrumpledNote} alt="Crumpled Note"/> }
        {this.props.showingAllisonsPhoneNumber? <PhoneNumber/> : null }

        <div id="jessica" onClick={this.handleTalkToJess}></div>
        {this.state.talkToJessica? <div className="jessicas_message">
          Woah what are you doing here? How do you even know where I live? Whatever, I'm too upset to care. I was with Kelly that night can you believe that?? I was with her!! We smoked cigarettes down by the beach and Allison dropped her off at home. She probably went to sleep when she got home. I don't know. Ugh can you leave please, like I'm really upset.
        </div> : null }

        <div id="knees" onClick={this.handleJessKnees}></div>
        {this.state.jessKnees? <div className="jessicas_message">
          OMG you are so annoying, my knees are fine. It's just a bruise and some cuts I got from playing tennis. Its nothing. I get bruises like this all the time. Can you leave now????'
        </div> : null }

        <div id="cell_phone" onClick={this.handleCellPhone}></div>
        {this.state.tooBusyMessage? <div className="jessicas_message">
          You haven't left yet? I AM TOO BUSY AND UPSET texting everyone I know to talk to you. I need to find out what happened to Kelly!!!
        </div> : null }

        {this.state.jessTooBusy?
          <div id="room4_go_to_room_5" className="traverse_rooms"
            onClick={(e) => this.handleGoToRoom(5)}
            onMouseEnter={(e) => this.handlehoverEnterGoTo(5)}
            onMouseLeave={(e) => this.handlehoverLeaveGoTo(5)}>
            {this.state.hoverGoToRoom5? <div>SNEAK INTO JESSICA'S LIVING ROOM WHILE SHE'S BUSY TEXTING ON HER PHONE</div> : null}
          </div> :
          <div id="room4_go_to_room_5" className="traverse_rooms"
            onClick={this.stopBeingNosey}
            onMouseEnter={(e) => this.handlehoverEnterGoTo(5)}
            onMouseLeave={(e) => this.handlehoverLeaveGoTo(5)}>
            {this.state.hoverGoToRoom5? <div>GO TO JESSICA'S LIVING ROOM</div> : null}
          </div> }
          {this.state.youAreBeingNosey? <div className="jessicas_message">
            OMG WHAT ARE YOU DOING??? You can't just walk around my house. STOP SNOOPING AROUND. PLEASE LEAVE.
            </div> : null }

            <div id="plant" onClick={this.handlePlant}></div>
            {this.state.plantclicked? <div className="jessicas_message">
            mumble ... mumble ...  ugh I have so many plants to water, I have to go to Allison's later to water hers too. Ugh, it's so annoying... mumble
            </div> : null }

            <div id="room4phone" onClick={this.handlePhoneClick}></div>
            {(this.props.showPhone === true)? <PhoneContainer message="0"/>: null}

          <div id="room4_go_to_room_1" className="traverse_rooms"
            onClick={(e) => this.handleGoToRoom(1)}
            onMouseEnter={(e) => this.handlehoverEnterGoTo(1)}
            onMouseLeave={(e) => this.handlehoverLeaveGoTo(1)}>
            {this.state.hoverGoToRoom1? <div> GO BACK TO KELLY'S HOUSE</div> : null}
          </div>
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
