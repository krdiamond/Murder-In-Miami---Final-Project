import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../../../../actions';
import '../../../../App.css';
import './Room1.css';
import meanNote from '../../../../images/room1/mean_note.png';

class Note extends Component {



    mean_note = {
      id: 1,
      title: 'mean note',
      x:0,
      y:10,
      img: meanNote,
      width: 100,
    }

    putNoteInPurse = () => {
      this.props.addItemToPurse(this.mean_note)
      this.props.showJessicasNote(!this.props.findJessicasNote)
    }


  render() {
    return (
      <div id="jessicas_note" className="draggable">
        <img src={meanNote} alt="Mean note"/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    purseDropZone: state.purseDropZone,
    findJessicasNote: state.findJessicasNote,
    itemsInPurse: state.itemsInPurse
  }
}

export default connect( mapStateToProps, actions)(Note);




// <div id="clearbox"></div>
// <img src={mean_note} alt="mean_note"/>
