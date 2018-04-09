import React, { Component } from 'react';
import {connect} from 'react-redux'
import ReactDOM from 'react-dom';
import '../../App.css';
import * as actions from '../../actions';
import purse from '../../images/purse.png';

class PurseContainer extends Component {

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

  render() {
    return (
      <div id="purse_container" ref='purse' >
          <img src={purse} onClick={this.togglePurseOpen} width="150" alt="Your purse to store items"/>
      </div>
    );
  }

}

function mapStateToProps(state){
  return {
      isPurseOpened: state.isPurseOpened,
      purseDropZone: state.purseDropZone,
  }
}


export default connect(mapStateToProps, actions)(PurseContainer);
