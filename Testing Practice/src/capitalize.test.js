const capitalize = require('./capitalize');

test('not works with integers', () => {
	expect(capitalize(12)).toBe(false);
});

test('not works when value is empty', () => {
	expect(capitalize("")).toBe(false);
});

test('capitalize string', () => {
	expect(capitalize("hello")).toBe("Hello");
});

test('handles aldready capitalized strings', () => {
	expect(capitalize("HeElLo")).toBe("HeElLo");
});

test('handles spaces and punctuation', () => {
	expect(capitalize("Handles spaces and punctuation.")).toBe("Handles spaces and punctuation.");
});