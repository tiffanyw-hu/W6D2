class View {
  constructor(game, rootEl) {
    this.game = game;
    this.rootEl = rootEl;
    this.firstClick = undefined;
    this.secondClick = undefined;
  }

  setUpOnClick() {
    const $uls = $('ul');
    for ( let i = 0; i < $uls.length; i++ ) {
      $uls.eq(i).on("click", event => {
        event.preventDefault();
        const $ul = $(event.currentTarget);
        if (this.firstClick === undefined) {
          this.firstClick = parseInt($ul.attr('class'));
        } else if (this.secondClick === undefined) {
          this.secondClick = parseInt($ul.attr('class'));
          this.game.move(this.firstClick, this.secondClick);
        }
      });
    }
  }

  setupTowers() {
    for ( let i = 0; i < 3; i++ ) {
      const $ul = $('<ul></ul>');
      $ul.addClass(`${i}`);
      this.rootEl.append($ul);
    }

    for ( let i = 0; i < 3; i++ ) {
      const $li = $('<li></li>');
      $li.addClass(`li-${i}`);
      $('ul.0').append($li);
    }
  }

  clickTower() {

  }

}

module.exports = View;
