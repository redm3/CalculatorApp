let output = '0';
const calculationElement = document.querySelector('#calculation');
const answerElement = document.querySelector('#answer');

function addToOutput(value) {
    if (output === '0') {
        output = value;
    } else {
        output += value;
    }
    calculationElement.textContent = output;
}

function clearOutput() {
    output = '0';
    calculationElement.textContent = output;
    answerElement.textContent = '';
}

function calculate() {
    const expression = calculationElement.textContent;

    // Use regular expressions to split the expression into numbers and operators
    const numbers = expression.split(/[\+\-\*\/]/).map(n => parseFloat(n));
    const operators = expression.split(/[0-9\.]+/).filter(op => op !== '');

    // Evaluate multiplication and division before addition and subtraction
    let result = numbers[0];
    for (let i = 0; i < operators.length; i++) {
        const operator = operators[i];
        const nextNumber = numbers[i + 1];
        if (operator === '*') {
            result *= nextNumber;
        } else if (operator === '/') {
            result /= nextNumber;
        } else if (operator === '+') {
            result += nextNumber;
        } else if (operator === '-') {
            result -= nextNumber;
        }
    }

    if (result === Infinity || result === -Infinity) {
        answerElement.textContent = 'Error';
    } else {
        answerElement.textContent = `= ${result.toLocaleString()}`;
    }
    output = result.toString();
}

function backspace() {
    output = output.slice(0, -1);
    if (output === '') {
        output = '0';
    }
    calculationElement.textContent = output;
}
