import { EExpression } from '../interfaces/expression';
import { Stack } from './stack';
import { Parser } from './parser';

export class Calculator {
    public postfixArr: Array<EExpression | number>;
    public parser: Parser;

    constructor(public infix: string) {
        this.parser = new Parser();
        this.postfixArr = this.parser.toPostfix(this.infix);
    }

    /**
     * calculate math expression
     */
    public calculate = (): number => {
        const stack = new Stack<number>();
        this.postfixArr.forEach((eachElement) => {
            if (typeof eachElement === 'number') {
                stack.push(+eachElement);
            } else {
                stack.push(this.execute(eachElement, stack)!);
            }
        });
        return stack.pop();
    };

    /**
     * execute math operation from stack
     * @param operation - operation to execute
     * @param source - stack of numbers
     * @return executed operation result
     */
    private execute = (
        operation: Omit<EExpression, EExpression.QUOTE_O | EExpression.QUOTE_C>,
        source: Stack<number>,
    ): number | undefined => {
        const second = source.pop();
        const first = source.pop();
        switch (operation) {
            case EExpression.PLUS:
                return first + second;
            case EExpression.MINUS:
                return first - second;
            case EExpression.MULTI:
                return first * second;
            case EExpression.DIVIDER:
                return first / second;
            case EExpression.POW:
                return Math.pow(first, second);
        }
    };
}
