import React, { Component } from 'react';
import {connect} from 'react-redux'
import {toggleIsPurseOpened} from '../../actions'
import '../../App.css';
import purse from '../../images/purse.png';

class PurseContainer extends Component {



  togglePurseOpen = () => {
    this.props.toggleIsPurseOpened(!this.props.isPurseOpened)
  }

  render() {
    return (
      <div id="purse_container">
          <img src={purse} onClick={this.togglePurseOpen} width="150" alt="Your purse to store items"/>
      </div>
    );
  }

}

function mapStateToProps(state){
  return {
      isPurseOpened: state.isPurseOpened
  }
}

export default connect(mapStateToProps, {toggleIsPurseOpened})(PurseContainer);
