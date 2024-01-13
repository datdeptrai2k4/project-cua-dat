let result = 0;
let number = 146;
let string = '';
while (number > 0) {
    let remain = number % 10;
    if (string === '') string = remain + string;
    else string = remain + ' + ' + string;
    result += remain;
    number = parseInt(number / 10);
}
console.log(`${string} = ${result}`);