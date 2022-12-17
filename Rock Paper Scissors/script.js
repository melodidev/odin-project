let playerScore = 0;
let computerScore = 0;
let round = 0;

let output = document.querySelector(".output");

document.querySelectorAll("button").forEach(button => button.addEventListener("click", (event) => {
  let playerSelection = button.dataset.key;
  playRound(playerSelection, getComputerChoice());
  round++;

  if (round > 4) {
    console.log(announceWinner(playerScore, computerScore));
    return;
  }
}));

let array = ["rock", "paper", "scissors"];
let getComputerChoice = () => array[Math.floor(Math.random() * 3)];

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    output.textContent = "Tie.";
    return;
  } else if (playerSelection == "rock") {
    if (computerSelection == "scissors") {
      playerScore++;
      output.textContent = `Player's ${playerSelection} beats computer's ${computerSelection}!`;
      return;
    } else {
      computerScore++;
      output.textContent = `Computer's ${computerSelection} beats player's ${playerSelection}.`;
      return;
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      playerScore++;
      output.textContent = `Player's ${playerSelection} beats computer's ${computerSelection}!`;
      return;
    } else {
      computerScore++;
      output.textContent = `Computer's ${computerSelection} beats player's ${playerSelection}.`;
      return;
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      playerScore++;
      output.textContent = `Player's ${playerSelection} beats computer's ${computerSelection}!`;
      return;
    } else {
      computerScore++;
      output.textContent = `Computer's ${computerSelection} beats player's ${playerSelection}.`;
      return;
    }
  }
}

function announceWinner (playerScore, computerScore) {
  let result = document.querySelector(".button-container");
  result.innerHTML = ""; 


  if (playerScore > computerScore) {
    output.textContent = "You win!";
    return;
 } else if (playerScore < computerScore) {
  output.textContent = "Robots beats us 〣( ºΔº )〣";
  return;
 } else {
  output.textContent = "Tie.";
  return;
 }
}