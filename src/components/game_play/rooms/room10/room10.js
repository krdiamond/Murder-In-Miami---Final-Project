import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../../../../App.css';
import room10 from '../../../../images/room10/room10.jpg';
import './Room10.css';
import * as actions from '../../../../actions';
import squareSpeech from '../../../../images/square_talk_bubble.png';
import water from '../../../../images/room10/water.gif';
import plant from '../../../../images/room10/plant.png';
import board from '../../../../images/room10/diving_board.png';
import edge from '../../../../images/room10/pool_edge.png';


class Room10 extends Component {

  state = {
    talkedToHeather: false,
  }


  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  talkedToBothParrots = () => {
    if (this.props.talkedtoParrots.includes('right') && this.props.talkedtoParrots.includes('left')) {
      return true
    }
    else{
      return false
    }
  }

  handleHeather = () => {
    this.setState({
      talkedToHeather: !this.state.talkedToHeather
    })
    this.props.addToPeopleYouHaveTalkedTo("Heather")
  }

  render() {
    return (
      <div className="main_container">

          <img src={room10} alt="Beach Club Pool"/>

          <img id="water" src={water} alt="Water"/>
          <img id="pool_plant" src={plant} alt="Plant"/>
          <img id="pool_board" src={board} alt="Diving Board"/>
          <img id="edge" src={edge} alt="something"/>

          <div id="heather" onClick={this.handleHeather}></div>

          {this.state.talkedToHeather?
            this.talkedToBothParrots()?
            <div id="heather_message_1">
              <img id="heather_bubble_1" src={squareSpeech} alt="Cigarettes"/>
                <div id="heather_message_text_1">
                 hm.. ugh.. I guess you heard those annoying parrots. They repeat everything they hear. We were just joking around. We would never actually do it. I don't even know kelly. I don't ususally talk to the employees. This club is so annoying, there is always someone listening or watching.
               </div>
            </div>
           :
            <div id="heather_message_3">
              <img id="heather_bubble_3" src={squareSpeech} alt="Cigarettes"/>
                <div id="heather_message_text_3">
                  Are you even a member? Don't bother me while I'm swimming...
                </div>
            </div>
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


// {this.state.talkedToHeather && (this.talkedToBothParrots() === true)?
//   <div className="heather_message"> hm.. ugh.. I guess you heard  those annoying parrots in the other room. Why do they have to repeat everything they hear. They overheard a conversation that I was having with Jessica. It was really not a big deal. What a coincidence something like this would happen after we were just joking around about it... I don't even know kelly. I don't ususally talk to the employees.  </div>
// :null}
//
// {this.state.talkedToHeather && (this.talkedToBothParrots() === false)?
//   <div className="heather_message"> Are you even a member? Don't bother me while I'm swimming... </div>
// :null}
