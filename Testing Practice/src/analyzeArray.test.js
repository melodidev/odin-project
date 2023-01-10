const analyzeArray = require('./analyzeArray');

test('checks if array', () => {
	expect(analyzeArray("bsdknflm")).toEqual(false);
});

test('actually works', () => {
	expect(analyzeArray([1,8,3,4,2,6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
});