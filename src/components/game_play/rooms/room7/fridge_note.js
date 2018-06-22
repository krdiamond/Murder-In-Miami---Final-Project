import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../../../../actions';
import '../../../../App.css';
import './Room7.css';
import fridgeNote from '../../../../images/room7/fridge_note.png';

class FridgeNote extends Component {

  state = {
        oldMouseX: 0,
        oldMouseY: 0,
        mouseX: 0,
        mouseY: 0,
        clicked: false,
        x:100,
        y:100,
      };

  beachAddress = {
    id:4 ,
    title: 'Beach Club Address',
    x:0,
    y:10,
    img: fridgeNote,
    width:100,
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
      if(this.state.x > 400 && this.state.x < 1000 &&
        this.state.y > -100 && this.state.y < 150) {
        this.putAddressInPurse()
      }
    }

    putAddressInPurse = () => {
      this.props.addItemToPurse(this.beachAddress)
      this.props.showBeachAddress(false)
    }


  render() {
    // console.log("x",this.state.x)
    // console.log("y",this.state.y)
    return (
      <div id="beach_club_address"
        style={{left: this.state.x,
                top: this.state.y}}
        onMouseDown={(e)=>this.handleMouseDown(e)}
        onMouseUp={this.handleMouseUp}
        onMouseMove={this.handleMouseMove}>
          <div id="clear_beach_address"></div>
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
