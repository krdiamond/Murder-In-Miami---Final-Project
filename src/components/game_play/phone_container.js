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
      messageDisplayed: !this.state.messageDisplayed,
      toggleCallPolice: false,
      toggleCallAllison: false,
    })
    if (this.props.currentRoom === 6){
      this.props.addToPeopleYouHaveTalkedTo("Allison's Dad")
    }
  }

  callPolice = () => {
    this.setState({
      toggleCallPolice: !this.state.toggleCallPolice,
      toggleCallAllison: false,
      messageDisplayed: false,
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

  callAllison = () => {
    this.setState({
      toggleCallAllison: !this.state.toggleCallAllison,
      messageDisplayed: false,
      toggleCallPolice: false,
    })
    this.props.addToPeopleYouHaveTalkedTo("Allison")
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

  render() {
    let people = [...new Set( this.props.peopleTalkedTO )].map(person => {
      return(<div id="each_person" onClick={(e) => this.solveMurder(person)} >{person}</div>)
    });

    let suspiciousItems = [...new Set( this.props.suspiciousItemsInspected )].map(item => {
      return(<div id="each_suspicious_item" onClick={(e) => this.solveMurder(item)} >{item}</div>)
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
              hmm.. you say you know who murdered Kelly... This is a list of everyone you talked to recently and all of the suspicious items you have inspected. Did you solve the case? Help us out by selecting the murderer and the murder weapon.
          </div> : null}

        {this.state.toggleCallPolice? <div id="people_container">{people}</div> :null}
        {this.state.toggleCallPolice? <div id="each_suspicious_item_container">{suspiciousItems}</div> :null}


        {this.isAllisonsPhoneNumberInPurse()?
        <div className="phone_button" id="call_allison" onClick={this.callAllison}> CALL ALLISON </div> :
        <div className="phone_button" id="call_allison" ></div>}
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
    suspiciousItemsInspected: state.suspiciousItemsInspected,
    currentRoom: state.currentRoom,
  }
}

export default connect( mapStateToProps, actions)(PhoneContainer);
