const elNum1 = document.getElementById('front-score');
const elNum2 = document.getElementById('back-score');
const elBtnHome = document.getElementsByClassName('btn-home');
const elBtnAway = document.getElementsByClassName('btn-away');

for (let i = 0; i < elBtnHome.length; i++) {
  elBtnHome[i].addEventListener('click', function () {
    score(elBtnHome[i], elNum1);
  });
}

for (let i = 0; i < elBtnAway.length; i++) {
  elBtnAway[i].addEventListener('click', function () {
    score(elBtnAway[i], elNum2);
  });
}

function score(btn, selector) {
  const num = parseInt(btn.innerText);
  const number = parseInt(selector.innerText);
  const content = number + num;
  if (content < 10) {
    selector.innerText = `0${content}`;
  } else {
    selector.innerText = `${content}`;
  }
}
