import * as assert from 'assert';
import { Translator } from '../../main/translator';

suite('Extension Test Suite', () => {
	
	test('Mayus to -Minus simple test', () => {
        const input: String = `backgroundColor: red`;
        const result: String = Translator.translate(input);
        const expectedResult: String = 'background-color: red';
		assert.strictEqual(expectedResult, result);
	});

    test('remove semicolons', () => {
        const input: String = `backgroundColor: 'red'`;
        const result: String = Translator.translate(input);
        const expectedResult: String = 'background-color: red';
		assert.strictEqual(expectedResult, result);
	});
    
});