import React, { Component } from 'react';
import '../../../../App.css';
import room13 from '../../../../images/room13/room13.jpg';


class Loser extends Component {

  handleGoToRoom = () => {
    window.location.reload(true);
  }

  render() {
    return (
      <div className="main_container">
          <img src={room13} alt="YOU WIN"/>
          <div id="loser">GAME OVER</div>
          <div id="loser_story"> You have given an incorrect answer. The murderer is still at large.</div>
          <button id="play_again_button" type="button" onMouseUp={this.handleGoToRoom} >PLAY AGAIN</button>
      </div>

    );
  }
}

export default Loser
