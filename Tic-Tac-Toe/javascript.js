let startPage = document.querySelector(".start-page");
let status = document.querySelector(".status");
let boxContainer = document.querySelector(".box-container");
let btnReplay = document.querySelector(".btn-replay");
let boxArray = document.querySelectorAll(".box");
let announce = document.querySelector(".announce");

let turn = 0;
let fullBoxNum = 0;

let playerFactory = (name) => {
  return {
		name,
		boxes: [],
 	};
};

document.querySelector("form").addEventListener("submit", (event) => {
	event.preventDefault();
	startGame(event);
});

function startGame(event) {
	startPage.classList.add("display-none");
	status.classList.remove("none");
	boxContainer.classList.remove("none");
	btnReplay.classList.remove("visibility-hidden");

	let data = new FormData(event.target);
	let player1 = playerFactory(data.get("player1_name"));
	let player2 = playerFactory(data.get("player2_name"));
	status.textContent = `Waiting for ${player1.name}'s move.`;
	playGame(player1, player2);

	btnReplay.addEventListener("click", () => {
		replay(player1, player2);
	});
}

function playGame(player1, player2) {
	boxArray.forEach(box => box.addEventListener("click", (event) => {
		// if the box is empty
		let player = "";
		if (!box.textContent) {
			turn++;
			fullBoxNum++;
	  	if (turn % 2 == 1) {
	  		player = player1;
	  		box.textContent = "X";
	  		status.textContent = `Waiting for ${player2.name}'s move.`;
	  	} else {
	  		player = player2;
	  		box.textContent = "O";
	  		status.textContent = `Waiting for ${player1.name}'s move.`;
	  	}


	  	player.boxes.push(box.dataset.key);
	  	console.log(player.name);
	  	console.log(player.boxes);
	  	checkIfFinished(player, fullBoxNum);
		}
	}));
}

function checkIfFinished(player, fullBoxNum) {
	let combinations = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
	combinations.forEach(arr => {
		if (arr.every(el => player.boxes.includes(String(el)))) {
			status.classList.add("visibility-hidden");
			boxContainer.classList.add("pointer-events-none");
			announce.textContent = `${player.name} wins!`;
		} else if (fullBoxNum == 9) {
			status.classList.add("visibility-hidden");
			boxContainer.classList.add("pointer-events-none");
			announce.textContent = `It's a tie!`;
		}
	});
}

function replay(player1, player2) {
	status.textContent = `Waiting for ${player1.name}'s move.`;
	status.classList.remove("visibility-hidden");
	boxContainer.classList.remove("pointer-events-none");
	announce.textContent = "";
	boxArray.forEach(box => box.textContent = "");

  turn = 0;
  fullBoxNum = 0;

	player1.boxes = [];
	player2.boxes = [];

	playGame(player1, player2);
}
