// truy xuat phan tu thong qua id
let elNumber = document.getElementById('number');
let elBtn = document.getElementById('btn');
// lấy nội dung từ element (phần tử)
// let number = elNumber.innerText;
// console.log('number', number);
// gán nội dung cho element
// elNumber.innerText = '123';
console.log(elBtn);
// sự kiện - event
elBtn.addEventListener('click', function () {
  let number = parseInt(elNumber.innerText);
  elNumber.innerText = number + 1;
})