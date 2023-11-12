const numberButtons = document.querySelectorAll('.button-number');
const mathButtons = document.querySelectorAll('.button-logic')
const display = document.querySelector('.display-output');

numberButtons.forEach(button => {
    const value = button.textContent;
    button.addEventListener('click', (e) => {
        display.value += value;
    });
});

mathButtons.forEach(mathButton => {
    mathButton.addEventListener('click', () => {
        mathOperator(mathButton.textContent);
    });
});

function mathOperator (logic) { // +/-  % / x - + =
    const value = display.value;

    switch(logic) {
        case 'C':
            display.value = '';
            break;
        case '+/-':
            replaceSign(value);
            break;
        case '%': 
            percentNumber(value);
            break;
        case '/':
            // divisionNumbers(value);
            break;
        case 'x':
            // multiplicationNumbers(value);
            break;
        case '-':
            // minusNumbers (value);
            break;
        case '+':
            // plusNumbers (value);
            break;
        case '=':
            // equalityNumber(value);
            break;
    }
}

function replaceSign (value) {
    return value ? display.value = -value : display.value = value;
}

function percentNumber (value) {
    return display.value = value / 100;
}
