// Task 1

// let minute = 30;

let minute = window.prompt("Write down a number from 0 to 59!");

if( minute >= 0 && minute <= 15) {
    console.log("quater 1");
} else if (minute > 15 && minute <= 30){
    console.log("quater 2");
} else if (minute > 30 && minute <= 45){
    console.log("quater 3");
} else if (minute >45 && minute <= 59){
   console.log("quater 4");
} else {
    console.log( "Please enter proper number");
}

// Task 2

// let day= window.prompt("Write down a number of current day");
const date = new Date();
let day = date.getDate();

if( day >= 1 && day <= 10) {
    console.log(`Today is ${day} day of current month`);
    console.log("decade 1");
} else if (day > 10 && day <= 20){
    console.log(`Today is ${day} day of current month`);
    console.log("decade 2");
} else if (day > 20 && day <= 30){
    console.log(`Today is ${day} day of current month`);
    console.log("decade 3");
} 
// else {
//     console.log( "It's impossible");
// }

// Task 3

let test = true;
let result;

// if (!!test) {
//     console.log('True');
// }else {
//     console.log('False');
// }

let getResult = function(a){
  return (a != true) ? 'True': 'False';
}

getResult(test);



// Task 4

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
const curriculum = document.getElementById('curriculum');
let workday= window.prompt("Write down a number of current workday");

switch (workday) {
    case 1:
        curriculum.innerHTML =
         `<h3>Monday</h3>
         <ul> 
        <li>english</li>
        <li>maths<li>
        <li>history</li>
        </ul> `
        break;
    case 2: 
    curriculum.innerHTML =
     `<h3>Tuesday</h3>
    <ul> 
   <li>music</li>
   <li>maths<li>
   <li>history</li>
   </ul> `
   break;
   case 3: 
   curriculum.innerText=
    `<h3>Wednesday</h3>
   <ul> 
  <li>art</li>
  <li>maths<li>
  <li>history</li>
  </ul> `
  break;
  case 4: 
  curriculum.innerHTML =
   `<h3>Thursday</h3>
  <ul> 
 <li>georaphy</li>
 <li>maths<li>
 <li>history</li>
 </ul> `
 break;

    default:
        break;
}
