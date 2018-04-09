import React, { Component } from 'react';
import {connect} from 'react-redux'
import ReactDOM from 'react-dom';
import '../../App.css';
import * as actions from '../../actions';
import purse from '../../images/purse.png';
import meanNote from '../../images/room1/note.png';
import tape from '../../images/room11/tape.png';
import fridgeNote from '../../images/room7/fridge_note.png';
import Cell from './cell';

class PurseContainer extends Component {

  state = {
    oldMouseX: 0,
    oldMouseY: 0,
    mouseX: 0,
    mouseY: 0,
    holdIndex: -1,
  };


  componentDidMount = () => {
    this.findPurseDropZone()
  }

  findPurseDropZone = () => {
    let zone = ReactDOM.findDOMNode(this.refs['purse']).getBoundingClientRect()
    this.props.loadPurseLocation(zone)
  }

  togglePurseOpen = () => {
    this.props.toggleIsPurseOpened(!this.props.isPurseOpened)
  }

  findTheMovingCellOnMouseDown = (e, idx) => {
    this.setState({
      oldMouseX: e.clientX,
      oldMouseY: e.clientY,
      holdIndex: idx,
    });
  }

  handleMouseMove = (e) => {
    let newState = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      holdIndex: this.state.holdIndex,
    };

    if(newState.holdIndex >= 0) {
      newState.cells = this.props.itemsInPurse;
      let target = newState.cells[this.state.holdIndex];
      target.x += e.clientX - this.state.mouseX;
      target.y += e.clientY - this.state.mouseY;
      //drop zone needs to be updated to locations that you can put things, these items are already in the purse
      // let dropZone = this.findDropZone()
      // if(target.x < dropZone.right &&
      //   target.x > (dropZone.right - dropZone.width - 100) &&
      //   target.y < dropZone.bottom &&
      //   target.y > (dropZone.bottom - dropZone.height-100)){
      //   console.log("i'm here")
      // }
    }
    this.setState(newState);
  }

  handleMouseUp = (event) => {
    this.setState({holdIndex: -1});
  }


  render() {
    let cells = this.props.itemsInPurse.map((cell) => {
        return (
          <Cell
            key={cell.idx}
            id={cell.id}
            idx={cell.idx}
            x={cell.x}
            y={cell.y}
            img={cell.img}
            findTheMovingCell={this.findTheMovingCellOnMouseDown}
          />
        );
      }
    );

    return (
      <div id="purse_container" ref='purse' >
          <img src={purse} onClick={this.togglePurseOpen} width="150" alt="Your purse to store items"/>
            {(this.props.isPurseOpened === true && this.props.showPhone === false)?
              <div id ="purse_contents" onMouseUp={this.handleMouseUp} onMouseMove={this.handleMouseMove}> { cells }</div> : null}
      </div>
    );
  }

}

function mapStateToProps(state){
  return {
      isPurseOpened: state.isPurseOpened,
      purseDropZone: state.purseDropZone,
      showPhone: state.showPhone,
      itemsInPurse: state.itemsInPurse
  }
}


export default connect(mapStateToProps, actions)(PurseContainer);
