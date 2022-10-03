const screen = document.querySelector('#screen');
const buttons = document.querySelectorAll('button');
let value1 = 0; // creates value1 as 0, so if user presses Enter immediately, it just outputs zero.
let operatorClicked = false;
let operatorUsed = '';

for (let button of buttons) {
    button.addEventListener('click', buttonPress);
}

function buttonPress() {
    if (operatorClicked) {
        screen.textContent = '';
    }
    if (this.textContent === 'Enter' ) {
        calculate();
        return;
    } else if (this.classList.contains('operator')) {
        operatorClick(this);
        return;
    }
    operatorClicked = false;
    screen.textContent += this.textContent;
}

function operatorClick(operatorButton) {
    operatorUsed = operatorButton.textContent;
    value1 = Number(screen.textContent);
    operatorClicked = true;
}

function calculate() {
    let value2 = Number(screen.textContent);

    const result = operate(operatorUsed, value1, value2);

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