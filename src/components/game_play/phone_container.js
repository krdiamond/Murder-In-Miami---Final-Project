import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../../App.css';
import * as actions from '../../actions';
import phone from '../../images/phone.png';
import redDot from '../../images/room1/red_dot.gif';

class PhoneContainer extends Component {

  state={
    messageDisplayed:false,
  }

  handleClosePhone = () => {
    this.props.toggleShowPhone(!this.props.showPhone)
  }

  handleClickMessage = () => {
    this.setState({
      messageDisplayed: true
    })
  }


  render() {
    return (
      <div id="phone_container" className="container">
          <div onClick={this.handleClosePhone}>x</div>
          <img src={phone}  alt="A phone"/>

        {(this.props.message === "0")? null :
        <div id="blinking_message_dot" onClick={this.handleClickMessage}>
            <img src={redDot} width="20" alt="blinking light"/>
        </div>}
        {this.state.messageDisplayed? <div>{this.props.message}</div> :null }
      </div>
    );
  }

}

function mapStateToProps(state){
  return {
    showPhone: state.showPhone,
  }
}

export default connect( mapStateToProps, actions)(PhoneContainer);
