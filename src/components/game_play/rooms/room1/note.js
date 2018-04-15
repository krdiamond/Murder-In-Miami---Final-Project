import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../../../../actions';
import '../../../../App.css';
import './Room1.css';
import meanNote from '../../../../images/room1/mean_note.png';

class Note extends Component {

  state = {
        oldMouseX: 0,
        oldMouseY: 0,
        mouseX: 0,
        mouseY: 0,
        clicked: false,
        x:200,
        y:250,
      };

    mean_note = {
      id: 1,
      title: 'mean note',
      x:0,
      y:10,
      img: meanNote,
      width: 100,
    }

    handleMouseDown = (e) => {
      this.setState({
        oldMouseX: e.clientX,
        oldMouseY: e.clientY,
        clicked: true,
      });
    }

    handleMouseMove = (e) => {
      this.setState({
        mouseX: e.clientX,
        mouseY: e.clientY,
      })
      if(this.state.clicked === true ) {
          this.setState({
          x: this.state.x + e.clientX - this.state.mouseX,
          y: this.state.y + e.clientY - this.state.mouseY,
        })
      }
    }

    handleMouseUp = () => {
      this.setState({clicked: false});
      if(this.state.x > 630 && this.state.x < 740 &&
        this.state.y > -58 && this.state.y < 40) {
        this.putNoteInPurse()
      }
    }

    putNoteInPurse = () => {
      this.props.addItemToPurse(this.mean_note)
      this.props.showJessicasNote(!this.props.findJessicasNote)
    }


  render() {
    // console.log("x",this.state.x)
    // console.log("y",this.state.y)
    return (
      <div
        id="jessicas_note"
        style={{left: this.state.x,
                top: this.state.y}}
        onMouseDown={(e)=>this.handleMouseDown(e)}
        onMouseUp={this.handleMouseUp}
        onMouseMove={this.handleMouseMove}>
        <div id="clear_mean_note"></div>
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
