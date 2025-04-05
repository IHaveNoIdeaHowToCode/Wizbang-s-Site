let playerChoice = '?'
let cpuChoice = '?'
let playerImg = document.getElementById('player-choice')
let cpuImg = document.getElementById('cpu-choice')
let winsDiv = document.getElementById('wins')
let tiesDiv = document.getElementById('ties')
let losesDiv = document.getElementById('loses')

function drawScoreboard() {
  winsDiv.textContent = state.wins
  tiesDiv.textContent = state.ties
  losesDiv.textContent = state.loses
}


function rock() {
  console.log('user chose rock');
  playerChoice = 'rock';
  playerImg.src = 'rock.png';
  randomCpuChoice();
}

function paper() {
  console.log('user chose paper');
  playerChoice = 'paper';
  playerImg.src = 'paper.png';
  randomCpuChoice();
}

function scissors() {
  console.log('user chose scissors');
  playerChoice = 'scissors';
  playerImg.src = 'scissors.png';
  randomCpuChoice();
}

function randomCpuChoice() {
  console.log('🤖 computer is picking');
  let options = ['rock', 'paper', 'scissors'];
  let random = options[Math.floor(Math.random() * 3)];
  cpuChoice = random;
  cpuImg.src = random + ' .png';
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
  drawScoreboard();
}

let state = {
  wins: 0,
  loses: 0,
  ties: 0
}