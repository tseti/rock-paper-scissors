"use strict"
const PLAYER = 0;
const CPU = 1;
const DRAW = -1;

const scoreBoard    = document.querySelector('.scoreboard');
const playerScore   = document.querySelector('#player-score');
const cpuScore      = document.querySelector('#cpu-score');
const resultDisplay = document.querySelector(".result-display");
const selections    = document.querySelector('.selections');


let score = [0, 0];
let gameOver = false;

resultDisplay.classList.add('hidden');

document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', function(e) {
    game(e.target.getAttribute('id'));
  });
});

function computerPlay() {
  let choices = ['rock', 'paper', 'scissors'];

  return choices[Math.trunc(Math.random() * 3)];
}

function play(player, cpu) {
  let resolve = (choice) => cpu === choice ? PLAYER : CPU;

  switch (player) {
    case (cpu):         return DRAW;
    case ('rock'):      return resolve('scissors');
    case ('paper'):     return resolve('rock');
    case ('scissors'):  return resolve('paper');
  }
}

function game(player) {
  if (gameOver) resetGame();

  let cpu = computerPlay();
  let result = play(player, cpu);
  
  score[result]++;
  updateScoreBoard();
  showSelections(player, cpu, result);

  if (score[result] === 5) {
    displayResult(result);
    gameOver = true;
  }
}

function updateScoreBoard() {
  playerScore.textContent = score[0];
  cpuScore.textContent    = score[1];
}

function showSelections(player, cpu, result) {
  selections.textContent = result === PLAYER 
      ? `You won! ${player} beats ${cpu}`
      : result === CPU ? `You lose! ${cpu} beats ${player}`
      : `You draw! You both selected ${cpu}`;
}

function displayResult(result) {
  if (result === PLAYER) {
    resultDisplay.textContent = 'YOU WON';
    resultDisplay.classList.add('winner');
    resultDisplay.classList.remove('loser');
  } else {
    resultDisplay.textContent = 'YOU LOSE';
    resultDisplay.classList.add('loser');
    resultDisplay.classList.remove('winner');
  }

  resultDisplay.classList.toggle('hidden');
}

function resetGame() {
  score = [0, 0];
  updateScoreBoard();
  displayResult(-1);
  gameOver = false;
}