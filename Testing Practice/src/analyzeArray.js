const analyzeArray = function(arr) {

	if (!Array.isArray(arr)) return false;

	function average(arr) {
		let sum = 0;
		arr.forEach(el => sum = el + sum);
		return Math.round((sum / arr.length) * 10) / 10;
	}

	function min(arr) {
		let min = arr[0];
		arr.forEach(el => {
			if (el <= min) { min = el };
		});

		return min;
	}

	function max(arr) {
		let max = arr[0];
		arr.forEach(el => {
			if (el >= max) { max = el };
		});

		return max;
	}

	function length(arr) {
		return arr.length;
	}

	const object = {
		average: average(arr),
		min: min(arr),
		max: max(arr),
		length: length(arr),
	};

	return object;
};

module.exports = analyzeArray;