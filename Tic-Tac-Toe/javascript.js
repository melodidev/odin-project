let startPage = document.querySelector(".start-page");
let status = document.querySelector(".status");
let boxContainer = document.querySelector(".box-container");
let btnReplay = document.querySelector(".btn-replay");
let boxArray = document.querySelectorAll(".box");
let announce = document.querySelector(".announce");
let player2Input = document.getElementById("player2_name");
let player2Label = document.querySelector(".player2-name");


let combinations = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];


let playerFactory = (name) => {
  return {
		name,
		boxes: [],
 	};
};

document.querySelector("form").addEventListener("submit", (event) => {
	let data = new FormData(event.target);
	let player1 = playerFactory(data.get("player1_name"));
	let player2 = playerFactory(data.get("player2_name"));

	interface.start(player1, player2);
});















let turn = 0;
let fullBoxNum = 0;

let game = (function() {
	function play(player1, player2) {

		boxArray.forEach(box => box.addEventListener("click", (event) => {
			let player = "";
			if (!box.textContent) {
				turn++;
				
		  	if (turn % 2 == 1) {
		  		player = player1;
		  		
		  		interface.markBox(box, "X");
		  		interface.changeStatus(player2.name);
		  		player.boxes.push(box.dataset.key);

	  			if (document.querySelector(".ai").checked) {
	  				player.boxes.push(box.dataset.key);
	  				let player1Combinations = game.getPossibleCombinations(player1.boxes, player2.boxes);
	  				
	  				interface.changeStatus(player2.name);
						boxContainer.classList.add("pointer-events-none");

						setTimeout(function (){
						  game.playAsComputer(player1, player2, player1Combinations);
						  interface.changeStatus(player1.name);
						  boxContainer.classList.remove("pointer-events-none"); 
						}, 500)

	  				turn = 0;
					}

		  	} else {
		  		player = player2;
		  		interface.markBox(box, "O");
		  		interface.changeStatus(player1.name);
		  		player.boxes.push(box.dataset.key);
		  	}
		  	game.checkIfFinished(player, player1, player2);
			}
		}));

		btnReplay.addEventListener("click", () => {
			interface.replay(player1, player2);
			game.play(player1, player2);
		});
	}

	function checkIfFinished(player, player1, player2) {
		fullBoxNum = player1.boxes.length + player2.boxes.length;
		console.log(player1);
		console.log(player2);

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

	function getPossibleCombinations(playerBoxes, otherPlayerBoxes) {
		let playerCombinations = [];
		combinations.forEach(arr => {
			playerBoxes.forEach(el => {
				if (arr.includes(parseInt(el)) && !playerCombinations.includes(arr)) {
					playerCombinations.push(arr);
				}
			});
		});

		let playerCombinationsCopy = playerCombinations.slice();

		playerCombinationsCopy.forEach(arr => {
			otherPlayerBoxes.forEach(el => {
				if (arr.includes(parseInt(el))) {
					let index = playerCombinations.indexOf(arr);
					if (index > -1) {
					  playerCombinations.splice(index, 1);
					}
				}
			});
		});

		return playerCombinations;
	}

	function playAsComputer(player1, player2, player1Combinations) {
		let possibleMoves = [];
		player1Combinations.forEach(arr => {
			arr.forEach(el => {
				if (!player1.boxes.includes(String(el))
				 && !player2.boxes.includes(String(el))
				 && !possibleMoves.includes(String(el))) {
					possibleMoves.push(String(el));
				}
			});
		});
		
		let random = possibleMoves[Math.floor(Math.random()*possibleMoves.length)];
		if (random && !game.checkIfFinished(player2, player1, player2)) {
			document.querySelector(`[data-key='${random}']`).textContent = "O";
	  	player2.boxes.push(random);
		}
		
		game.checkIfFinished(player2, player1, player2);
	}





	return {
		play,
		checkIfFinished,
		getPossibleCombinations,
		playAsComputer
	}
})();


let interface = (function() {

	let _player2IsComputer = document.querySelector(".ai");

	function player2AI() {
		_player2IsComputer.addEventListener("click", () => {
			if (document.querySelector(".ai").checked) {
				player2Label.textContent = "Imaginary Friend";
				player2Input.removeAttribute("required");
			} else {
				player2Label.textContent = "Player 2";
				player2Input.setAttribute("required", "");
			}
		});
	}

	function start(player1, player2) {
		startPage.classList.add("display-none");
		status.classList.remove("none");
		boxContainer.classList.remove("none");
		btnReplay.classList.remove("visibility-hidden");
		interface.changeStatus(player1.name);
		game.play(player1, player2);
	}

	function formSubmit(player1) {
		document.querySelector("form").addEventListener("submit", (event) => {
			let data = new FormData(event.target);
			// let player1 = playerFactory(data.get("player1_name"));
			// let player2 = playerFactory(data.get("player2_name"));
			if (_player2IsComputer.checked) {
				if(!data.get("player2_name")) {
					player2.name = "Imaginary Friend";
				}
			}

			event.preventDefault();
			// interface.start(player1);
		});
	}

	function changeStatus(name) {
		status.textContent = `Waiting for ${name}'s move.`;
	}

	function markBox(box, mark) {
		box.textContent = mark;
	}

	function replay(player1, player2) {
		status.textContent = `Waiting for ${player1.name}'s move.`;
		status.classList.remove("visibility-hidden");
		boxContainer.classList.remove("pointer-events-none");
		announce.textContent = "";
		boxArray.forEach(box => box.textContent = "");

	  turn = 0;
		player1.boxes = [];
		player2.boxes = [];
	}

	return {
		player2AI,
		start,
		formSubmit,
		changeStatus,
		markBox,
		replay
	}
})();

interface.player2AI();
interface.formSubmit();

