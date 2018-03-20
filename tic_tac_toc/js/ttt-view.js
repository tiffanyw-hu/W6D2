class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

  }

  bindEvents() {
    const $lis = $('li');
    for ( let i = 0; i < $lis.length; i++ ) {
      $lis.eq(i).on("click", event => {
        event.preventDefault();
        const $li = $(event.currentTarget);
        this.makeMove($li);
        $li.unbind("click");
      });
    }
  }

  makeMove($li) {
    $li.css("background-color", "white");
    $li.text(this.game.currentPlayer);
    $li.addClass(this.game.currentPlayer);
    let pos = [$li.data('x'), $li.data('y')];
    this.game.playMove(pos);
    console.log($li.text());
    this.game.board.print();
    if (this.game.isOver()) {
      const winner = this.game.winner();
      if (winner === null) {
        let $winnerText = $(`<h2>NO ONE WINS!</h2>`);
        $('li').css("color", "red");
        this.$el.append($winnerText);
      } else {
        const $winnerli = $(`.${winner}`);
        $('li').css("background-color", "white");
        $('li').css("color", "red");
        $winnerli.css("background-color", "green");
        $winnerli.css("color", "white");

        let $winnerText = $(`<h2>You win, ${winner}</h2>`);
        this.$el.append($winnerText);
      }
    }
  }

  setupBoard() {
    const $ul = $('<ul></ul>');
    this.$el.append($ul);
    for ( let i = 0; i < 9; i++ ) {
      const $li = $('<li></li>');
      $li.data('x', i % 3).data('y', Math.floor(i / 3));
      $ul.append($li);
    }

    // Add winner text

  }
}

module.exports = View;
