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



class Room8 extends Component {

  state = {
    toggleWineGlassMessage: false,
    toggleTennisRacketMessage: false,
    toggleCigMessage: false,
    toggleBeachSceneMessage: true,
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
    })
  }

  handleRacket = () => {
    this.props.toggleShowPhone(false)
    this.setState({
      toggleTennisRacketMessage: !this.state.toggleTennisRacketMessage,
      toggleWineGlassMessage: false,
      toggleCigMessage: false,
    })
  }

  handleCigs = () => {
    this.props.toggleShowPhone(false)
    this.setState({
      toggleCigMessage: !this.state.toggleCigMessage,
      toggleWineGlassMessage: false,
      toggleTennisRacketMessage: false,
    })
  }

  handlePhoneClick = () => {
    this.props.toggleShowPhone(!this.props.showPhone)
    this.props.toggleIsPurseOpened(false)
    this.setState({
      toggleCigMessage: false,
      toggleWineGlassMessage: false,
      toggleTennisRacketMessage: false,
    })
  }

  handleBeachSceneClick =() =>{
    this.setState({
      toggleBeachSceneMessage: !this.state.toggleBeachSceneMessage,
    })
  }

  //
   //
  // Heather:
  // Jessica:
  // Heather:
  // Jessica:
  // Heather:



  // <img id="heather_bubble_4" src={longSpeech} alt="Cigarettes"/>

  // <img id="jessica_bubble_5" src={longSpeech} alt="Cigarettes"/>
  //   <div id="jessica_message_text_5">
  //



  render() {
    return (
      <div className="main_container">
        <img src={room8} alt="Allison's Bedroom"/>

          {this.props.playingTape? <img src={beach} id="beach_scene" onClick={this.handleBeachSceneClick} alt="Beach Scene"/> : null}
          {this.props.playingTape && this.state.toggleBeachSceneMessage?

            <div id="beach_message">
              <div className="message_bubble_right">
                <div className="bubble_text"> <strong>Heather</strong> "She is so gross, how could she do that??"</div>
                <img className="bubble" src={longSpeech} alt="Beach Convo"/>
              </div>
              <div className="message_bubble_left">
                <div className="bubble_text"> <strong>Jessica</strong> "I know I hate her so much."</div>
                <img className="bubble"  src={longSpeech} alt="Beach Convo"/>
              </div>
              <div className="message_bubble_right">
                <div className="bubble_text"> <strong>Heather</strong> "it would be so funny to take her out to the beach at night and like totally bash her head in"</div>
                <img className="bubble"  src={longSpeech} alt="Beach Convo"/>
              </div>
              <div className="message_bubble_left">
                <div className="bubble_text"> <strong>Jessica</strong> "hahahaha could you imagine"</div>
                <img className="bubble"  src={longSpeech} alt="Beach Convo"/>
              </div>
              <div className="message_bubble_right">
                <div className="bubble_text"> <strong>Heather</strong> " who would even miss her???"</div>
                 <img className="bubble"  src={longSpeech} alt="Beach Convo"/>
               </div>
              <div className="message_bubble_left">
                <div className="bubble_text"> <strong>Jessica</strong> "well I guess me beacuse like she does most of the work around here anyways, I just sit around and hang out with you.... I should probably be working right now..."</div>
                <img className="bubble"  src={longSpeech} alt="Beach Convo"/>
              </div>
              <div className="message_bubble_right">
                <div className="bubble_text"> <strong>Heather</strong> "yea what are you even doing talking to me, go get me a drink hahahaha!! "</div>
                <img className="bubble"  src={longSpeech} alt="Beach Convo"/>
              </div>
            </div> : null}


          <div id="wine_glass_left" onClick={this.handleWineGlasses}></div>
          {this.state.toggleWineGlassMessage?
            <div id="wine_glasses_message">
              <img id="wine_glasses_bubble" src={rightThought} alt="Wine Glasses"/>
                <div id="wine_glasses_message_text">
                  There are two glasses of wine... I think Allison and Jessica were hanging out here when Allison left Kelly that message on her answering machine the night of the murder. Looks like they left in a hurry to pick up Kelly.
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
                    Another tennis racket. It seems like Allison and Jessica all play tennis together. This one seems to be broken in and pretty dirty.
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




  // {this.props.room1listenedToMessage? null : <img src={redDot} width="5" alt="blinking light"/>}
