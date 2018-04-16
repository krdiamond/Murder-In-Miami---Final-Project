import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room9 from '../../../../images/room9/room9.jpg';
import './Room9.css';
import squareSpeech from '../../../../images/square_talk_bubble.png';


class Room9 extends Component {

  state = {
    toggleJessMessage: false,
    canGoIntoClub: false,
  }

  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  handleJess = () => {
    this.setState({
      toggleJessMessage: !this.state.toggleJessMessage, // move message over so it's not in the way of the purse
      canGoIntoClub: true
    })
  }

  render() {
    return (
      <div className="main_container">

          <img src={room9} alt="Beach Club Parking Lot"/>

          <div id="beach_jess" onClick={this.handleJess}></div>
          {this.state.toggleJessMessage?
             <div id="beach_jess_message">
               <img id="beach_jess_bubble" src={squareSpeech} alt="Cigarettes"/>
                 <div id="beach_jess_message_text">
                   OMG you are here too? Why are you following me around. You are so weird. I am finishing this cigarette and then I'm going into work and I don't want to talk to you anymore. Ugh don't go into the club and start bothering the members. You are going to get kicked out.
                 </div>
          </div> : null }

          {this.state.canGoIntoClub?
            <div id="room9_go_to_room_10" onClick={(e) => this.handleGoToRoom(10)}>
              <div id="room9_go_to_room_10_text">GO INSIDE BEACH CLUB</div>
            </div> : null}

          <div id="room9_go_to_room_1" onClick={(e) => this.handleGoToRoom(1)}>
            <div id="room9_go_to_room_1_text">GO TO KELLY'S HOUSE</div>
          </div>

          <div id="room9_go_to_room_4" onClick={(e) => this.handleGoToRoom(4)}>
            <div id="room9_go_to_room_4_text">GO TO JESSICA'S HOUSE</div>
          </div>

          <div id="room9_go_to_room_6" onClick={(e) => this.handleGoToRoom(6)}>
            <div id="room9_go_to_room_6_text">GO TO ALLISON'S HOUSE</div>
          </div>

      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room9);
