const calculator = require('./calculator');

describe('add', () => {
	test('adds 0 and 0', () => {
		expect(calculator.add(0,0)).toBe(0);
	});

	test('adds 2 and 2', () => {
		expect(calculator.add(2,2)).toBe(4);
	});

	test('adds positive numbers', () => {
		expect(calculator.add(2,6)).toBe(8);
	});
});


describe('subtract', () => {
	test('subtracts numbers', () => {
		expect(calculator.subtract(10,4)).toBe(6);
	});
});

describe('divide', () => {
	test('divides 0', () => {
		expect(calculator.divide(0,10)).toBe(0);
	});

	test('handles decimals', () => {
		expect(calculator.divide(7,3)).toBe(2.3);
	});

	test('handles negative integers', () => {
		expect(calculator.divide(-10,0.4)).toBe(-25);
	});
});

describe('multiply', () => {
	test('multiplies two numbers', () => {
		expect(calculator.multiply([2,4])).toBe(8);
	});

	test('multiplies several numbers', () => {
		expect(calculator.multiply([2,4,6,8,10,12,14])).toBe(645120);
	});
});