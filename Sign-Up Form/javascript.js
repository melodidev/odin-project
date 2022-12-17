document.querySelector("button").addEventListener("click", () => {

	let password = document.querySelector("#password").value;
	let confirm = document.querySelector("#confirm_password").value;
	
	if (password != confirm) {
		document.querySelector("#password").style.outline = "2px solid red";
		document.querySelector("#confirm_password").style.outline = "2px solid red";
		document.querySelector(".error-msg").textContent = "* Passwords do not match";
	}
});