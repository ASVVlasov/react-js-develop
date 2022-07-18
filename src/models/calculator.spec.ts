import { Calculator } from './calculator';

describe('Calculator', () => {
    let calculator: Calculator;
    const testString = '2 * ( 5.5 + 5.5 ) - 8 / 2 ^ 2';

    it('should calculate array of expressions', () => {
        calculator = new Calculator(testString);
        expect(calculator.calculate()).toBe(20);
    });
});
