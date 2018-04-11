import React, { Component } from 'react';
import {connect} from 'react-redux'
import ReactDOM from 'react-dom';
import '../../App.css';
import * as actions from '../../actions';
import purse from '../../images/purse.png';
import Cell from './cell';

class PurseContainer extends Component {

  state = {
    oldMouseX: 0,
    oldMouseY: 0,
    mouseX: 0,
    mouseY: 0,
    holdTitle: null,
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

  findTheMovingCellOnMouseDown = (e, title) => {
    this.setState({
      oldMouseX: e.clientX,
      oldMouseY: e.clientY,
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
    if (this.state.holdTitle === 'tape'){
      this.insertTape()
    }
    this.setState({holdTitle: null});
  }

  insertTape = () => {
    if(this.state.x > -(this.props.TVDropZone.x) &&
        this.state.x < -(this.props.TVDropZone.x - 100) &&
        this.state.y > -(this.props.TVDropZone.y) &&
        this.state.y < -(this.props.TVDropZone.y - 150) &&
        this.props.currentRoom === 8) {
          console.log("i'm here")
        this.playTape()
      }
  }

  playTape = () => {
    this.props.playTape(!this.props.playingTape)
    this.props.removeItemFromPurse(this.props.itemsInPurse.filter(item => item.title !== "tape"))
  }

  render() {
    let cells = this.props.itemsInPurse.map((cell) => {
        return (
          <Cell
            key={cell.id}
            id={cell.id}
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
      itemsInPurse: state.itemsInPurse,
      TVDropZone: state.TVDropZone,
      currentRoom: state.currentRoom,
      playingTape: state.playingTape
  }
}


export default connect(mapStateToProps, actions)(PurseContainer);
