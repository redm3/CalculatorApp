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
    const result = eval(expression);

    if (result === Infinity || result === -Infinity) {
        answerElement.textContent = 'Error';
    } else {
        answerElement.textContent = `= ${result}`;
    }
    output = '0';
}

