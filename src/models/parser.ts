import { EExpression } from '../interfaces/expression';
import { Stack } from './stack';
import { Priority } from '../interfaces/priority';
import { EXPRESSIONS, WRONG_EXPRESSION_MESSAGE } from '../const';

export class Parser {
    /**
     * convert array of math operators to postfix notation
     * @param inputString - array likes a ['5.5', '+', '5.5']
     * @return string[] array likes a ['5.5', '5.5', '+']
     */
    public toPostfix = (inputString: string): Array<EExpression | number> => {
        const inputArr = this.parseString(inputString);
        const result: Array<EExpression | number> = [];
        const operationPriority: Priority = {
            [EExpression.QUOTE_O]: 0,
            [EExpression.QUOTE_C]: 0,
            [EExpression.PLUS]: 1,
            [EExpression.MINUS]: 1,
            [EExpression.MULTI]: 2,
            [EExpression.DIVIDER]: 2,
            [EExpression.POW]: 3,
        };
        const stack = new Stack<EExpression>();
        inputArr.forEach((eachSymbol) => {
            if (typeof eachSymbol === 'number') {
                result.push(eachSymbol);
            } else {
                switch (eachSymbol) {
                    case EExpression.QUOTE_O: {
                        stack.push(eachSymbol);
                        break;
                    }
                    case EExpression.QUOTE_C: {
                        while (stack.count && stack.peek() !== EExpression.QUOTE_O) {
                            result.push(stack.pop());
                        }
                        stack.pop();
                        break;
                    }
                    default: {
                        while (
                            stack.count &&
                            operationPriority[stack.peek()] >= operationPriority[eachSymbol]
                        ) {
                            result.push(stack.pop());
                        }
                        stack.push(eachSymbol);
                        break;
                    }
                }
            }
        });
        while (stack.count) {
            result.push(stack.pop());
        }
        return result;
    };

    /**
     * convert array of math operators to postfix notation
     * @param inputString - string likes a '5.5 + 5.5'
     * @return string[] array likes a ['5.5', '+', '5.5']
     */
    private parseString = (inputString: string): Array<EExpression | number> => {
        inputString = inputString
            .split('')
            .filter((_) => _ !== ' ')
            .join('');
        const result: Array<EExpression | number> = [];
        for (let index = 0; index < inputString.length; index++) {
            let expressionElement = EXPRESSIONS.find((expr) => expr === inputString[index]);
            let numberElement = +inputString[index];
            if (expressionElement) {
                result.push(expressionElement);
            } else if (!isNaN(numberElement)) {
                const stringNumber = this.getStringNumber(inputString, index);
                result.push(+stringNumber);
                index += stringNumber.length - 1;
            } else {
                throw new Error(WRONG_EXPRESSION_MESSAGE);
            }
        }
        return result;
    };

    /**
     * search number into string from index position
     * @param inputString - string likes a '5.5 + 5.5'
     * @param index - start position to search
     * @return string - stringNumber likes a '5.5'
     */
    private getStringNumber = (inputString: string, index: number): string => {
        let element = '';
        while (index < inputString.length) {
            const num = inputString[index];
            if (isNaN(+num) && num !== '.') {
                break;
            }
            element += num;
            index++;
        }
        return element;
    };
}
