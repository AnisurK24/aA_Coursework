const View = require('./ttt-view.js');
const Game = require('./game.js');

  $(() => {
    // Your code here
    const game = new Game();
    new View(game, $('.ttt'))
  });
