class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
      this.$el.on("click", "li", event => {
        const $currentTarget = $(event.currentTarget);
        this.makeMove($currentTarget);
      });
  }

  makeMove($square) {
    const pos = $square.data("pos");
    console.log($square.data("pos"));
    $square.addClass(this.game.currentPlayer);
    this.game.playMove(pos);
    const $winnerMessage = $("<figcaption>");
    if (this.game.winner()) {
      let win = this.game.winner().toUpperCase();
      $winnerMessage.html(`You win ${win}!`);
    }
    this.$el.append($winnerMessage)
  }

  setupBoard() {
    const $ul = $("<ul>");
    $ul.addClass("ttt-grid");
    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      for (let colIdx = 0; colIdx < 3; colIdx++) {
        let $li = $("<li>");
        $li.data("pos", [rowIdx, colIdx]);
        $ul.append($li);
        // console.log('working');
      }
    }
    this.$el.append($ul);
  }
}

module.exports = View;
