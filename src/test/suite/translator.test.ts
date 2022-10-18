import * as assert from 'assert';
import { Translator } from '../../main/translator';

suite('Extension Test Suite', () => {
	
	test('Mayus to -Minus simple test', () => {
        const input: String = `backgroundColor: red`;
        const result: String = Translator.translate(input);
        const expectedResult: String = 'background-color: red';
		assert.strictEqual(expectedResult, result);
	});

    test('remove apostrophes', () => {
        const input: String = `backgroundColor: 'red'`;
        const result: String = Translator.translate(input);
        const expectedResult: String = 'background-color: red';
		assert.strictEqual(expectedResult, result);
	});

    test('do not change dimensionless values', () => {
        const input: String = `line-height: 5`;
        const result: String = Translator.translate(input);
        const expectedResult: String = 'line-height: 5';
		assert.strictEqual(expectedResult, result);
	});

    test('change comma to semicolon', () => {
        const input: String = `line-height: 5,`;
        const result: String = Translator.translate(input);
        const expectedResult: String = 'line-height: 5;';
		assert.strictEqual(expectedResult, result);
	});
    
});