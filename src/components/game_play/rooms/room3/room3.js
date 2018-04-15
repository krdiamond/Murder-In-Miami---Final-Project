import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../../../../App.css';
import './Room3.css';
import room3 from '../../../../images/room3/room3.jpg';
import * as actions from '../../../../actions';
import rightThought from '../../../../images/right_thought_bubble.png';
import leftSpeech from '../../../../images/left_speech_bubble.png';

class Room3 extends Component {

  state = {
    showClothesMessage: false,
    talkToSnake: false,
  }

  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  toggleClothesMessage =() => {
    this.setState({
      showClothesMessage: !this.state.showClothesMessage,
      talkToSnake: false,
    })
  }

  handleSnake = () => {
    if (this.isMeanLetterInPurse() === true){
      this.props.receivedClueFromSnake()
      this.setState({
        talkToSnake: !this.state.talkToSnake,
        showClothesMessage: false,
      })
      this.props.addToPeopleYouHaveTalkedTo("Pet Snake")
    }
    else {
      this.setState({
        talkToSnake: !this.state.talkToSnake,
        showClothesMessage: false,
      })
      this.props.addToPeopleYouHaveTalkedTo("Pet Snake")
    }
  }

  isMeanLetterInPurse = () => {
    const result = this.props.itemsInPurse.find(item => item.title ===  'mean note')
    if (result === undefined){
      return false
    }
    else {
      return true
    }
  }


  render() {
    return (
      <div className="main_container">

        <img src={room3} alt="Victim's Living Room"/>

        <div id="clothes" onClick={this.toggleClothesMessage}></div>
        <div id="shoes" onClick={this.toggleClothesMessage}></div>
        {this.state.showClothesMessage?
          <div id="clothes_message">
            <img id="clothes_thought_bubble" src={rightThought} alt="Tennis Racket Thoughts"/>
              <div id="clothes_message_text">
                 ...This looks like Kelly's Beach Club uniform. She must have come home and changed before going out?
             </div>
        </div> : null }

        <div id="snake" onClick={this.handleSnake}></div>
        {this.state.talkToSnake && this.isMeanLetterInPurse() ?
          <div id="snake_message">
            <img id="snake_thought_bubble" src={leftSpeech} alt="Tennis Racket Thoughts"/>
              <div id="snake_message_text_1">
                 that note from Jesssssssssssica sssssssssseemsssssss sssssssusssssspicioussssssss maybe ssssssssssssssssshe knowssssssssssssss ssssssssssssssomething
             </div>
        </div> : null }

        {this.state.talkToSnake && (this.isMeanLetterInPurse() === false) ?
          <div id="snake_message">
            <img id="snake_thought_bubble" src={leftSpeech} alt="Tennis Racket Thoughts"/>
              <div id="snake_message_text_2">
                 I'm jussssssssssssssst Kelly'sssssssssssss pet ssssssssssssssssnake.... When is ssssssssssssssssssshe coming home?
             </div>
        </div> : null }

        <div id="room3_go_to_room_2" onClick={(e) => this.handleGoToRoom(2)}>
            <div id="room3_go_to_room_2_text">GO TO KELLY'S BEDROOM</div>
        </div>

      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    findJessicasNote: state.findJessicasNote,
    itemsInPurse: state.itemsInPurse,
  }
}

export default connect( mapStateToProps, actions)(Room3);
