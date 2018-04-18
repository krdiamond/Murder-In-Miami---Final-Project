import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../../App.css';
import * as actions from '../../actions';
import phone from '../../images/phone.png';
import redDot from '../../images/room1/red_dot.gif';
import yelling from '../../images/yelling_bubble.png';

class PhoneContainer extends Component {

  state={
    messageDisplayed:false,
    toggleCallPolice: false,
    toggleCallAllison: false,
    solution: []
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

 addMurderClueToSolution = (itemOrPerson) => {
   this.setState({
     solution: [...this.state.solution, itemOrPerson]
   }, () => this.solveMurder())
 }



  solveMurder = () => {
    if (this.state.solution.length === 2){
        if (this.state.solution.includes("Jessica") && this.state.solution.includes("Tennis Racket") === true) {
          this.handleGoToRoom(12)
        }
        else {
          this.handleGoToRoom(13)
        }
    }
  }

  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
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
      return(<div className="phone_button" onClick={(e) => this.addMurderClueToSolution(person)}><div className="each_item">{person}</div></div>)
    });

    let suspiciousItems = [...new Set( this.props.suspiciousItemsInspected )].map(item => {
      return(<div className="phone_button" onClick={(e) => this.addMurderClueToSolution(item)} ><div className="each_item">{item}</div></div>)
    });


    return (
      <div id="phone_container">

         <img src={phone} alt="A phone"/>

         {(this.props.message === "0")? null :
         <div id="blinking_message_dot" onClick={this.handleClickMessage}>
            <img src={redDot} width="80" alt="blinking light"/>
         </div>}

         <div id="close_phone" onClick={this.handleClosePhone}>HANG UP PHONE</div>

         <div id="phone_buttons_container">
              <div id="call_police" onClick={this.callPolice}>CALL POLICE</div>
              {this.state.toggleCallPolice? <div id="people_container_left">{people}</div> : null }
              {this.state.toggleCallPolice? <div id="item_container_right">{suspiciousItems}</div> : null}
              {this.isAllisonsPhoneNumberInPurse()? <div className="phone_button" id="call_allison" onClick={this.callAllison}> CALL ALLISON </div> : null}
          </div>

          {this.state.messageDisplayed? <div id="phone_message">{this.props.message}</div> :null }

          {this.state.toggleCallPolice?
            <div id="police_message">
              <img id="police_bubble" src={yelling} alt="Police Message"/>
                  <div id="police_message_text">
                      hmm... You say you know who murdered Kelly? Your keypad shows a list of everyone you talked to recently and all of the suspicious items you have inspected.  Help us out by selecting the murderer and the murder weapon.  If you help us we'll give you the full story, otherwise GAME OVER.
                  </div>
            </div> : null}

           {this.state.toggleCallAllison?
             <div id="allison_message">
               oh I'll be back at the beach club soon, I got all my shifts covered by Jessica. I'm just in Mexico for a little while with my mom and my dad and my brother. You know just enjoying the sun. I should be back soon nice and tan. Who is this again? I don't think we've ever worked together?
           </div> : null}

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

// {this.state.toggleParrotMessageRight?
//   <div id="parrot_message">
//     <img id="parrot_bubble" src={yelling} alt="Cigarettes"/>
//       <div id="parrot_message_text">
//          squawk... squawk... Heather I don't know... Heather I don't know... squawk
//        </div>
// </div> : null }
