let number1 = 8;
let number2 = 2;
let sign = '/';
let result; // undefined
let error = 'Phép tính không hợp lệ';

switch (sign) {
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
      error = 'khong the chia cho 0';
    } else {
      result = number1 / number2;
    }
    break;
}

if (result === undefined) {
  console.log(error);
} else {
  console.log(`${number1} ${sign} ${number2} = ${result}`);
}