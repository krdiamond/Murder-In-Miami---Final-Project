import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../../../../App.css';
import room10 from '../../../../images/room10/room10.jpg';
import './Room10.css';
import * as actions from '../../../../actions';


class Room10 extends Component {

  state = {
    talkedToHeather: false,
  }


  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  handleHeather = () => {
    this.setState({
      talkedToHeather: !this.state.talkedToHeather
    })
    this.talkedToBothParrots()
    this.props.addToPeopleYouHaveTalkedTo("Heather")
  }

  talkedToBothParrots = () => {
    if (this.props.talkedtoParrots.includes('right') && this.props.talkedtoParrots.includes('left')) {
      return true
    }
    else{
      return false
    }

  }


  render() {
    return (
      <div className="main_container">

          <img src={room10} alt="Beach Club Pool"/>

          <div id="heather" onClick={this.handleHeather}></div>

          {this.state.talkedToHeather && (this.talkedToBothParrots() === true)?
            <div className="heather_message"> hm.. ugh.. I guess you heard  those annoying parrots in the other room. Why do they have to repeat everything they hear. They overheard a conversation that I was having with Jessica. It was really not a big deal. What a coincidence something like this would happen after we were just joking around about it... I don't even know kelly. I don't ususally talk to the employees.  </div>
          :null}

          {this.state.talkedToHeather && (this.talkedToBothParrots() === false)?
            <div className="heather_message"> Are you even a member? Don't bother me while I'm swimming... </div>
          :null}

          <div id="room10_go_to_room_11" onClick={(e) => this.handleGoToRoom(11)}>
            <div id="room10_go_to_room_11_text">GO TO THE BEACH CLUB'S CAFE</div>
          </div>

          <div id="room10_go_to_room_9" onClick={(e) => this.handleGoToRoom(9)}>
            <div id="room10_go_to_room_9_text">GO TO BEACH CLUB PARKING LOT</div>
          </div>

      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    showPhone: state.showPhone,
    isPurseOpened: state.isPurseOpened,
    talkedtoParrots: state.talkedtoParrots
  }
}

export default connect( mapStateToProps, actions)(Room10);
