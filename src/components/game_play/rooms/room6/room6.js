import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../../../../App.css';
import room6 from '../../../../images/room6/room6.jpg';
import './Room6.css';
import redDot from '../../../../images/room1/red_dot.gif';
import * as actions from '../../../../actions';
import PhoneContainer from '../../phone_container';
import rightThought from '../../../../images/right_thought_bubble.png';
import michael from '../../../../images/michael.gif';


class Room6 extends Component {

  state = {
    toggleBarBellsMessage: false,
    toggleMichaelDance: false,
  }

  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  handlePhoneClick = () => {
    this.props.toggleShowPhone(!this.props.showPhone)
    this.props.toggleIsPurseOpened(false)
    this.setState({
      toggleBarBellsMessage: false,
      toggleMichaelDance: false,
    })
  }

  isBeachClubAddressInPurse = () => {
    const result = this.props.itemsInPurse.find(item => item.title === 'Beach Club Address')
    if (result === undefined){
      return false
    }
    else {
      return true
    }
  }

  handleBarBells = () => {
    this.props.foundSuspiciousItem("Bar Bells")
    this.props.toggleShowPhone(false)
    this.props.toggleIsPurseOpened(false)
    this.setState({
      toggleBarBellsMessage: !this.state.toggleBarBellsMessage,
      toggleMichaelDance: false,
    })
  }

  handleMichael = () => {
    this.setState({
      toggleMichaelDance: !this.state.toggleMichaelDance,
      toggleBarBellsMessage: false,
    })
  }


  render() {
    return (

      <div className="main_container">

          <img src={room6} alt="Allison's Kitchen"/>

          <div id="room6phone" onClick={this.handlePhoneClick} >
            <img src={redDot} width="5" alt="blinking light"/>
          </div>

          <div id="bar_bells" onClick={this.handleBarBells}></div>
          {this.state.toggleBarBellsMessage?
            <div id="bar_bells_message">
              <img id="bar_bells_message_bubble" src={rightThought} alt="Jessica's Thoughts"/>
                <div id="bar_bells_message_bubble_text">
                  why would Allison leave these out?
                 </div>
          </div> : null }

          <div id="room6_michael_poster" onClick={this.handleMichael}></div>
          {this.state.toggleMichaelDance? <img id="room6_dancing_michael" src={michael} alt="Dancing Michael"/> : null }

          {(this.props.showPhone === true)?
            <PhoneContainer message="Hi Allison, It's your father. Your mother and I went by your house today and we noticed you weren't home. I thought we had plans to do our usual sunday brunch? Where are you? Call me back when you get this. "/>: null}

          {this.isBeachClubAddressInPurse()?
          <div id="room6_go_to_room_9" className="traverse_rooms" onClick={(e) => this.handleGoToRoom(9)}>
            <div id="room6_go_to_room_9_text">YOU FOUND THE ADDRESS TO THE BEACH CLUB! HEAD OVER THERE</div>
          </div> :null}

          <div id="room6_go_to_room_4" className="traverse_rooms" onClick={(e) => this.handleGoToRoom(4)}>
            <div id="room6_go_to_room_4_text">GO TO JESSICA'S HOUSE</div>
          </div>

          <div id="room6_go_to_room_7" className="traverse_rooms" onClick={(e) => this.handleGoToRoom(7)}>
            <div id="room6_go_to_room_7_text">GO TO ALLISON'S KITCHEN</div>
          </div>

      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    showPhone: state.showPhone,
    itemsInPurse: state.itemsInPurse
  }
}

export default connect( mapStateToProps, actions)(Room6);
