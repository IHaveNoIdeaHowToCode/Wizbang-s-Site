let playerChoice = '?'
let cpuChoice = '?'
let playerImg = document.getElementById('player-choice')
let cpuImg = document.getElementById('cpu-choice')



function rock() {
  console.log('user chose rock');
  playerChoice = 'rock';
  playerImg.src = 'rock.png';
  randomCpuChoice();
}

function paper() {
  console.log('user chose paper');
  playerChoice = 'paper';
  randomCpuChoice();
}

function scissors() {
  console.log('user chose scissors');
  playerChoice = 'scissors';
  randomCpuChoice();
}

function randomCpuChoice() {
  console.log('🤖 computer is picking');
  let options = ['rock', 'paper', 'scissors'];
  let random = options[Math.floor(Math.random() * 3)];
  cpuChoice = random;
  console.log('🤖 picks', cpuChoice);
  playGame();
}

function playGame() {
  if (playerChoice == cpuChoice) {
    console.log('You Tied!');
    state.ties += 1;
  } else if (playerChoice == 'rock' && cpuChoice == 'scissors') {
    console.log('You won!');
    state.wins += 1;
  } else if (playerChoice == 'paper' && cpuChoice == 'rock') {
    console.log('You won!🎉');
    state.wins += 1;
  } else if (playerChoice == 'scissors' && cpuChoice == 'paper') {
    console.log('You won!🎉');
    state.wins += 1;
  } else {
    console.log('You lose!');
    state.loses += 1;
  }
}

let state = {
  wins: 0,
  loses: 0,
  ties: 0
}