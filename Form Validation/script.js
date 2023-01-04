let form = document.querySelector("form");
let data = new FormData(form);

for (const key of data.keys()) {
  let element = document.getElementById(key);
  let elementError = document.querySelector(`#${key} + span.error`);

  addEventListeners(element, elementError);
}

function addEventListeners(element, elementError) {
  element.addEventListener("focusout", (event) => {
    if (element.validity.valid) {
      elementError.textContent = "";
      elementError.className = "";
    } else {
      showError(element, elementError);
    }
  });
}

form.addEventListener("submit", (event) => {

  for (const key of data.keys()) {
    let element = document.getElementById(key);
    let elementError = document.querySelector(`#${key} + span.error`);

    if (!element.validity.valid) {
      showError(element, elementError);
      event.preventDefault();
      return;
    }
  }

  alert("(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧");
});

function showError(element, elementError) {
  if (element.validity.valueMissing) {
    elementError.textContent = "This area should not be blank.";
  } else if (element.validity.typeMismatch) {
    elementError.textContent = "Input type must be valid.";
  } else if (element.validity.tooShort) {
    elementError.textContent = `Email should be at least ${element.minLength} characters; you entered ${element.value.length}.`;
  }

  elementError.className = "error";
}

/* TODO
function passwordMatch() {
  let password = data.get("password");
  let confirmation = data.get("confirmation");
  let passwordError = document.querySelector(`#password + span.error`);

  if (password != confirmation) {
    passwordError.className = "error";
    passwordError.textContent = "Passwords should be match.";
  }
}
*/