import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../../App.css';
import * as actions from '../../actions';
import phone from '../../images/phone.png';
import redDot from '../../images/room1/red_dot.gif';

class PhoneContainer extends Component {

  state={
    messageDisplayed:false,
    toggleCallPolice: false,
    toggleCallAllison: false,
  }

  handleClosePhone = () => {
    this.props.toggleShowPhone(!this.props.showPhone)
  }

  handleClickMessage = () => {
    this.setState({
      messageDisplayed: true
    })
  }

  callPolice = () => {
    this.setState({
      toggleCallPolice: !this.state.toggleCallPolice
    })
  }

  solveMurder = (person) => {
    if(person === "Jessica"){
      console.log("GO TO WINNERS PAGE!!!")
    }
    else{
      console.log("GO TO LOSERS PAGE!!!")
    }
  }

  isAllisonsPhoneNumberInPurse = () => {
    const result = this.props.itemsInPurse.find(item => item.title === 'Phone Number')
    if (result === undefined){
      return false
    }
    else {
      return true
    }
  }

  callAllison = () => {
    this.setState({
      toggleCallAllison: !this.state.toggleCallAllison
    })
  }

  render() {
    let people = this.props.peopleTalkedTO.map(person => {
      return(<div id="each_person" onClick={(e) => this.solveMurder(person)} >{person}</div>)
    });

    return (
      <div id="phone_container">

          <div id="close_phone" onClick={this.handleClosePhone}>HANG UP PHONE</div>

          <img src={phone} alt="A phone"/>

        {(this.props.message === "0")? null :
        <div id="blinking_message_dot" onClick={this.handleClickMessage}>
            <img src={redDot} width="20" alt="blinking light"/>
        </div>}

        <div className="phone_button" id="call_police" onClick={this.callPolice} > CALL POLICE </div>
        {this.state.toggleCallPolice?
          <div id="police_message">
              hmm.. you say you know who murdered Kelly... Please see a list of everyone you have talked to recently. Was it any of     these people? Please choose one.
          </div> : null}

        {this.state.toggleCallPolice? <div id="people_container">{people}</div> :null}

        {this.isAllisonsPhoneNumberInPurse()?
        <div className="phone_button" id="call_allison" onClick={this.callAllison}> CALL ALLISON </div> :null}
          {this.state.toggleCallAllison?
            <div id="allison_message">
              oh I'll be back at the beach club soon, I got all my shifts covered by Jessica. I'm just in Mexico for a little while with my mom and my dad and my brother. You know just enjoying the sun. I should be back soon nice and tan. Who is this again? I don't think we've ever worked together?
            </div> : null}


        {this.state.messageDisplayed? <div id="phone_message">{this.props.message}</div> :null }

      </div>
    );
  }

}

function mapStateToProps(state){
  return {
    showPhone: state.showPhone,
    peopleTalkedTO: state.peopleTalkedTO,
    findRoom4CrumpledNote: state.findRoom4CrumpledNote,
    itemsInPurse: state.itemsInPurse,
  }
}

export default connect( mapStateToProps, actions)(PhoneContainer);
