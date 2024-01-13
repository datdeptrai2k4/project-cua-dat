let elNum1 = document.getElementById('number-one');
let value1 = elNum1.value;
let elNum2 = document.getElementById('number-two');
let value2 = elNum2.value;
let btnSum = document.getElementById('btn-sum');
let btnSubtract = document.getElementById('btn-subtract');
let btnMultiply = document.getElementById('btn-multiply');
let btnDivide = document.getElementById('btn-divide');
let elResult = document.getElementById('result');
let result;

btnSum.addEventListener('click', function () {
    calc('+');
})

btnSubtract.addEventListener('click', function () {
    calc('-');
})

btnMultiply.addEventListener('click', function () {
    calc('*');
})

btnDivide.addEventListener('click', function () {
    calc('/');



})

function calc(operator) {
    let result;
    let number1 = parseInt(elNum1.value);
    let number2 = parseInt(elNum2.value);
if(isNaN(number1)||number2){
    alert('Vui long nhap du 2 so');
    return;
}
    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 === 0) {
                alert('Vui long nhap numberTwo khac 0');
            } else {
                result = number1 / number2;
            }

            break;

    }
        elResult.innerText = 'Result:' + result;

}




