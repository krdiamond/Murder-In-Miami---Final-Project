import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../../../../actions';
import '../../../../App.css';
import './Room5.css';
import keys from '../../../../images/room5/keys.png';

class Keys extends Component {

  state = {
        oldMouseX: 0,
        oldMouseY: 0,
        mouseX: 0,
        mouseY: 0,
        clicked: false,
        x:60,
        y:670,
        showTape: true,
      };

    keys = {
        id:3,
        title: 'keys',
        x:0,
        y:10,
        img: keys,
        width: 50,
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
      if(this.state.x > 633 && this.state.x < 683 &&
        this.state.y > 0 && this.state.y < 64) {
        this.putKeysInPurse()
      }
    }

    putKeysInPurse = () => {
      this.props.addItemToPurse(this.keys)
      this.props.hideKeys()

    }


  render() {
    return (
      <div
        id="keys"
        style={{left: this.state.x,
                top: this.state.y,
                }}
        onMouseDown={(e)=>this.handleMouseDown(e)}
        onMouseUp={this.handleMouseUp}
        onMouseMove={this.handleMouseMove}>
        <img src={keys} height="40" alt="Secret Video Tape"/>
        <div id="clear_keys" ></div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    purseDropZone: state.purseDropZone,
    showTape: state.showTape,
  }
}

export default connect( mapStateToProps, actions)(Keys);
