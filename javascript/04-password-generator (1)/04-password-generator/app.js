const NUMBERS = "0123456789";
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const SYMBOLS = "~`!@#$%^&*()_-+={[}],|:;<>.?/";
const inputLenght = document.getElementById('input-length');
const btnGenerate = document.getElementById('btn-generate');
inputLenght.addEventListener('input', () => {
  document.getElementById('length').innerText = inputLenght.value
})

btnGenerate.addEventListener('click', function () {
  const nums = document.getElementById('checkbox-numbers')
  const letters = document.getElementById('checkbox-letters')
  const symbols = document.getElementById('checkbox-symbols')
  const lenght = inputLenght.value
  let generateLimit = "";
  generateLimit += nums.checked ? NUMBERS : ""
  generateLimit += letters.checked ? LETTERS : ""
  generateLimit += symbols.checked ? SYMBOLS : "";

  const generateLimitLenght = generateLimit.length;
  let generatedPassword = '';
  for (let i = 0; i < lenght; i++) {
    generatedPassword += generateLimit[Math.floor(Math.random() * generateLimitLenght)]
  }

  document.getElementById("result").innerText = generatedPassword
})


