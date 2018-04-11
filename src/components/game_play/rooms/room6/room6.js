import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../../../../App.css';
import room6 from '../../../../images/room6/room6.jpg';
import './Room6.css';
import redDot from '../../../../images/room1/red_dot.gif';
import * as actions from '../../../../actions';
import PhoneContainer from '../../phone_container';


class Room6 extends Component {


  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  handlePhoneClick = () => {
    this.props.toggleShowPhone(!this.props.showPhone)
  }


  render() {
    return (

      <div className="main_container">

          <img src={room6} alt="Allison's Kitchen"/>

          <div id="room6phone" onClick={this.handlePhoneClick} >
            <img src={redDot} width="5" alt="blinking light"/>
          </div>

          {(this.props.showPhone === true)?
            <PhoneContainer message="Hi Allison, It's your father. Your mother and I went by your house today and we noticed you weren't home. I thought we had plans to do our usual sunday brunch? Where are you? Call me back when you get this. "/>: null}

          {this.props.findFridgeNote?
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
    findFridgeNote: state.findFridgeNote,
  }
}

export default connect( mapStateToProps, actions)(Room6);
