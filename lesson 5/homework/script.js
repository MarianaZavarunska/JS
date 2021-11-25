// Всі функції повинні бути описані стрілочним типом!!!!
// Task 1
console.log('=========================Task 1========================='); 
// - створити функцію яка обчислює та повертає площу прямокутника висотою

let rectangleArea = (a,b) => `The area of rectangle with ${a} and ${b} is ${a * b} `;
console.log(rectangleArea(4,8));

// Task 2
console.log('=========================Task 2========================='); 
// - створити функцію яка обчислює та повертає площу кола

let circleArea = (r) => Math.PI * Math.pow(r,2);
console.log(circleArea(6));

// Task 3
console.log('=========================Task 3========================='); 
// - створити функцію яка обчислює та повертає площу циліндру

let asideArea = (r,h) => 2 * Math.PI * r * h; 
let cylinderArea = (r,h) => asideArea(r,h) + 2 * circleArea(r);

console.log(cylinderArea(2,5));

// Task 4
console.log('=========================Task 4========================='); 
// - створити функцію яка приймає масив та виводить кожен його елемент


let friends = [ 'Ross', 'Rachel', 'Monica', 'Chandler', 'Phoebe', 'Joey'];

let showElement = (arr) => arr.forEach(friend => console.log(friend));
showElement(friends);

console.log('========================= Variant 2========================='); 
let showElementOfArray = (arr) => arr.map(friend => console.log(friend));  //copy elements from old array and add it in the new array
showElementOfArray(friends);


// Task 4
console.log('=========================Task 4========================='); 
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let createChapter = (text) => document.write(`<p>${text}</p>`);
createChapter('Lorem ipsum dolor sit amet consectetur, adipisicing elit.');

 // Task 5
console.log('=========================Task 5========================='); 
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let createList = (text) => document.write(
`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>`);
createList('Lorem ipsum dolor sit amet consectetur, adipisicing elit.');


 // Task 6
 console.log('=========================Task 6========================='); 
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let createListRandom = (text,amount) => {
    document.write('<ul>');
    for(let i = 0; i < amount; i++){
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');

}
    createListRandom('Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 5);

 // Task 7
 console.log('=========================Task 7========================='); 
//  - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let createArray = (...values) =>{

    document.write('<ul>');
    for(let i = 0; i < values.length; i++){
        document.write(`<li>${values[i]}</li>`);
    }
    document.write('</ul>');

}
createArray(true, 5, 'string')

 // Task 8
 console.log('=========================Task 8========================='); 
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [ 
    {
        id: 1, 
        name: 'Ross',
        age: 30
    },
    {
        id: 2, 
        name: 'Monica',
        age: 29
    },
    {
        id: 3, 
        name: 'Joe',
        age: 31
    },
    {
        id: 4, 
        name: 'Rachel',
        age: 30
    },
    {
        id: 5, 
        name: 'Phoebe',
        age: 32
    },
    {
        id: 6, 
        name: 'Chandler',
        age: 29
    },
    ]

let createBlock = (users) =>{

   
    for(let user of users){
        document.write('<div class="user">');
        for (let key in user) {
            document.write(`<p>${key} : ${user[key]} </p>`);
        }
        document.write('</div>');
    }
  

}

createBlock(users)
