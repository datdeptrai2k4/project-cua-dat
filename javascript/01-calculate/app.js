let elNumber=document.getElementById('number');
let elSaveNumber=document.getElementById('saved-number')
let btnIncrease=document.getElementById('btn-increase');
let btnDecrease=document.getElementById('btn-decrease');
let btnReset=document.getElementById('btn-reset');
let btnSave=document.getElementById('btn-save');
btnIncrease.addEventListener('click', function () {
    let number = parseInt(elNumber.innerText);
    elNumber.innerText = number + 1;
  })
  btnDecrease.addEventListener('click', function () {
    let number = parseInt(elNumber.innerText);
    elNumber.innerText = number - 1;
  })
  btnReset.addEventListener('click', function () {
    let number = parseInt(elNumber.innerText);
    elNumber.innerText = 0;
  })
  btnSave.addEventListener('click', function () {
    let saveNumber = parseInt(elSaveNumber.innerText);
    elSaveNumber.innerText +=   elNumber.innerText +'|';
  })

