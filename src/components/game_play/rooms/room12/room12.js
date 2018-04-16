import React, { Component } from 'react';
import '../../../../App.css';
import room12 from '../../../../images/room12/room12.jpg';


class Winner extends Component {


  render() {
    return (
      <div className="main_container">
        <img src={room12} alt="YOU WIN"/>
      </div>
    );
  }
}

export default Winner
