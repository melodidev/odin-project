// Default
createSkecth();
draw();

// Create grid
function createSkecth(grid='16') {
	let div = null;
	let row = null;
	for (let i = 0; i < grid; i++) {
		row = document.createElement("div");
		row.className = "row";
		document.querySelector(".container").appendChild(row);

		for (let i = 0; i < grid; i++) {
			div = document.createElement("div");
			div.className = "box";
			row.appendChild(div);
		}
	}
}

// Construct a new skecth, remove container and create a new one
document.querySelector("button").addEventListener("click", () => {

	let grid = null;
	do {
		grid = prompt("Enter grid size between 1-100.");
		grid = parseInt(grid);
	} while (grid < 0 || grid > 100 || (Number.isInteger(grid)) == false)

	document.querySelector("body").removeChild(document.querySelector(".container"));
	container = document.createElement("div");
	container.className = "container";
	document.querySelector("body").appendChild(container);
	createSkecth(grid);
	draw();
});

function draw() {
	let colorCode = 255;
	document.querySelectorAll(".box").forEach(box => box.addEventListener("mouseover", () => {
	colorCode = colorCode - (colorCode/10);
	box.style.backgroundColor = `rgb(${colorCode},${colorCode},${colorCode})`;
	}));
}


