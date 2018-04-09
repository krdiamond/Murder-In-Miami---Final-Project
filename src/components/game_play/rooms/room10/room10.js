import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../../../../App.css';
import room10 from '../../../../images/room10/room10.jpg';
import './Room10.css';
import redDot from '../../../../images/room1/red_dot.gif';
import * as actions from '../../../../actions';
import PhoneContainer from '../../phone_container';


class Room10 extends Component {

  state = {
    hoverGoToRoom11: false,
    hoverGoToRoom9: false,
    talkedToHeather: false,
  }


  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  handlehoverEnterGoTo = (num) => { //can I do this dynamically somehow??
    if (num === 11){
      this.setState({
        hoverGoToRoom11: true
      })
    }
    else if (num === 9){
      this.setState({
        hoverGoToRoom9: true
      })
    }
  }

  handlehoverLeaveGoTo = (num) => { //can I do this dynamically somehow??
    if (num === 11){
      this.setState({
        hoverGoToRoom11: false
      })
    }
    else if (num === 9){
      this.setState({
        hoverGoToRoom9: false
      })
    }
  }

  handleHeather = () => {
    this.setState({
      talkedToHeather: !this.state.talkedToHeather
    })
    this.talkedToBothParrots()
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

          <div id="room10_go_to_room_11" className="traverse_rooms"
            onClick={(e) => this.handleGoToRoom(11)}
            onMouseEnter={(e) => this.handlehoverEnterGoTo(11)}
            onMouseLeave={(e) => this.handlehoverLeaveGoTo(11)}>
            {this.state.hoverGoToRoom11? <div>GO TO CLUB CAFE</div> : null}
          </div>
          <div id="room10_go_to_room_9" className="traverse_rooms"
            onClick={(e) => this.handleGoToRoom(9)}
            onMouseEnter={(e) => this.handlehoverEnterGoTo(9)}
            onMouseLeave={(e) => this.handlehoverLeaveGoTo(9)}>
            {this.state.hoverGoToRoom9? <div>GO TO CLUB PARKING LOT</div> : null}
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
