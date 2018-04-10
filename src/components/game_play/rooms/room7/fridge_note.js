import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../../../../actions';
import '../../../../App.css';
import './Room7.css';

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
    title: 'Beach Club Address',
    x:0,
    y:10,
    id:8,
    img: 'fridge_note',
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
        this.putAddressInPurse()
      }
    }

    putAddressInPurse = () => {
      this.props.addItemToPurse(this.beachAddress)
      this.props.showBeachAddress(false)
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
    showNoteBeachAddress: state.showNoteBeachAddress,
  }
}

export default connect( mapStateToProps, actions)(FridgeNote);
