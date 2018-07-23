import React, { Component } from 'react';

export default class Cell extends Component {

 render() {
   return (
     <div className="cell draggable"
          id={this.props.id}
          key ={this.props.id}
          onMouseDown={(e)=>this.props.findTheMovingCell(this.props.title)}>
        <div id="clearbox"></div>
        <img width={this.props.width} className="moon" src={this.props.img} alt="full moon" />
    </div>

    );
  }
}
