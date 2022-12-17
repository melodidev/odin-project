function getContact() {
	document.querySelector(".heading").textContent = "Contact";
	let text = document.querySelector(".text");
	text.textContent = "Please contact us via a seashell.";

	if (document.querySelector("ul")) {
		text.removeChild(document.querySelector("ul"));
	}

	let tab1 = document.querySelector(".tab-1");
	tab1.classList.remove("display-none");
	let tab2 = document.querySelector(".tab-2");
	tab2.classList.add("display-none");
	let tab3 = document.querySelector(".tab-3");
	tab3.classList.remove("display-none");
	let tab4 = document.querySelector(".tab-4");
	tab4.classList.add("display-none");
}

export { getContact };