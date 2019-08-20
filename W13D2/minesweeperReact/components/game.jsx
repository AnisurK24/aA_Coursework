import React from 'react';
import Board from './board';
import * as Minesweeper from '../minesweeper';


class Game extends React.Component {
  constructor(props) {
    super(props);
    let board = new Minesweeper.Board(10, 10);
    this.state = {board};
    
    this.updateGame = this.updateGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  restartGame() {
      let board = new Minesweeper.Board(10, 10);
      this.setState({board});
  }


  updateGame(tile, flagged) {
      if (flagged) {
        tile.toggleFlag();
      } else {
        tile.explore();
      }
      this.setState({board: this.state.board});
  }

  render (){
    if (this.state.board.lost() || this.state.board.won()) {
        let text = this.state.board.won() ? "Won" : "Loser! Who loses at Minesweeper?";
        return (
          <div>
            <h2 className='endtext'>{text}</h2>
            <button className='play-button' onClick={this.restartGame}>Play Again</button>
          </div>
        );
        
        
    } else {
      return (
          <div>
            <Board board={this.state.board} updateGame={this.updateGame}/>
          </div>
        );
    }
  }
}

export default Game;

// render(){
//   if (this.state.board.lost() || this.state.board.won()) {
//     let text = this.state.board.won() ? "Won" : "Loser! Who loses at Minesweeper?";
//     <h2>{text}</h2>
//   }
//   return (




//     <div>
//       <Board board={this.state.board} updateGame={this.updateGame} />
//     </div>
//   );
// }