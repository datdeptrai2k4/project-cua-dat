
let text = document.getElementById('text');
const btnColorBox = document.getElementsByClassName('color-box');
let slbTextAlign = document.getElementById  ('margin-select');
let slbSpace = document.getElementById  ('space-select');
let localText=localStorage.getItem("font");
text.style.fontSize=localText;
let localSpace=localStorage.getItem("font");
text.style.lineHeight=localSpace;
let localAlign=localStorage.getItem("font");
text.style.textAlign=localAlign;

//color
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
  localStorage.setItem("font", text.style.fontSize);
})

btnDown.addEventListener('click', function () {
  let font = parseInt(window.getComputedStyle(text).fontSize);
  console.log(btnDown);
  text.style.fontSize = `${font - 1}px`;
  localStorage.setItem("font", text.style.fontSize);
})
//space
slbSpace.addEventListener('change', function () {
  text.style.lineHeight = slbSpace.value;
  localStorage.setItem("font", text.style.lineHeight);
} );




//TextAlign
  slbTextAlign.addEventListener('change', function () {
    let a = slbTextAlign.value;
  text.style.textAlign = a;
  localStorage.setItem("font", text.style.textAlign);
  } );
  









