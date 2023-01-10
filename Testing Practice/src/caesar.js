const caesar = function(text, key) {
	key = (key > 26 || key < -26) ? key % 26 : key;
	key = (key < 0) ? key + 26 : key; 

	let ciphertext = "";
	let char = "";
	let ascii = null;
	for (let i = 0; i < text.length; i++) {
		char = text[i];
		if (!(char.match(/[a-z]/i))) {
			ciphertext += char;
			continue;
		}

		ascii = char.charCodeAt(0)
		if (char.toUpperCase() == char) {
			ascii = ascii + key;
			if (ascii > "Z".charCodeAt(0)) {
				ascii -= 26;
			}
			char = String.fromCharCode(ascii);
			ciphertext += char;
		}

		if (char.toLowerCase() == char) {
			ascii = ascii + key;
			if (ascii > "z".charCodeAt(0)) {
				ascii -= 26;
			}
			char = String.fromCharCode(ascii);
			ciphertext += char;
		}
	}
	return ciphertext;
};

module.exports = caesar;