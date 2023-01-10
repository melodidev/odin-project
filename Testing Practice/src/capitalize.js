const capitalize = function(word) {
	if ((typeof word) != "string") return false;
	if (!word[0] || !(word[0].match(/[a-z]/i))) return false;

	let ascii = word[0].charCodeAt(0);

	if (ascii >= 97 && ascii <= 122) {
		ascii = ascii - 32;
	}

	let char = String.fromCharCode(ascii);

	return char + word.substr(1);
};

module.exports = capitalize;