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
    holdTitle: null
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

  findTheMovingCellOnMouseDown = (e, idx, title) => {
    this.setState({
      oldMouseX: e.clientX,
      oldMouseY: e.clientY,
      holdIndex: idx,
      holdTitle: title
    });
  }

  findItemByTitle = () => {
    const result = this.props.itemsInPurse.find(item => item.title === this.state.holdTitle)
    return result
  }

  handleMouseMove = (e) => {
      this.setState({
        mouseX: e.clientX,
        mouseY: e.clientY,
      });

    if(this.state.holdTitle != null) {
      this.setState({
        x: this.findItemByTitle().x += e.clientX - this.state.mouseX,
        y: this.findItemByTitle().y += e.clientY - this.state.mouseY,
      });
    }
  }

  handleMouseUp = (event) => {
    this.setState({
      holdTitle: null,
    });
  }


  render() {
    let cells = this.props.itemsInPurse.map((cell) => {
        return (
          <Cell
            id={cell.id}
            idx={cell.idx}
            title={cell.title}
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
