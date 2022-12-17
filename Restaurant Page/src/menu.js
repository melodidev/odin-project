function getMenu() {
	document.querySelector(".heading").textContent = "Menu";
	let text = document.querySelector(".text");
	text.textContent = "";
	let list = document.createElement("ul");
	let li = document.createElement("li");
	li.textContent = "Grilled Fish";
	list.appendChild(li);
	let li1 = document.createElement("li");
	li1.textContent = "Kani Maki Sushi";
	list.appendChild(li1);
	let li2 = document.createElement("li");
	li2.textContent = "Girit Cheese Salad";
	list.appendChild(li2);
	let li3 = document.createElement("li");
	li3.textContent = "Drunken Sailor";
	list.appendChild(li3);
	text.appendChild(list);

	let tab1 = document.querySelector(".tab-1");
	tab1.classList.remove("display-none");
	let tab2 = document.querySelector(".tab-2");
	tab2.classList.add("display-none");
	let tab3 = document.querySelector(".tab-3");
	tab3.classList.add("display-none");
	let tab4 = document.querySelector(".tab-4");
	tab4.classList.remove("display-none");
}

export { getMenu };

