import * as readLine from 'readline';
import { stdin as input, stdout as output } from 'process';
import { Calculator } from './models/calculator';

const rl = readLine.createInterface({
    input,
    output,
});

rl.question('> ', (inputString) => {
    const calculator = new Calculator(inputString);
    console.log('> ', calculator.calculate());
    rl.close();
});
