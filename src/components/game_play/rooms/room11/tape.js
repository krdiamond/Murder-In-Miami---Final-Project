import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../../../../actions';
import '../../../../App.css';
import './Room11.css';
import tape from '../../../../images/room11/tape.png';

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
    img: tape,
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
      if(this.state.x > 756 && this.state.x < 886 &&
        this.state.y > 27 && this.state.y < 112) {
        this.putTapeInPurse()
      }
    }

    putTapeInPurse = () => {
      this.props.addItemToPurse(this.tape)
      this.props.hideBeachClubTape()

    }


  render() {
    // console.log("x",this.state.x)
    // console.log("y",this.state.y)
    return (
      <div
        id="tape"
        style={{left: this.state.x,
                top: this.state.y}}
        onMouseDown={(e)=>this.handleMouseDown(e)}
        onMouseUp={this.handleMouseUp}
        onMouseMove={this.handleMouseMove}>
        <img src={tape} alt="Secret Video Tape"/>
        <div id="clear_tape" ></div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    purseDropZone: state.purseDropZone,
    showTape: state.showTape,
    itemsInPurse: state.itemsInPurse
  }
}

export default connect( mapStateToProps, actions)(Tape);




// <div id="clearbox"></div>
// <img src={note} alt="Note"/>
