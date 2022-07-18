import { Parser } from './parser';
import { WRONG_EXPRESSION_MESSAGE } from '../const';

describe('Parser', () => {
    let parser: Parser;
    const testString = '2 * ( 5.5 + 5.5 ) - 8 / 2 ^ 2';
    const testPostfix = [2, 5.5, 5.5, '+', '*', 8, 2, 2, '^', '/', '-'];

    beforeEach(() => {
        parser = new Parser();
    });

    it('should show error if the math expression or parsed array are not valid', () => {
        const callToPostfix = parser.toPostfix.bind(this, '5,5 + 5,5');
        expect(callToPostfix).toThrow(WRONG_EXPRESSION_MESSAGE);
    });

    it('should parse math string and convert to array of postfix notation', () => {
        expect(parser.toPostfix(testString)).toEqual(testPostfix);
    });
});
