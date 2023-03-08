
let output = '0';
const outputElement = document.querySelector('#output');

function addToOutput(value) {
    if (output === '0') {
        output = value;
    } else {
        output += value;
    }
    outputElement.textContent = output;
}

function clearOutput() {
    output = '0';
    outputElement.textContent = output;
}
function calculate() {
    const expression = outputElement.textContent;
    const result = eval(expression);

    if (result === Infinity || result === -Infinity) {
        outputElement.textContent = 'Error';
    } else {
        outputElement.textContent = result;
    }
}