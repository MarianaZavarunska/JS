// Task 1
console.log('=========================Task 1=========================');

let x = Number(window.prompt('Write down a number'));
let y = Number(window.prompt('Write down a number'));

if ( isNaN(x) || isNaN(y)){
    alert("Thats not a number")
}else if ( x > y ) {
    alert(`max(${x}, ${y}) = ${x}`);
}else if ( x == y ) {
    alert ( "You wrote down equal numbers!")
} else {
    alert(`max(${x}, ${y}) = ${y}`);
}
// Variant 2
console.log('=========================Task 1 Variant 2=========================');
const maxContainer = document.getElementById('max-container');
let max = Math.max(x, y);
maxContainer.innerHTML = `<h3> Max(${x}, ${y}) = ${max} </h3>`;


// Task 2
console.log('=========================Task 2=========================');

const apartment = document.getElementById('apartment');
let room = Number(window.prompt('Please, enter the number of your apartment'));

if ( room >= 1 && room <= 20) {
   setApartmentInnerText(room, 'first');
} else if (room <= 48) {
    setApartmentInnerText(room, 'second');
} else if (room <= 90) {
    setApartmentInnerText(room, 'third');
} else {
    apartment.innerText = "You are living in another house"
}

function setApartmentInnerText(room, entrance) {
    apartment.innerText = `Your apartment ${room} is in the ${entrance} entrance`
}

// Task 3
console.log('=========================Task 3=========================');

let number = Number(window.prompt('Write down a number'));
let result = (number == 10) ? alert('True'): alert('False');

// Task 4
console.log('=========================Task 4=========================');

let variable = window.prompt('Write down some variable');
const variableContainer = document.getElementById('variable');

if (typeof variable === 'string' && (variable == 'true' || variable == 'false')) {
    variableContainer.innerText = "You filled up some boolean"
} else if (!isNaN(Number(variable))) {
    variableContainer.innerText = "You filled up number"
} else if (variable.indexOf(",") > 0 ){
    variableContainer.innerText = "You filled up some array or object" 
} else if ( typeof variable === 'string') {
    variableContainer.innerText = "You filled up some string"
} else {
    variableContainer.innerText = "You filled up some unknown symbol"
}

// Task 5
console.log('=========================Task 5=========================');

let temperature = window.prompt('Write down temperature');
const temperatureContainer = document.getElementById('temperature');

if ( temperature.includes("+") && (Number(temperature) >=10 && Number(temperature) <= 22)){
    temperatureContainer.innerText = "Let's go to study!"
} else {
    temperatureContainer.innerText = "Stay at home and learn everything online!"
}

// Task 6
console.log('=========================Task 6=========================');

const giftContainer = document.getElementById('gift');
let gift = Number(window.prompt('Write down a number of gift'));

switch(gift) {
    case 1: 
       setGiftDescription("car");
       break;
    case 2: 
       setGiftDescription("motorcycle");
       break;
    case 3: 
      setGiftDescription("phone");
      break;
    case 4: 
      setGiftDescription("trip");
      break;
    case 5: 
      setGiftDescription("10 000 USD");
      break;
    default: 
       giftContainer.innerText = 'You have just written the wrong number';
       break;
}

function setGiftDescription(present) {
    giftContainer.innerText = `You have just won a ${present}`;
}