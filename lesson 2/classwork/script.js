// Task 1
console.log('=========================Task 1=========================');

const number1 = document.querySelector('.number1');
const number2 = document.querySelector('.number2');
const maxContainer = document.getElementById('max-container');
const buttonMax = document.getElementById('btn-max');

buttonMax.addEventListener( 'click', getMax);

function getMax(){
    let x = Number(number1.value);
    let y = Number(number2.value);
    if (x > y ) {
        maxContainer.innerText = `max(${x}, ${y}) = ${x}`;
    }else if (x == y) {
        maxContainer.innerText =  "You wrote down equal numbers!"
    } else {
        maxContainer.innerText = `max(${x}, ${y}) = ${y}`;
    }
}

// Variant 2
console.log('=========================Task 1 Variant 2=========================');

const buttonMax2 = document.getElementById('btn-max-2');

buttonMax2.addEventListener('click', getMax2);

function getMax2() {
    let x = Number(number1.value);
    let y = Number(number2.value);
    let max = Math.max(x, y);
    maxContainer.innerHTML = `<h3> Max(${x}, ${y}) = ${max} </h3>`;
}



// Task 2
console.log('=========================Task 2=========================');

const apartment = document.getElementById('apartment');
const room = document.querySelector('.room');
const btnApartment = document.getElementById('btn-apartment');

btnApartment.addEventListener('click', findEntrance);

function findEntrance() {
    let r = Number(room.value);
    if ( r >= 1 && r <= 20) {
        setApartmentInnerText(r, 'first');
     } else if (r <= 48) {
         setApartmentInnerText(r, 'second');
     } else if (r <= 90) {
         setApartmentInnerText(r, 'third');
     } else {
         apartment.innerText = "You are living in another house"
     }
}

function setApartmentInnerText(roomNumber, entrance) {
    apartment.innerText = `Your apartment ${roomNumber} is in the ${entrance} entrance`
}

// Task 3
console.log('=========================Task 3=========================');

const yourNumber = document.querySelector('.numb');
const btnNumb = document.getElementById('btn-numb');
const numbContainer = document.getElementById('numb-container');

btnNumb.addEventListener('click', checkNumb);

function checkNumb() {
   let n = Number(yourNumber.value);
   (n == 10) ? numbContainer.innerText ='True': numbContainer.innerText ='False';
}


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

const giftNumber = document.querySelector('.gift');
const giftBtn = document.getElementById('btn-gift');
const giftContainer = document.getElementById('gift-text');

giftBtn.addEventListener('click', setGift);

function setGift() {
    let gift = Number(giftNumber.value);
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

}

function setGiftDescription(present) {
    giftContainer.innerText = `You have just won a ${present}`;
}