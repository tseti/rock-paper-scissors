"use strict"

function computerPlay() {
  let choices = ['Rock', 'Paper', 'Scissors'];

  return choices[Math.trunc(Math.random() * 3)];
}

function play(playerSelection, computerSelection) {
  let [player, cpu] = [playerSelection.toLowerCase(), computerSelection.toLowerCase()];
  let result = (choice) => cpu === choice 
             ? `You Win! ${player} beats ${cpu}` 
             : `You Lose! ${cpu} beats ${player}`;

  switch (player) {
    case (cpu):         return `Draw! You both chose ${player}`;
    case ('rock'):      return result('scissors');
    case ('paper'):     return result('rock');
    case ('scissors'):  return result('paper');
    default:            return 'Invalid input!';
  }
}