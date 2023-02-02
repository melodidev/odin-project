import {
	checkPlayerVictory,
	checkTie,
	getCurrentPlayer,
	getPlayerData,
	markBox,
	nextTurn,
	restartGame,
} from './game';

let player2IsComputer = document.querySelector(".ai");
let status = document.querySelector(".status");
let boxContainer = document.querySelector(".box-container");
let boxArray = document.querySelectorAll(".box");
let announce = document.querySelector(".announce");
let player2Input = document.getElementById("player2_name");
let player2Label = document.querySelector(".player2-name");

// Change start page
player2IsComputer.addEventListener("click", () => {
	let player2Input = document.getElementById("player2_name");
	let player2Label = document.querySelector(".player2-name");
	if (document.querySelector(".ai").checked) {
		player2Label.textContent = "Imaginary Friend";
		player2Input.removeAttribute("required");
	} else {
		player2Label.textContent = "Player 2";
		player2Input.setAttribute("required", "");
	}
});

// Start game
document.querySelector("form").addEventListener("submit", (event) => {
	event.preventDefault();

	document.querySelector(".start-page").classList.add("display-none");
	status.classList.remove("none");
	boxContainer.classList.remove("none");
	document.querySelector(".btn-replay").classList.remove("visibility-hidden");

	let data = new FormData(event.target);

	let [player1, player2] = getPlayerData(data);

	if (player2IsComputer.checked) {
		if (!data.get("player2_name")) {
			player2.name = "Imaginary Friend";
		}
	}

	status.textContent = `Waiting for ${player1.name}'s move.`;
});

boxArray.forEach(box => box.addEventListener("click", (event) => {
	let boxIndex = parseInt(box.dataset.key) - 1;

	if (markBox(boxIndex)) {
		let currentPlayer = getCurrentPlayer();

		box.textContent = currentPlayer.symbol;

		if (checkPlayerVictory(currentPlayer)) {
			announce.textContent = `${currentPlayer.name} wins!`;
			status.classList.add("visibility-hidden");
			boxContainer.classList.add("pointer-events-none");
			return;
		}
		if (checkTie()) {
			announce.textContent = "It's a tie!";
			status.classList.add("visibility-hidden");
			boxContainer.classList.add("pointer-events-none");
			return;
		}

		nextTurn();
		currentPlayer = getCurrentPlayer();
		status.textContent = `Waiting for ${currentPlayer.name}'s move.`;
	}
}));

document.querySelector(".btn-replay").addEventListener("click", () => {
	status.classList.remove("visibility-hidden");
	boxContainer.classList.remove("pointer-events-none");
	announce.textContent = "";

	boxArray.forEach(box => box.textContent = "");

  restartGame();
	let currentPlayer = getCurrentPlayer();
	status.textContent = `Waiting for ${currentPlayer.name}'s move.`;
});
