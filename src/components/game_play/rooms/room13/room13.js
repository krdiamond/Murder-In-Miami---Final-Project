import React, { Component } from 'react';
import '../../../../App.css';
// import room13 from '../../../../images/room13/room13.jpg';


class Loser extends Component {

  handleGoToRoom = () => {
    this.props.goToRoom(1)
  }

  render() {
    return (
      <div className="main_container">
      YOU LOSE
      </div>
    );
  }
}

export default Loser
