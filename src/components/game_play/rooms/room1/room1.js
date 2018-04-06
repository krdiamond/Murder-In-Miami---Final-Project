import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import './Room1.css';
import room1 from '../../../../images/room1/room1.jpg';

class Room1 extends Component {

  state = {
    hoverGoToRoom2: false,
    hoverGoToRoom4: false,
    openingStoryDisplayed: true,
  }

  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  handlehoverEnterGoTo = (num) => { //can I do this dynamically somehow??
    if (num === 2){
      this.setState({
        hoverGoToRoom2: true
      })
    }
    else if (num === 4){
      this.setState({
        hoverGoToRoom4: true
      })
    }
  }

  handlehoverLeaveGoTo = (num) => { //can I do this dynamically somehow??
    if (num === 2){
      this.setState({
        hoverGoToRoom2: false
      })
    }
    else if (num === 4){
      this.setState({
        hoverGoToRoom4: false
      })
    }
  }

  toggleShowStory = () => {
    this.setState({
      openingStoryDisplayed: !this.state.openingStoryDisplayed
    })
  }


  render() {
    return (
      <div className="main_container">
        <img src={room1} alt="Victim's Living Room"/>
        <div id="room1_go_to_room_2" className="traverse_rooms"
          onClick={(e) => this.handleGoToRoom(2)}
          onMouseEnter={(e) => this.handlehoverEnterGoTo(2)}
          onMouseLeave={(e) => this.handlehoverLeaveGoTo(2)}>
            {this.state.hoverGoToRoom2? <div>GO TO KELLY'S BEDROOM</div> : null}
        </div>
        <div id="room1_go_to_room_4" className="traverse_rooms"
          onClick={(e) => this.handleGoToRoom(4)}
          onMouseEnter={(e) => this.handlehoverEnterGoTo(4)}
          onMouseLeave={(e) => this.handlehoverLeaveGoTo(4)}>
          {this.state.hoverGoToRoom4? <div>GO TO JESSICA'S HOUSE</div> : null}
        </div>
        <div id= "opening_story_closed"> </div>
        <div id="show_story" onClick={this.toggleShowStory}>x</div>
        {this.state.openingStoryDisplayed?
          <div id="opening_story">
             A girl named Kelly was found brutally murdered down by the beach two nights ago. Police found the body covered with fallen branches, rocks, sand and dirt.  The police also found numerous cigarette butts all over the area but were too covered with sand to test for DNA. The police have not been able to find any leads and the case is looking bleak. You are super nosy and have decided to snoop around to try and help. If you are able to figure out who the murderer is, please call 911 from any phone as soon as possible!!!!
             <div id="hide_story" onClick={this.toggleShowStory}>x</div>
          </div> : null}
      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room1);
