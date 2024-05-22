'use strict';

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const dicePic = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currenSrc0 = document.getElementById('current--0');
let currenSrc1 = document.getElementById('current--1');
let overlayy = document.querySelector('.overlay').classList.add('hidden');
let winnerName = document.querySelector('.winner--name').textContent;
var defaultMode = function () {
  score0.textContent = '0';
  score1.textContent = '0';
  dicePic.classList.add('hidden');
  currenSrc0.textContent = '0';
  currenSrc1.textContent = '0';
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--winner');
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.overlay').classList.add('hidden');
  for (let i = 0; i < 2; i++) {
    score[i] = 0;
  }
};
var winnner = function () {
  if (score[0] >= 100) {
    document.querySelector('.player--0').classList.add('player--winner');
    document.querySelector('.overlay').classList.remove('hidden');
    document.querySelector('.winner--name').textContent = 'Player 1';
  } else if (score[1] >= 100) {
    document.querySelector('.player--1').classList.add('player--winner');
    document.querySelector('.overlay').classList.remove('hidden');
    document.querySelector('.winner--name').textContent = 'Player 2';
  }
};

let currentScore = 0;
let activePlayer = 0;
const score = [0, 0];
const active = function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
};
//startin of my game
score0.textContent = '0';
score1.textContent = '0';
dicePic.classList.add('hidden');
btnRoll.addEventListener('click', function () {
  const rollDice = Number(Math.trunc(Math.random() * 6) + 1);
  dicePic.classList.remove('hidden');
  dicePic.src = `dice-${rollDice}.png`;
  if (rollDice !== 1) {
    currentScore += rollDice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // activePlayer = activePlayer === 0 ? 1 : 0;
    active();
  }
});
btnHold.addEventListener('click', function () {
  score[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    score[activePlayer];
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  winnner();
  active();
});
document
  .querySelector('.winnerAnnoucement')
  .addEventListener('click', defaultMode);

btnNew.addEventListener('click', defaultMode);
document.querySelector('.overlay').addEventListener('click', defaultMode);
