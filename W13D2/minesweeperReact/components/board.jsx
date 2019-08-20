import React from 'react';
import Tile from './tile'

class Board extends React.Component{
  constructor(props){
    super(props)
    
    this.render = this.render.bind(this);
    // this.renderRows = this.renderRows.bind(this);
    // this.renderTiles = this.renderTiles.bind(this);
  }


render(){
    const board = this.props.board;
    return (
      <div id='board'>
        {this.renderRows()}
      </div>
    );
  }

  renderRows(){
    const board = this.props.board;
    return board.grid.map((row, idx) => {
      return (
        <div className="row" key={`row-${idx}`}>
          {/* <Tile /> */}
          {this.renderTiles(row, idx)}
        </div>
      );
    })
  }

  renderTiles(row, idx){
    const board = this.props.board;
    return row.map((tile, jdx) => {
      return (
        <Tile
          tile = { tile }
          updateGame = { this.props.updateGame }
          key = { idx * board.gridSize + jdx } />
      );
    });
  }

}



export default Board;