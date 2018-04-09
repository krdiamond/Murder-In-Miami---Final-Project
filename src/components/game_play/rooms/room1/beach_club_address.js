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
        x:100,
        y:100,
      };

  address = {
    title: 'club address',
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
        this.putAddressInPurse()
      }
    }

    putAddressInPurse = () => {
      this.props.addItemToPurse(this.address)
      this.props.isBeachAddressShowing(!this.props.showNoteWithBeachAddress)
      console.log(this.props.itemsInPurse)
    }


  render() {
    return (
      <div id="beach_club_address"
        style={{left: this.state.x,
                top: this.state.y}}
        onMouseDown={(e)=>this.handleMouseDown(e)}
        onMouseUp={this.handleMouseUp}
        onMouseMove={this.handleMouseMove}>
        <div id="text">
        CLUB ADDRESS
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    purseDropZone: state.purseDropZone,
    itemsInPurse: state.itemsInPurse,
    showNoteWithBeachAddress: state.showNoteWithBeachAddress,
  }
}

export default connect( mapStateToProps, actions)(Note);





// <div id="clearbox"></div>
// <img src={note} alt="Note"/>
