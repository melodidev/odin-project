let options = ["unread", "reading", "finished", "dropped"];

function Book(name, author, page, status) {
	this.name = name
	this.author = author
	this.page = page
	this.status = status
}

let myLibrary = [];

// Add first couple of books for display
addBookToLibrary(new Book("The Hobbit", "J. R. R. Tolkien", "295", "finished"));
addBookToLibrary(new Book("Hello World", "Hannah Fry", "336", "finished"));
addBookToLibrary(new Book("The Emperor's New Mind", "Roger Penrose", "602", "unread"));
addBookToLibrary(new Book("Howl's Moving Castle", "Diana Wynne Jones", "339", "reading"));
addBookToLibrary(new Book("Eloquent JavaScript", "Marijn Haverbeke", "224", "dropped"));

function addBookToLibrary(book) {
  myLibrary.push(book);
  commitToTable(book);
}

// Create rows and their values, add them to table
function commitToTable(book) {
	let tableRow = document.createElement("tr");

	let tableRowName = tableRow.appendChild(document.createElement("td"));
	tableRowName.textContent = book.name;

	let tableRowAuthor = tableRow.appendChild(document.createElement("td"));
	tableRowAuthor.textContent = book.author;
	let tableRowPage = tableRow.appendChild(document.createElement("td"));
	tableRowPage.textContent = book.page;

	let tableRowStatus = tableRow.appendChild(document.createElement("td"));
	let select = tableRowStatus.appendChild(document.createElement("select"));
	select.setAttribute("required", true);
	select.classList.add("change-status");

	for (let i = 0; i < options.length; i++) {
		let option = select.appendChild(document.createElement("option"));
		option.textContent = options[i];
		if (book.status == options[i]) {
			option.setAttribute("selected", true);
		}
		select.appendChild(option);
	}


	// TODO If select value change (change addeventlistener), change dtb

	let tableRowButton = tableRow.appendChild(document.createElement("td"));
	let button = tableRowButton.appendChild(document.createElement("button"));
	button.classList.add("delete");

	// When delete clicked, delete the element
	// TODO change dtb
	button.addEventListener("click", () => {
		document.querySelector("tbody").removeChild(tableRow);
	});

	let icon = button.appendChild(document.createElement("i"));
	icon.classList.add("fa-solid");
	icon.classList.add("fa-trash");
	icon.classList.add("fa-xl");

	document.querySelector("tbody").appendChild(tableRow);
}

// When button is clicked, add new book to table
document.querySelector("form").addEventListener("submit", (event) => {
	event.preventDefault();

	const form = event.target;
	const data = new FormData(form);

	addBookToLibrary(new Book(
		data.get('name'),
		data.get('author'),
		data.get('page'),
		data.get('status')
	));

	form.reset();
});
