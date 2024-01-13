let num = 1334;
let count = 0;
let lastNumb;
let result = 'yes';
while (num >= 1) {
    lastNumb = num % 10;
    num = parseInt(num / 10);
    if (lastNumb <= (num % 10)) {
        result = 'no';
        break;
    }
}

console.log(result);
