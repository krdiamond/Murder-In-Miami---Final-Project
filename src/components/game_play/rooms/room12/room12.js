import React, { Component } from 'react';
import '../../../../App.css';
import room12 from '../../../../images/room12/room12.jpg';


class Winner extends Component {


  render() {
    return (
      <div className="main_container">
        <img src={room12} alt="YOU WIN"/>
          <div id="murder_story">
            <p>Kelly returned home to her apartment after working a shift at the beach club.  She received a message from her friends Allison and Jessica to go out. Recently, Kelly had a falling out with Jessica over a bad tennis game and they were not on speaking terms.  Allison did not know this.  Kelly was initially hesitant but decided she would go anyway.  Allison picked up Kelly and drove the three girls to their favorite beach spot to hang out and smoke cigarettes. </p>

            <p>Unbeknownst to Allison, Jessica had been planning Kelly’s murder for months and was waiting for a good opportunity. She brought with her a tennis racket. She hid it in the trunk of Allison’s car when she wasn’t looking.</p>

            <p>Once the girls arrived they got out of the car and walked down to the beach. When they were near the water Jessica told the group that she had forgotten to bring her lighter. Allison volunteered to go back to the car to get her lighter. Once Allison was all the way back near the car and out of sight, Jessica began to hit Kelly with the tennis racket over and over again. During the attack, Kelly managed to wrestle Jessica’s tennis racket away from her in an attempt to defend herself.  She left a crosshatched bruise on Jessica’s legs. Jessica continued to hit Kelly until she was dead.</p>

            <p>Allison soon came back and saw what Jessica had done.  Although shocked, scared, and in somewhat of an agreeable trance, Jessica convinced Allison to help her bury Kelly's body. The ground was too hard and rocky for them to dig, so they covered Kelly's body with rocks, fallen branches, sand and dirt. Allison and Jessica returned to the car where Jessica convinced Allison that because she helped she was also partially to blame for the murder.  They agreed to never speak of it again. Allison dropped Jessica off at her home and then promptly started driving to Mexico. She did not want to be blamed for the murder of her friend! She thought it would be better to skip town.</p>

            <p>Kelly’s body was found by a surfer 2 days later. The Police began interviewing Kelly’s beach club friends. Jessica acted too distraught to talk to the police and Allison was nowhere to be found. A major break in the case was made when Jessica's friend Heather admitted plotting with Jessica to kill Kelly but could never actually go through with it.  Heather said their motivation was that they just "didn't like her".  Finally, during interrogation, Jessica broke down into a confession and eventually pled guilty to first-degree murder. </p>
          </div>
      </div>
    );
  }
}

export default Winner
