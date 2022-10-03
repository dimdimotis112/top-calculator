const screen = document.querySelector('#screen');

const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', buttonPress);
}

function buttonPress() {
    if (this.textContent === 'Enter') {
        calculate();
        return;
    }
    screen.textContent += this.textContent;
}

function calculate() {
    let operation = screen.textContent;
    operation = operation.split(/([+-/XS])/);

    const result = operate(operation[1], +operation[0], +operation[2]);
    screen.textContent = result;
}


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
     switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'X':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return 'such an operation cannot be performed';
    }
}