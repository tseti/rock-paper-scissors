"use strict"
const PLAYER = 0;
const CPU = 1;
const DRAW = -1;

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

function game() {
  let score = [0, 0];
  for (let i = 0; i < 5; i++) {
    let cpu = computerPlay();
    let player = prompt('Write rock, paper or scissors').toLowerCase();

    let result = play(player, cpu);
    score[result]++;
    displayResult(result, player, cpu);

    if (score[PLAYER] === 3 || score[CPU] === 3) break;
  }

  displayFinalScore(score);
}

function displayResult(result, player, cpu) {

  if (result === PLAYER) {
    console.log(`You Won! ${player} beats ${cpu}`);
  } else if (result === CPU) {
    console.log(`You Lose! ${cpu} beats ${player}`);
  } else {
    console.log(`Draw! You both chose ${player}`);
  }

}

function displayFinalScore(score) {
  let str = `Final Score:\nPlayer| ${score[PLAYER]} : ${score[CPU]} |CPU\n`;

  str += score[PLAYER] > score[CPU] ? 'YOU WON!' 
      : score[PLAYER] === score[CPU] 
      ? 'DRAW!' : 'YOU LOSE!'

  console.log(str);
}