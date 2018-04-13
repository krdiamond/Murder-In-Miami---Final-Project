import React, { Component } from 'react';

export default class Cell extends Component {

 render() {
   return (
     <div className="cell"
          id={this.props.id}
          key ={this.props.id}
          style={{left: this.props.x,
                  top: this.props.y}}
          onMouseDown={(e)=>this.props.findTheMovingCell(e,this.props.title)}>
        <div id="clearbox"></div>
        <img width={this.props.width} className="moon" src={this.props.img} alt="full moon" />
    </div>
    );
  }
}


      // <div id="position_text">x_:{this.props.x}___y:_{this.props.y}</div>
