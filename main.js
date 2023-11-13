const numberButtons = document.querySelectorAll('.button-number');
const mathButtons = document.querySelectorAll('.button-logic')
const display = document.querySelector('.display-output');
const btnEquality = document.querySelector('.button-equality');

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

function mathOperator(logic) { // +/-  % / x - + =
    const value = display.value;

    switch (logic) {
        case 'C': // clean
            display.value = '';
            break;
        case '+/-': // replace
            replaceSign(value);
            break;
        case '%': // procent
            percentNumber(value);
            break;
        case '/': // деление
            divisionNumbers(value);
            break;
        case 'x': // умножение
            multiplicationNumbers(value);
            break;
        case '-': // минус
            minusNumbers(value);
            break;
        case '+': // плюс
            plusNumbers(value);
            break;
    }
}

function replaceSign(value) { // replace
    value ? display.value = -value : display.value = value;
}

function percentNumber(value) { // процент
    display.value = value / 100;
}

function divisionNumbers(value) { // деление
    setDisplayPlaceholder(value);
    btnEquality.onclick = () => {
        display.value = value / display.value;
        display.placeholder = '0';
    }
}

function multiplicationNumbers(value) { // умножение
    setDisplayPlaceholder(value);
    btnEquality.onclick = () => {
        display.value = value * display.value;
        display.placeholder = '0';
    }
}

function minusNumbers(value) { // минус
    setDisplayPlaceholder(value);
    btnEquality.onclick = () => {
        display.value = value - display.value;
        display.placeholder = '0';
    }
}

function plusNumbers(value) { // плюс
    setDisplayPlaceholder(value);
    btnEquality.onclick = () => {
        display.value = parseFloat(value) + parseFloat(display.value);
        display.placeholder = '0';
    }
}

function setDisplayPlaceholder (value) {
    display.value = '';
    display.placeholder = value;
}