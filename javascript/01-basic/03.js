let number = 5;
let result;
if (number > 0) {
    for (let index = 1; index <= 10; index++) {
        result = index * number;
        console.log(`${index}x${number}=${result}`)
    }
}else{
    console.log(`Vui lòng nhập số nguyên dương`)
}

