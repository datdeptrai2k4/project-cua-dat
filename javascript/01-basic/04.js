let num = 434;
let count = 0;
let lastNumb;
let result = 'yes';
while (num >= 1) {
    lastNumb = num % 10;
    if (lastNumb % 2 != 0) {
        result = 'no';
        break;
    }
    num = parseInt(num / 10);
}

console.log(result);
