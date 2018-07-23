import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../../../../actions';
import '../../../../App.css';
import './Room5.css';
import keys from '../../../../images/room5/keys.png';

const interact = require('interactjs');

class Keys extends Component {


    keys = {
        id:3,
        title: 'keys',
        x:0,
        y:10,
        img: keys,
        width: 80,
    }

    componentDidMount = () => {
      interact('.dropzone').dropzone({
        accept: '.found-object',
        ondrop: this.putKeysInPurse
      });
    }

    putKeysInPurse = () => {
      this.props.addItemToPurse(this.keys)
      this.props.hideKeys()

    }


  render() {
    return (
      <div id="keys" className="draggable found-object">
        <img src={keys} height="35" alt="Secret Video Tape"/>
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
