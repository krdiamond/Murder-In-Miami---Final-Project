import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../../../../actions';
import '../../../../App.css';
import './Room11.css';
import tape from '../../../../images/room11/tape.png';

const interact = require('interactjs');

class Tape extends Component {

  state = {
        oldMouseX: 0,
        oldMouseY: 0,
        mouseX: 0,
        mouseY: 0,
        clicked: false,
        x:425,
        y:790,
        showTape: true,
      };

  tape = {
    id: 0,
    title: 'tape',
    x:0,
    y:10,
    width:80,
    img: tape,
  }

  componentDidMount = () => {
    interact('.dropzone').dropzone({
      accept: '.found-object',
      ondrop: this.putTapeInPurse
    });
  }

    putTapeInPurse = () => {
      this.props.addItemToPurse(this.tape)
      this.props.hideBeachClubTape()

    }


  render() {
    return (
      <div id="tape" className="draggable found-object">
        <img src={tape} alt="Secret Video Tape"/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    purseDropZone: state.purseDropZone,
    showTape: state.showTape,
    itemsInPurse: state.itemsInPurse,
  }
}

export default connect( mapStateToProps, actions)(Tape);




// <div id="clearbox"></div>
// <img src={note} alt="Note"/>
