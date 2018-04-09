import React, { Component } from 'react';

export default class Cell extends Component {

 render() {

   return (
     <div className="cell"
          key={this.props.idx}
          id ={this.props.id}

          style={{left: this.props.x,
                  top: this.props.y}}

          onMouseDown={(e)=>this.props.findTheMovingCell(e,this.props.idx)}>
        <div id="clearbox"></div>
        <img className="moon" src={this.props.img} alt="full moon" />
    </div>
    );
  }
}
