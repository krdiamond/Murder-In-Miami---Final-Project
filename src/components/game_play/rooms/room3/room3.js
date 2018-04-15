import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../../../../App.css';
import './Room3.css';
import room3 from '../../../../images/room3/room3.jpg';
import * as actions from '../../../../actions';


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
        {this.state.showClothesMessage? <div id="clothes_message">
          ... Kelly's Beach Club uniform. I know she was at work earlier that day. She must have come home and changed?
        </div> : null }

        <div id="snake" onClick={this.handleSnake}></div>

        {this.state.talkToSnake && this.isMeanLetterInPurse() ?
          <div className="snake_message">
            ssssssssssss... that note from Jesssssssssssica sssssssssseemsssssss sssssssusssssspicioussssssss maybe ssssssssssssssssshe knowssssssssssssss ssssssssssssssomething
        </div> : null }

        {this.state.talkToSnake && (this.isMeanLetterInPurse() === false) ?
          <div className="snake_message">
            ssssssssssss... i'm just Kelly's pet ssssssssssnake.... when is ssssssssshe coming back sssssssss
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
