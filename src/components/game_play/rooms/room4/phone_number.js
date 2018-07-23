import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../../../../actions';
import '../../../../App.css';
import './Room4.css';
import phoneNumber from '../../../../images/room4/allisons_phone_number.png';

const interact = require('interactjs');

class PhoneNumber extends Component {

    phoneNumber = {
      title: 'Phone Number',
      id:2,
      x:0,
      y:10,
      img: phoneNumber,
      width:100,
    }

    componentDidMount = () => {
      interact('.dropzone').dropzone({
        accept: '.found-object',
        ondrop: this.putNoteInPurse
      });
    }

    putNoteInPurse = () => {
      this.props.addItemToPurse(this.phoneNumber)
      this.props.showAllisonsPhoneNumber(!this.props.showingAllisonsPhoneNumber)
    }


  render() {
    return (
      <div id="phone_number" className="draggable found-object">
        <img src={phoneNumber} alt="Allison's Phone Numbe in Mexico"/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    purseDropZone: state.purseDropZone,
    findJessicasNote: state.findJessicasNote,
    itemsInPurse: state.itemsInPurse,
    showingAllisonsPhoneNumber: state.showingAllisonsPhoneNumber,
  }
}

export default connect( mapStateToProps, actions)(PhoneNumber);
