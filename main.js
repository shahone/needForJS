'use strict';

let score = document.querySelector('.score'),
  game = document.querySelector('.game'),
  start = document.querySelector('.start'),
  gameArea = document.querySelector('.game-area'),
  car = document.createElement('div');

car.classList.add('car');

const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
};

const setting = {
  start: false,
  score: 0,
  speed: 3,
};


function startGame() {
  start.classList.add('hide');
  setting.start = true;
  gameArea.appendChild(car);
  requestAnimationFrame(playGame);
}
start.addEventListener('click', startGame);


function playGame() {
  console.log('play!');
  if (setting.start) {
    requestAnimationFrame(playGame);
  }
}


function startRun(e) {
  e.preventDefault();
  keys[e.key] = true;
}
document.addEventListener('keydown', startRun);


function stopRun(e) {
  e.preventDefault();
  keys[e.key] = false;
}
document.addEventListener('keyup', stopRun);