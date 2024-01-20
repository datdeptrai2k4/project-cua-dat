//color
let text = document.getElementById('text');
const btnColorBox = document.getElementsByClassName('color-box');
let btnMargin = document.querySelectorAll('.margin-box');

for (let i = 0; i < btnColorBox.length; i++) {
  btnColorBox[i].addEventListener('click', function () {
    score(btnColorBox[i]);
  });
}


function score(btn) {
  let color = window.getComputedStyle(btn).backgroundColor;
  text.style.backgroundColor = `${color}`;

}
//font-size
let btnUp = document.getElementById('font-up');
let btnDown = document.getElementById('font-down');

btnUp.addEventListener('click', function () {
  let font = parseInt(window.getComputedStyle(text).fontSize);
  console.log(font);
  text.style.fontSize = `${font + 1}px`;
})

btnDown.addEventListener('click', function () {
  let font = parseInt(window.getComputedStyle(text).fontSize);
  console.log(btnDown);
  text.style.fontSize = `${font - 1}px`;
})

//margin
function textAlign(margin) {
  let a = margin.value;
  console.log(a);
  text.style.textAlign = `${a}`;
}
for (let i = 0; i < btnMargin.length; i++) {
  btnMargin[i].addEventListener('change', function () {
    textAlign(btnMargin[i]);
  });
}
console.log(btnMargin[1].value);







