import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room8 from '../../../../images/room8/room8.jpg';
import './Room8.css';
import redDot from '../../../../images/room1/red_dot.gif';
import * as actions from '../../../../actions';
import PhoneContainer from '../../phone_container';


class Room8 extends Component {

  state = {
    hoverGoToRoom7: false,
    clickWineGlasses: false,
    clickRacket: false,
    clickCigs: false,
  }

  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  handlehoverEnterGoTo = () => {
    this.setState({
      hoverGoToRoom7: true
    })
  }

  handlehoverLeaveGoTo = () => {
    this.setState({
      hoverGoToRoom7: false
    })
  }

  handleWineGlasses = () => {
    this.setState({
      clickWineGlasses: !this.state.clickWineGlasses
    })
  }

  handleRacket = () => {
    this.setState({
      clickRacket: !this.state.clickRacket
    })
  }

  handleCigs = () => {
    this.setState({
      clickCigs: !this.state.clickCigs
    })
  }

  handlePhoneClick = () => {
    this.props.toggleShowPhone(!this.props.showPhone)
  }




  render() {
    return (
      <div className="main_container">
        <img src={room8} alt="Allison's Bedroom"/>

          <div id="wine_glass_right" onClick={this.handleWineGlasses}></div>
          <div id="wine_glass_left" onClick={this.handleWineGlasses}></div>
          {this.state.clickWineGlasses? <div id="wine_glasses_message">
            Two glasses of wine... I think Allison and Jessica were hanging out here when Allison left Kelly that message the other night. They probably left in a hurry to pick up Kelly.
          </div> : null }

          <div id="room8phone" onClick={this.handlePhoneClick} >
          </div> {(this.props.showPhone === true && this.props.isPurseOpened === false)? <PhoneContainer message="0"/>: null}


          <div id="cigs" onClick={this.handleCigs}></div>
          {this.state.clickCigs? <div id="cigs_message">
            A pack of cigarettes. These girls sure smoke a lot.
          </div> : null }

          <div id="allisons_tennis_racket" onClick={this.handleRacket}></div>
          {this.state.clickRacket? <div id="racket_message">
            Another tennis racket. It seems like Allison and Jessica all play tennis together. This one seems to be broken in and pretty dirty.
          </div> : null }

        <div id="room8_go_to_room_7" className="traverse_rooms"
          onClick={(e) => this.handleGoToRoom(7)}
          onMouseEnter={this.handlehoverEnterGoTo}
          onMouseLeave={this.handlehoverLeaveGoTo}>
          {this.state.hoverGoToRoom7? <div>GO TO ALLISON'S KITCHEN</div> : null}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    showPhone: state.showPhone,
    isPurseOpened: state.isPurseOpened,
  }
}

export default connect( mapStateToProps, actions)(Room8);



  // {this.props.room1listenedToMessage? null : <img src={redDot} width="5" alt="blinking light"/>}
