'use strict';
let diceValue = 0;
let currentScore0 = 0;
let currentScore1 = 0;
let finalScore0 = 0;
let finalScore1 = 0;
let player1Playing = true;
let playing = true;

// Change Player
const changePlayer = function () {
  player1Playing = !player1Playing;
  if (player1Playing) {
    currentScore1 = 0;
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');

    document.querySelector('#current--1').textContent = currentScore1;
  } else {
    currentScore0 = 0;
    document.querySelector('#current--0').textContent = currentScore0;
    document.querySelector('.player--1').classList.add('player--active');
    document.querySelector('.player--0').classList.remove('player--active');
  }
};

const diceRoll = function () {
  if (playing) {
    document.querySelector('.dice').style.display = 'block';
    diceValue = Math.floor(Math.random() * 6 + 1);

    document.querySelector('.dice').src = `dice-${diceValue}.png`;
    if (diceValue !== 1) {
      if (player1Playing) {
        currentScore0 += diceValue;
        document.querySelector('#current--0').textContent = currentScore0;
      } else if (!player1Playing) {
        currentScore1 += diceValue;
        document.querySelector('#current--1').textContent = currentScore1;
      }
    } else {
      changePlayer();
    }
  }
};

document.querySelector('.btn--roll').addEventListener('click', diceRoll);

document.querySelector('.btn--hold').addEventListener('click', function () {
  if (playing) {
    if (player1Playing && currentScore0 === 0) {
      alert('Player 1! Please Roll The Dice First');
    } else if (!player1Playing && currentScore1 === 0) {
      alert('Player 2! Please Roll The Dice First');
    }
    if (player1Playing && currentScore0 !== 0) {
      finalScore0 += currentScore0;
      currentScore0 = 0;
      document.querySelector('#score--0').textContent = finalScore0;
      document.querySelector('#current--0').textContent = currentScore0;
      // document.querySelector('.player--0').classList.add = '.player--winner';
    } else if (!player1Playing && currentScore1 !== 0) {
      finalScore1 += currentScore1;
      currentScore1 = 0;
      document.querySelector('#score--1').textContent = finalScore1;
      document.querySelector('#current--1').textContent = currentScore1;
      // document.querySelector('.player--1').classList.add = '.player--winner';
    }
    // Player 1 wins
    if (finalScore0 >= 100) {
      playing = false;
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player--0').classList.remove('player--active');
      document.querySelector('.player--0').classList.add('player--winner');
    }
    if (finalScore1 >= 100) {
      playing = false;
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player--1').classList.remove('player--active');
      document.querySelector('.player--1').classList.add('player--winner');
    }

    if (playing) {
      changePlayer();
    }
    // } else {
  }
});

const newGame = function () {
  currentScore0 = 0;
  currentScore1 = 0;
  finalScore0 = 0;
  finalScore1 = 0;
  player1Playing = false;
  playing = true;
  changePlayer();
  document.querySelector('#score--1').textContent = finalScore1;
  document.querySelector('#current--1').textContent = currentScore1;
  document.querySelector('#score--0').textContent = finalScore0;
  document.querySelector('#current--0').textContent = currentScore0;
  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
};

document.querySelector('.btn--new').addEventListener('click', newGame);
