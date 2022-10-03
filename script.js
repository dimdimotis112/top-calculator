const screen = document.querySelector('#screen');
const buttons = document.querySelectorAll('button');
let value1 = 0; // creates value1 as 0, so if user presses Enter immediately, it just outputs zero.
let operatorsClicked = 0;
let operatorClicked = false;
let operatorUsed = '';

for (let button of buttons) {
    button.addEventListener('click', buttonPress);
}

function buttonPress() {
    if (this.textContent === 'Enter') {
        calculate();
        return;
    } else if (this.classList.contains('operator')) {
        operatorClick(this);
        return;
    } else if (this.textContent === 'Clear') {
        clear();
        return;
    } else if (operatorClicked) {
        screen.textContent = '';
        operatorClicked = false;
    }

    screen.textContent += this.textContent;
}

function operatorClick(operatorButton) {
    if (operatorsClicked === 0) {
        value1 = Number(screen.textContent);
        operatorsClicked++
    } else if (operatorsClicked > 0){
        value1 = calculate();
        operatorUsed = operatorButton.textContent;
        operatorClicked = true;
        return;
    }
    operatorUsed = operatorButton.textContent;
    operatorClicked = true;
}

function calculate() {
    let value2 = Number(screen.textContent);
    const result = operate(operatorUsed, value1, value2);
    
    if (result % 1 === 0 || typeof result === 'string') {
        screen.textContent = result
    }
     else {
        screen.textContent = result.toFixed(3);
    }

    return result;
}

function clear() {
    screen.textContent = '';
    value1 = '';
    operatorUsed = '';
    operatorsClicked = 0;
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
    if (b === 0) {
        return 'Division by 0!';
    }
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
    }
}