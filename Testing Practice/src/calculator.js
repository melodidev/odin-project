const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const divide = function(num1, num2) {
	return Math.round((num1 / num2) * 10) / 10;
}

const multiply = function(array) {
	let result = (array.length == 0) ? 0 : 1;
	array.forEach(element => (result *= element));
	return result;
};

module.exports = {
	add,
	subtract,
	divide,
	multiply
};