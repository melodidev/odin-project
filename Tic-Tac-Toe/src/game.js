let winCombinations = [
	// Horizontal
	[1,2,3],
	[4,5,6],
	[7,8,9],
	// Vertical
	[1,4,7],
	[2,5,8],
	[3,6,9],
	// Diagonal
	[1,5,9],
	[3,5,7],
];

let turn = 0;

let board = [
	null, null, null,
	null, null, null,
	null, null, null,
];

let player1;
let player2;

let playerFactory = (name, symbol) => {
  return {
		name,
		symbol,
 	};
};

export function getPlayerData(data) {
	player1 = playerFactory(data.get("player1_name"), "X");
	player2 = playerFactory(data.get("player2_name"), "O");
	return [player1, player2];
}

export function markBox(boxIndex) {
	if (board[boxIndex]) {
		return false;
	}

	let currentPlayer = getCurrentPlayer();
	board[boxIndex] = currentPlayer.symbol;

	return true;
}

export function nextTurn() {
	turn++;
}

export function restartGame() {
	turn = 0;
	board.fill(null);
}

export function getCurrentPlayer() {
	return turn % 2 == 0 ? player1 : player2;
}

export function checkPlayerVictory(currentPlayer) {
	for (let combination of winCombinations) {
		if (combination.every(i => board[i - 1] === currentPlayer.symbol)) {
			return true;
		}
	}

	return false;
}

export function checkTie() {
	return board.every(box => box !== null);
}
