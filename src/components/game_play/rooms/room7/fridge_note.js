import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../../../../actions';
import '../../../../App.css';
import './Room7.css';
import fridgeNote from '../../../../images/room7/fridge_note.png';

const interact = require('interactjs');

class FridgeNote extends Component {


  beachAddress = {
    id:4 ,
    title: 'Beach Club Address',
    x:0,
    y:10,
    img: fridgeNote,
    width:100,
  }

  componentDidMount = () => {
      interact('.dropzone').dropzone({
      accept: '.found-object',
      ondrop: this.putAddressInPurse
    });
  }

    putAddressInPurse = () => {
      this.props.addItemToPurse(this.beachAddress)
      this.props.showBeachAddress(false)
    }


  render() {
    return (
      <div id="beach_club_address" className="draggable found-object">
          <img src={fridgeNote} alt="Address and beach club schedule"/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    purseDropZone: state.purseDropZone,
    itemsInPurse: state.itemsInPurse,
    showNoteBeachAddress: state.showNoteBeachAddress,
  }
}

export default connect( mapStateToProps, actions)(FridgeNote);
