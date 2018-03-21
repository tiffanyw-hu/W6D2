
const HanoiGame = require('./game.js');
const HanoiView = require('./view.js');

$( () => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  const view = new HanoiView(game, rootEl);
  view.setupTowers();
  const h1 = $('h1');
  h1.on("mouseover", event => {
    h1.text('Towers of De Stijl');
    $('li').css('border-radius', '0px');
    $('.li-0').css('background', 'red');
    $('.li-1').css('background', 'blue');
    $('.li-2').css('background', 'yellow');
    h1.on("mouseout", () => {
      h1.text('Towers of Hanoi');
      $('li').css('border-radius', '50px');
      $('li').css('background', 'grey');
    });
  });
  // console.log("load successful");
});
