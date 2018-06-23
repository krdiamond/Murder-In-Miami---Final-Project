import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../../../../App.css';
import room8 from '../../../../images/room8/room8.jpg';
import beach from '../../../../images/room8/beach.jpg';
import './Room8.css';
import * as actions from '../../../../actions';
import PhoneContainer from '../../phone_container';
import rightThought from '../../../../images/right_thought_bubble.png';
import leftThought from '../../../../images/left_thought_bubble.png';
import longSpeech from '../../../../images/long_speech_bubble.png';
import staticIMG from '../../../../images/room8/static.gif';



class Room8 extends Component {

  state = {
    toggleWineGlassMessage: false,
    toggleTennisRacketMessage: false,
    toggleCigMessage: false,
    toggleBeachSceneMessage: true,
    toggleTV:false,
    message: 0,
  }


  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  handleWineGlasses = () => {
    this.props.toggleShowPhone(false)
    this.setState({
      toggleWineGlassMessage: !this.state.toggleWineGlassMessage,
      toggleTennisRacketMessage: false,
      toggleCigMessage: false,
      toggleBeachSceneMessage: false,
    })
  }

  handleRacket = () => {
    this.props.toggleShowPhone(false)
    this.setState({
      toggleTennisRacketMessage: !this.state.toggleTennisRacketMessage,
      toggleWineGlassMessage: false,
      toggleCigMessage: false,
      toggleBeachSceneMessage: false,
    })
  }

  handleTV = () => {
    this.props.toggleShowPhone(false)
    this.setState({
      toggleTennisRacketMessage: false,
      toggleWineGlassMessage: false,
      toggleCigMessage: false,
      toggleBeachSceneMessage: !this.state.toggleBeachSceneMessage,
      toggleTV: !this.state.toggleTV,
      message: 0
    })
  }

  handleCigs = () => {
    this.props.foundSuspiciousItem("Cigarettes")
    this.props.toggleShowPhone(false)
    this.setState({
      toggleCigMessage: !this.state.toggleCigMessage,
      toggleWineGlassMessage: false,
      toggleTennisRacketMessage: false,
      toggleBeachSceneMessage: false,
    })
  }

  handlePhoneClick = () => {
    this.props.toggleShowPhone(!this.props.showPhone)
    this.props.toggleIsPurseOpened(false)
    this.setState({
      toggleCigMessage: false,
      toggleWineGlassMessage: false,
      toggleTennisRacketMessage: false,
      toggleBeachSceneMessage: false,
    })
  }

  handleBeachSceneClick =() =>{
    this.setState({
      toggleBeachSceneMessage: !this.state.toggleBeachSceneMessage,
      toggleWineGlassMessage: false,
      toggleTennisRacketMessage: false,
      toggleCigMessage: false,
      message: 0
    })
  }

  conversation = [
    "Heather: She is so gross how could she do that.",
    "Jessica: I know I hate her so much.",
    "Heather: You should take her out to the beach at night and like totally bash her head in.",
    "Jessica: For sure.",
    "Heather: Totally",
    "Jessica: It would be so easy. No one would think it was me. Everyone thinks we're best friends.",
    "Heather: No one would even miss her.",
    "Jessica: Well, I guess I would beacuse like she does most of the work around here anyways. I just sit around and hang out with you.... I should probably be working right now...",
    "Heather: Yea what are you even doing talking to me, go get me a drink hahahaha!!",
  ]

  handleNextMessage =() => {
    if (this.state.message == 8) {
      this.setState({
        message: 0
      })
    }
    else{
      this.setState({
        message: this.state.message + 1
      })
    }
  }


  render() {
    return (
      <div className="main_container">
        <img src={room8} alt="Allison's Bedroom"/>

          {this.props.playingTape?
              <img src={beach} id="beach_scene" onClick={this.handleBeachSceneClick} alt="Beach Scene"/> : null}

          {this.props.playingTape && this.state.toggleBeachSceneMessage?
            <div id="beach_message">
                <div className="beach_message_bubble_text">{this.conversation[this.state.message]}</div>
                {this.state.message === 8? null : <div className="next" onClick={this.handleNextMessage}>NEXT</div>}
                <img className="beach_message_bubble" src={longSpeech} alt="Beach Convo"/>
            </div> : null}


          <div id="wine_glass_left" onClick={this.handleWineGlasses}></div>
          {this.state.toggleWineGlassMessage?
            <div id="wine_glasses_message">
              <img id="wine_glasses_bubble" src={rightThought} alt="Wine Glasses"/>
                <div id="wine_glasses_message_text">
                  Two glasses of wine... Allison and Jessica were hanging out here before they picked up Kelly on the night of the murder. Looks like they left in a hurry.
              </div>
          </div> : null }

          <div id="tv_no_tape" onClick={this.handleTV}></div>
          {this.state.toggleTV && (this.props.playingTape === false)?
            <div id="tv_no_tape_message">
              <img id="tv_no_tape_bubble" src={leftThought} alt="TV"/>
                <div id="tv_no_tape_message_text">
                  hmmm a VCR. No tape is inside.
              </div>
          </div> : null }

          <div id="room8phone" onClick={this.handlePhoneClick} >
          </div> {(this.props.showPhone === true)? <PhoneContainer message="0"/>: null}

          <div id="cigs" onClick={this.handleCigs}></div>
          {this.state.toggleCigMessage?
            <div id="cigs_message">
              <img id="cigs_bubble" src={leftThought} alt="Cigarettes"/>
                <div id="cigs_message_text">
                   A pack of cigarettes. These girls sure smoke a lot.
                 </div>
          </div> : null }

          <div id="allisons_tennis_racket" onClick={this.handleRacket}></div>
          {this.state.toggleTennisRacketMessage?
            <div id="room8_racket_message">
              <img id="room8_racket_bubble" src={leftThought} alt="Cigarettes"/>
                <div id="room8_racket_message_text">
                    Another tennis racket. It seems like Jessica, Kelly, and Allison play tennis, maybe together? It looks broken in and pretty dirty.
                </div>
          </div> : null }


        <div id="room8_go_to_room_7" onClick={(e) => this.handleGoToRoom(7)}>
            <div id="room8_go_to_room_7_text">GO TO ALLISON'S KITCHEN</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    showPhone: state.showPhone,
    isPurseOpened: state.isPurseOpened,
    TVDropZone: state.TVDropZone,
    playingTape: state.playingTape
  }
}

export default connect( mapStateToProps, actions)(Room8);
