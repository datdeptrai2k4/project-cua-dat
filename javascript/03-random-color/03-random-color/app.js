const COLOR_CHARACTER = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let randomChar = '';
let result = '';
let el = document.getElementById('color-text');
let btn = document.getElementById('btn');
let color = document.getElementById('color-box');
let btnColor = document.getElementById('color-text');

btn.addEventListener('click', function () {
    for (let index = 0; index < 6; index++) {
        let rand = Math.random(COLOR_CHARACTER.length - 1);
        let i = Math.floor(rand * COLOR_CHARACTER.length);
        randomChar = COLOR_CHARACTER[i];
        result += randomChar;
    }
    el.innerText = `#${result}`;
    document.getElementById('color-box').style.backgroundColor = `#${result}`;
    result = '';
})

el.addEventListener('click', function () {
    navigator.clipboard.writeText(el.innerText);
    alert("Copied the text: " + el.innerText);

})



