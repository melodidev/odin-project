let array = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

let getComputerChoice = () => array[Math.floor(Math.random() * 3)];

let playerSelection = () => {
	let playerMove = prompt("What is your move?").toLowerCase();
	return (array.includes(playerMove) ? playerMove : false);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
  	return "deuce";
  } else if (playerSelection == "rock") {
  	if (computerSelection == "scissors") {
  		playerScore++;
  		return `Player's ${playerSelection} beats computer's ${computerSelection}!`;
  	} else {
  		computerScore++;
  		return `Computer's ${computerSelection} beats player's ${playerSelection}.`;
  	}
  } else if (playerSelection == "paper") {
  	if (computerSelection == "rock") {
  		playerScore++;
  		return `Player's ${playerSelection} beats computer's ${computerSelection}!`;
  	} else {
  		computerScore++;
  		return `Computer's ${computerSelection} beats player's ${playerSelection}.`;
  	}
  } else if (playerSelection == "scissors") {
  	if (computerSelection == "paper") {
  		playerScore++;
  		return `Player's ${playerSelection} beats computer's ${computerSelection}!`;
  	} else {
  		computerScore++;
  		return `Computer's ${computerSelection} beats player's ${playerSelection}.`;
  	}
  }
}

function announceWinner (playerScore, computerScore) {
	if (playerScore > computerScore) {
 	return "You win!";
 } else if (playerScore < computerScore) {
 	return "Robots beats us 〣( ºΔº )〣";
 } else {
 	return "deuceee";
 }
}

function game() {
	for (let i = 0; i < 5; i++) {
		console.log(`${i + 1}. round:`);
  	console.log(playRound(playerSelection(), getComputerChoice()));
 	}
 	console.log(announceWinner(playerScore, computerScore));
}

game();