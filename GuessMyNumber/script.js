'use strict';
let score = 20;
let highScore = 0;
let randNumber = Math.floor(Math.random() * 20 + 1);
console.log(randNumber, 'random number');

const guessMyNumber = function () {
  const myNumber = Number(document.getElementsByClassName('guess')[0].value);
  console.log(myNumber);

  if (!myNumber) {
    document.getElementById('message').innerHTML = 'Choose between 1 to 20!';
  } else if (randNumber === myNumber) {
    document.getElementById('message').innerHTML = 'Correct Number!';
    document.getElementById('number').innerHTML = myNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.getElementsByClassName('highscore')[0].innerHTML = highScore;
    }
  } else if (randNumber !== myNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        randNumber < myNumber ? 'Too High!' : 'Too Low';
      score--;
      document.getElementById('score').textContent = score;
    } else {
      document.getElementById('message').textContent = 'You Lost the Game!!';
      document.getElementById('score').textContent = 0;
    }
  }
  // } else {
  //   document.getElementById('message').innerHTML = 'Too Low!';
  //   document.getElementById('score').innerHTML = --score;
  // }
  return highScore;
};

document.querySelector('.again').addEventListener('click', function () {
  randNumber = Math.floor(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('#message').textContent = 'Start Guessing...';
  document.querySelector('#number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('#score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});

// const refresh = function () {
//   randNumber = Math.floor(Math.random() * 20 + 1);
//   document.getElementById('message').innerHTML = 'Start Guessing...';
//   document.getElementById('number').innerHTML = '?';
//   document.getElementsByTagName('body')[0].style.backgroundColor = 'Black';
//   document.getElementById('score').innerHTML = 20;
//   document.getElementsByClassName('guess')[0].value = '';
// };
// console.log(score);
// console.log(highScore);
