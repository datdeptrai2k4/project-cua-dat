const elNum = document.getElementById('front-score');
const elNum2 = document.getElementById('back-score');

function score(num, selector) {
    const number = parseInt(selector.innerText);
    const content = number + num;
    if (content < 10) {
        selector.innerText = `0${content}`;
    } else {
        selector.innerText = `${content}`;
    }
}