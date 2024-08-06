'use strict';
//score count.
let score = 20;
//high score
let highScore = 0;

//func for generating Random Number..
let randomNum;
const randomNumber = () => {
  randomNum = Math.floor(Math.random() * 20) + 1;
  console.log(randomNum);
};
//on load the page give a random number!
document.onload = randomNumber();

// checking if too low or too high!
const checker = value => {
  if (score) {
    document.querySelector('.message').textContent = value;
    score--;
    document.querySelector('.score').textContent = score;
    if (score === 0) {
      document.querySelector('.message').textContent = 'You Lost the Game!';
      document.querySelector('body').style.backgroundColor = '#F0301E';
    }
  }
};

//getting value from input and error handler.
document.querySelector('.check').addEventListener('click', function () {
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';

  let entredValue = Number(document.querySelector('.guess').value);

  //error empty input
  if (!entredValue) {
    document.querySelector('.message').textContent = 'No Number!';

    // option if input correct .
  } else if (entredValue === randomNum) {
    document.querySelector('.number').textContent = randomNum;
    document.querySelector('.message').textContent = 'Correct!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //adding the highScore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // option if input too high.
  else if (entredValue > randomNum) {
    ///////
    checker('too High!');
  }

  // option if input too low .
  else if (entredValue < randomNum) {
    checker('too Low!');
  }
});
// Again button behaviour
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Guess a Number!';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  randomNumber();
});
