import React, { Component } from 'react';
import '../../../../App.css';
import room13 from '../../../../images/room13/room13.jpg';


class Loser extends Component {

  handleGoToRoom = () => {
    this.props.goToRoom(1)
  }

  render() {
    return (
      <div className="main_container">
          <img src={room13} alt="YOU WIN"/>
          <div id="loser">GAME OVER</div>
          <div id="loser_story"> You have given an incorrect answer. The murderer is still at large.</div>
      </div>
    );
  }
}

export default Loser
