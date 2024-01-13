let x=3;
let hat=0;
let result=0;
for (let index = 1; index <= x; index++) {
    hat +=2;
    result +=Math.pow(x, hat);
}

console.log(result);
