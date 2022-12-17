let x = null;
let y = null;
let operator = null;

setTimeout(reset, 1000);

document.querySelector("#reset").addEventListener("click", reset);
document.querySelector("#backspace").addEventListener("click", backspace);
document.querySelector("#equal").addEventListener("click", equal);
document.querySelector("#float").addEventListener("click", float);

let numbers = document.querySelectorAll(".number");
numbers.forEach(number => number.addEventListener("click", takeNumber));

let operators = document.querySelectorAll(".operator");
operators.forEach(operator => operator.addEventListener("click", operate));

document.addEventListener("keydown", (event) => {
	let operators = ["+", "-", "*", "/"];
	let key = event.key;
	
	if (key == "0") {
		takeNumber(event, 0); 
	} else if (Number(key)) {
		takeNumber(event, key);
	} else if (operators.includes(key)) {
		operate(event, key);
	} else if (key == ".") {
		float();
	} else if (key == "Enter") {
		equal();
	} else if (key == "Backspace") {
		backspace();
	} else if (key == "Escape") {
		reset();
	}
})

function getCurrentNumber() {
	return (operator == null) ? x : y;
}

function putCurrentNumber(num) {
	if (operator == null) {
		x = num;
	} else {
		y = num;
	}
	console.log(x, operator, y);
}

function showResult(number) {
	if (exceedMax(number)) { return; }
	document.querySelector("#result").textContent = number;
}

function displayError() {
	showResult("woot");
	setTimeout(reset, 2000);
}

function exceedMax(number) {
	if (String(number).length > 10) {
		console.log("exceeds max");
		console.log(number);
		displayError();
		return true;
	}
	return false;
}

function reset() {
	x = null;
	y = null;
	operator = null;
	showResult(0);
}

function backspace() {
	if (document.querySelector("#result").textContent.length == 1) {
		showResult(0);
		putCurrentNumber(0);
		return; 
	}

	let num = getCurrentNumber();
	if (num == null) {
		showResult(0);
		return;
	}

	num = String(num).slice(0, String(num).length - 1);
	showResult(num);
	putCurrentNumber(num);
}

function equal() {
	x = calculate(operator, x, y);
	y = null;
	operator = null;
}

function float() {
	let num = getCurrentNumber();
	console.log(num);
	if (num == null) { num = 0; }
	console.log(num);

	for (let i = 0; i < num.length; i++) {
		if (num[i] == ".") { return; }
	}

	num += ".";
	putCurrentNumber(num);
	showResult(num);
}

function takeNumber(event, p = event.target.textContent) {
	let num = getCurrentNumber();
	if (num == null) {
		num = p;
	} else {
		num += p;
		if (exceedMax(num) == true) { return; }
		// Easter egg
		if (num == "1837837") {
			showResult(":)");
			setTimeout(reset, 2000);
			return;
		}
	}

	putCurrentNumber(num);
	showResult(num);
}

function operate(event, p = event.target.dataset.value) {
	if (!operator) {	
		operator = p;
	}

	x = calculate(operator, x, y);
	y = null;
	operator = p;
}

function calculate(operator, x, y) {
	let result = x;

	if (y == null) {
		return result;
	}

	x = Number(x);
	y = Number(y);

	if (operator == "+") {
		result = x + y;
	} else if (operator == "-") {
		result = x - y;
	} else if (operator == "*") {
		result = (x * y).toFixed(2);
	} else if (operator == "/") {
		if (y == 0) {
			console.log("y is 0");
			displayError();
			return result;
		}
		result = (x / y).toFixed(2);
		
		if (result.slice(-3) == ".00") {
			result = Math.round(result);
		}
	}

	result = trimFloatZeros(result);
	showResult(result);
	return result;
}

function trimFloatZeros(num) {
	for (let i = 0; i < num.length; i++) {
		if (num[i] == ".") {
			if (num[num.length - 1] == "0") {
				num = num.slice(0, num.length - 1);
			}
			return num;
		}
	}
	return num;
}