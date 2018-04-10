import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../../App.css';
import * as actions from '../../actions';
import ReactDOM from 'react-dom';


class Television extends Component {

  componentDidMount = () => {
    this.findTVDropZone()
  }

  findTVDropZone = () => {
    let zone = ReactDOM.findDOMNode(this.refs['tv']).getBoundingClientRect()
    this.props.loadTVLocation(zone)
  }

  render() {
    return (
      <div id="tv_container" ref='tv'></div>
    );
  }
}

function mapStateToProps(state){
  return {
    TVDropZone: state.TVDropZone,
  }
}

export default connect( mapStateToProps, actions)(Television);
