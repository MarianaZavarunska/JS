// Task 1

// let minute = 30;
console.log('=========================Task 1=========================')
let minute = Number(window.prompt("Write down a number from 0 to 59!"));

while(minute < 0 && minute > 59 || isNaN(minute))  
{
  minute = Number(window.prompt("Please, enter correct number. Write down a number from 0 to 59!"));
}  

if (minute >= 0 && minute <= 15) {
    console.log("quater 1");
} else if (minute > 15 && minute <= 30) {
    console.log("quater 2");
} else if (minute > 30 && minute <= 45) {
    console.log("quater 3");
} else if (minute > 45 && minute <= 59) {
    console.log("quater 4");
} else {
    console.log("Please enter proper number");
}


// Variant 2
console.log('=========================Task 1 Variant 2=========================')

console.log("quater " + Math.ceil(minute / 15));

// Task 2
console.log('=========================Task 2=========================')
// let day= window.prompt("Write down a number of current day");
const date = new Date();
let day = date.getDate();

if (day >= 1 && day <= 10) {
    console.log(`Today is ${day} day of current month`);
    console.log("decade 1");
} else if (day > 10 && day <= 20) {
    console.log(`Today is ${day} day of current month`);
    console.log("decade 2");
} else if (day > 20 && day <= 30) {
    console.log(`Today is ${day} day of current month`);
    console.log("decade 3");
}
// else {
//     console.log( "It's impossible");
// }

// Task 3
console.log('=========================Task 3=========================')
let test = true;

if (test != true) {
    console.log('True');
} else {
    console.log('False');
}

console.log(test ? "False" : "True")


// Task 4
console.log('=========================Task 4=========================')
let a = 1;
switch (a) {
    case 0:
        console.log('False')
        break;
    default:
        console.log('True')
        break;
}

// Task 5
console.log('=========================Task 5=========================')
const curriculum = document.getElementById('curriculum');
let workday = Number(window.prompt("Write down a number of current workday"));

switch (workday) {
    case 1:
        curriculum.innerHTML = getCurriculum('Monday',['english', 'maths', 'history']);
        break;
    case 2:
        curriculum.innerHTML = getCurriculum('Tuesday',['music', 'maths', 'history']);
        break;
    case 3:
        curriculum.innerHTML = getCurriculum('Wednesday',['art', 'maths', 'history']);
        break;
    case 4:
        curriculum.innerHTML = getCurriculum('Thursday',['IT', 'maths', 'history']);
        break;
    case 5:
        curriculum.innerHTML = getCurriculum('Friday',['geography', 'maths', 'history']);
        break;
    default:
        curriculum.innerHTML = `<h3>Weekend</h3>`;
        break;
}
 function getCurriculum (day, subjects) {
     let result = `<h3>${day}</h3>`
     for (let i = 0; i < subjects.length; i++) {
         const element = subjects[i];
         if(i == 0){ 
             result += '<ol>';
         }
        result += `<li>${element}</li>`;
        if ( i == subjects.length - 1){
            result += '</ol>';
        }
     }
     return result;
     
 }
// Task 6
console.log('=========================Task 6=========================');

const year = new Date();
let currentYear = year.getFullYear();
if ((currentYear % 4) == 0) {
    console.log(`This ${currentYear} year is intercalary `)
} else {
    console.log(`This ${currentYear} year isn't intercalary `)
}


// Task 7
console.log('=========================Task 7=========================');

let language = window.prompt("What is the official name of JavaScript?");
if (language === 'ECMAScript') {
    alert('Excellent!')
} else {
    alert('Dont you know? ECMAScript!')
}

