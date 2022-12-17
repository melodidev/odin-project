function getHome() {
	document.querySelector(".heading").textContent = "Siren's Shrine";
	let text = document.querySelector(".text");
	text.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. One shall not explore without diving into deep. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

	if (document.querySelector("ul")) {
		text.removeChild(document.querySelector("ul"));
	}

	let tab1 = document.querySelector(".tab-1");
	tab1.classList.add("display-none");
	let tab2 = document.querySelector(".tab-2");
	tab2.classList.remove("display-none");
	let tab3 = document.querySelector(".tab-3");
	tab3.classList.add("display-none");
	let tab4 = document.querySelector(".tab-4");
	tab4.classList.remove("display-none");
}

export { getHome };