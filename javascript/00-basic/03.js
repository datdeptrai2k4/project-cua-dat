var totalLine = 10;
var timeDoing = 4;
var salaryLine = 0;

if (totalLine < 10) {
    salaryLine = 1;
} else if (totalLine <= 20) {
    salaryLine = 2;
} else {
    salaryLine = 5;
}
var salary = timeDoing * 20 - salaryLine;
console.log('Salary: ' + salary + '$');

