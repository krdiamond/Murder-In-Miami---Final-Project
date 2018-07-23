import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../../App.css';
import * as actions from '../../actions';
import purse from '../../images/purse.png';
import Cell from './cell';

const interact = require('interactjs');

class PurseContainer extends Component {

  handleTogglePurseOpen = () => {
    this.props.toggleShowPhone(false)
    this.props.toggleIsPurseOpened(!this.props.isPurseOpened)
  }

  componentDidMount = () => {
    interact('.tv').dropzone({
      accept: '.cell',
      ondrop: this.playTape
    });
  }

  playTape = () => {
    if(this.props.itemsInPurse[0].title == "tape"){
      this.props.playTape(!this.props.playingTape)
      this.props.removeItemFromPurse(this.props.itemsInPurse.filter(item => item.title !== "tape"))
    }
  }

  sortItemsInThePurseByID = () => {
    return this.props.itemsInPurse.sort((a,b) => a.id - b.id)
  }

  render() {

    let cells = this.sortItemsInThePurseByID().map((cell) => {
        return (
          <Cell
            key={cell.id}
            id={cell.id}
            title={cell.title}
            img={cell.img}
            width={cell.width}
          />
        );
      }
    );

    return (
      <div id="purse_container" className="dropzone" >
          <img id="purse" src={purse} onClick={this.handleTogglePurseOpen} alt="Your purse to store items"/>
          {this.props.isPurseOpened?
            <div id ="purse_contents">
              { cells }
            </div> : null}
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
