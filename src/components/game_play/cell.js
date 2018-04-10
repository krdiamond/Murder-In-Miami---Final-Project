import React, { Component } from 'react';

export default class Cell extends Component {

 render() {

   return (
     <div className="cell"
          id ={this.props.id}
          title={this.props.title}

          style={{left: this.props.x,
                  top: this.props.y}}

          onMouseDown={(e)=>this.props.findTheMovingCell(e,this.props.idx,this.props.title)}>
        <div id="clearbox"></div>
        <img className="moon" src={this.props.img} alt="full moon" />
    </div>
    );
  }
}
