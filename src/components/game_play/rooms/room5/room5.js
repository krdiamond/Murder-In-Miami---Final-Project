import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../../../../actions';
import '../../../../App.css';
import room5 from '../../../../images/room5/room5.jpg';
import Keys from './keys'
import './Room5.css';
import rightThought from '../../../../images/right_thought_bubble.png';
import thinkBubble from '../../../../images/think_bubble.png';
import michael from '../../../../images/michael.gif';

class Room5 extends Component {

  state = {
    toggleShoesMessage: false,
    toggleVacuumMessage: false,
    toggleTennisRacketMessage: false,
    toggleAshTrayMessage: false,
    toggleMichaelDance: false,
  }


  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  handleMichael = () => {
    this.setState({
      toggleMichaelDance: !this.state.toggleMichaelDance,
      toggleTennisRacketMessage: false,
      toggleVacuumMessage: false,
      toggleShoesMessage: false,
      toggleAshTrayMessage: false,
    })
  }

  handleTennisRacket = () => {
    this.props.foundSuspiciousItem("Tennis Racket")
    this.setState({
      toggleTennisRacketMessage: !this.state.toggleTennisRacketMessage,
      toggleVacuumMessage: false,
      toggleShoesMessage: false,
      toggleAshTrayMessage: false,
      toggleMichaelDance: false,
    })
  }

  handleVacuum = () => {
    this.props.foundSuspiciousItem("Vacuum")
    this.setState({
      toggleTennisRacketMessage: false,
      toggleVacuumMessage: !this.state.toggleVacuumMessage,
      toggleShoesMessage: false,
      toggleAshTrayMessage: false,
      toggleMichaelDance: false,
    })
  }

  handleShoes = () => {
    this.setState({
      toggleShoesMessage: !this.state.toggleShoesMessage,
      toggleVacuumMessage: false,
      toggleTennisRacketMessage: false,
      toggleAshTrayMessage: false,
      toggleMichaelDance: false,
    })
  }

  handleAshtray = () => {
    this.setState({
      toggleAshTrayMessage: !this.state.toggleAshTrayMessage,
      toggleVacuumMessage: false,
      toggleShoesMessage: false,
      toggleTennisRacketMessage: false,
      toggleMichaelDance: false,
    })
  }

  areKeysInPurse = () => {
    const result = this.props.itemsInPurse.find(item => item.title === 'keys')
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

        <img src={room5} alt="Victim's Living Room"/>

        {this.props.showKeys? <Keys/>: null}

        <div id="jess_tennis_racket" onClick={this.handleTennisRacket}></div>
        {this.state.toggleTennisRacketMessage?
          <div id="tennis_message">
            <img id="tennis_message_bubble" src={thinkBubble} alt="Jessica's Thoughts"/>
              <div id="tennis_message_bubble_text">
                 hmmm... this tennis racket is very clean but still looks worn out. Weird. Who cleans their tennis racket this much?
               </div>
        </div> : null }

        <div id="room5_vacuum" onClick={this.handleVacuum}></div>
        {this.state.toggleVacuumMessage?
          <div id="room5_vacuum_message">
            <img id="room5_vacuum_message_bubble" src={rightThought} alt="Jessica's Thoughts"/>
              <div id="room5_vacuum_message_bubble_text">
                 ..hmmm another vacuum. This is getting suspicious.
               </div>
        </div> : null }

        <div id="michael_poster" onClick={this.handleMichael}></div>
        {this.state.toggleMichaelDance? <img id="dancing_michael" src={michael} alt="Dancing Michael"/> : null }

        <div id="jess_shoes" onClick={this.handleShoes}></div>
        {this.state.toggleShoesMessage?
          <div id="shoe_message">
            <img id="shoe_message_bubble" src={rightThought} alt="Jessica's Thoughts"/>
              <div id="shoe_message_bubble_text">
                  these sneakers are covered in sand...
              </div>
        </div> : null }

        <div id="jess_ashtray" onClick={this.handleAshtray}></div>
        {this.state.toggleAshTrayMessage?
          <div id="ashtray_message">
            <img id="ashtray_message_bubble" src={rightThought} alt="Jessica's Thoughts"/>
              <div id="ashtray_message_bubble_text">
                  there are so many cigarettes in this ashtray. Jessica sure does smoke a lot.
              </div>
        </div> : null }

        <div id="room5_go_to_room_4" onClick={(e) => this.handleGoToRoom(4)}>
          <div id="room5_go_to_room_4_text">GO TO JESSICA'S STUDY</div>
        </div>

        {this.areKeysInPurse() ?
        <div id="room5_go_to_room_6" onClick={(e) => this.handleGoToRoom(6)}>
          <div id="room5_go_to_room_6_text">YOU FOUND ALLISON'S HOUSE KEYS! SNEAK OVER TO HER HOUSE</div>
        </div> : null}

      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    showKeys: state.showKeys,
    itemsInPurse: state.itemsInPurse,
  }
}

export default connect( mapStateToProps, actions)(Room5);
