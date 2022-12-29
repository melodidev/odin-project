export function openModal() {
  let modal = document.querySelector(".modal");
  modal.style.display = "block";
}

export function closeModal() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
}

export function setModalOkButton(text, handleClick) {
	let button = document.querySelector(".modal .btn-ok");
  button.textContent = text;
  // To remove event listeners
  let newButton = button.cloneNode(true);
	button.parentNode.replaceChild(newButton, button);
  newButton.addEventListener("click", handleClick);
}

document.querySelector(".modal .btn-cancel").addEventListener("click", (event) => {
  closeModal();
});
