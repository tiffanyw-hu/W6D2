const View = require('./ttt-view.js');
const Game = require('./game.js');

console.log('main.js loaded');

$( () => {
  const view = new View(new Game(), $('figure'));
  view.setupBoard();
  view.bindEvents();
});
