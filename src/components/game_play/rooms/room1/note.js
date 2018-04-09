import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../../../../actions';
import '../../../../App.css';
import './Room1.css';
import note from '../../../../images/room1/note.png';

class Note extends Component {

  state = {
        oldMouseX: 0,
        oldMouseY: 0,
        mouseX: 0,
        mouseY: 0,
        clicked: false,
        x:320,
        y:530,
      };

  note = {
    title: 'note',
    img: 'link here',
    text: 'text here'
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
      if(this.state.x > this.props.purseDropZone.right &&
        this.state.x < (this.props.purseDropZone.right + 100) &&
        this.state.y < (this.props.purseDropZone.bottom - 100)){
        console.log("i'm here")
        this.putNoteInPurse()
      }
    }

    putNoteInPurse = () => {
      this.props.addItemToPurse(this.note)
      this.props.showJessicasNote(!this.props.findJessicasNote)

    }


  render() {
    return (
      <div
        id="jessicas_note"
        style={{left: this.state.x,
                top: this.state.y}}
        onMouseDown={(e)=>this.handleMouseDown(e)}
        onMouseUp={this.handleMouseUp}
        onMouseMove={this.handleMouseMove}>
        <div id="text">
          ---121 Street Lane, Miami Florida Address --- Dear Kelly, I can't believe what you did today during tennis practice. You are the most horrible disgusting person I have ever met. We are not friends anymore. Do not call me -Jessica
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    purseDropZone: state.purseDropZone,
    findJessicasNote: state.findJessicasNote,
  }
}

export default connect( mapStateToProps, actions)(Note);




// <div id="clearbox"></div>
// <img src={note} alt="Note"/>
