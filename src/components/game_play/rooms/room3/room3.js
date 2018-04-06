import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import './Room3.css';
import room3 from '../../../../images/room3/room3.jpg';


class Room3 extends Component {

  state = {
    hoverGoToRoom2: false,
    showClothesMessage: false,
  }

  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  handlehoverEnterGoTo = () => {
    this.setState({
      hoverGoToRoom2: true
    })
  }

  handlehoverLeaveGoTo = () => {
    this.setState({
      hoverGoToRoom2: false
    })
  }

  toggleClothesMessage =() => {
    this.setState({
      showClothesMessage: !this.state.showClothesMessage
    })
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

        <div id="room3_go_to_room_2" className="traverse_rooms"
          onClick={(e) => this.handleGoToRoom(2)}
          onMouseEnter={this.handlehoverEnterGoTo}
          onMouseLeave={this.handlehoverLeaveGoTo}>
            {this.state.hoverGoToRoom2? <div>GO TO KELLY'S BEDROOM</div> : null}
        </div>

      </div>
    );
  }
}

export default connect( null, {goToRoom} )(Room3);
