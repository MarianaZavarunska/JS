
let showTaskLabel = (number) => console.log(`=========================Task ${number}=========================`);

//===========================Task 1===========================
showTaskLabel(1);
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.



let block = document.createElement('div'); 

block.classList.add('wrap', 'collapse', 'alpha','beta' );

block.style.backgroundColor = '#b0ccb0';
block.style.color = 'green';
block.style.margin = '5px';
block.style.fontSize = '20px';
block.style.fontFamily = 'cursive';

block.innerText = 'text text text';


document.body.appendChild(block);

let blockClone = block.cloneNode(true);
blockClone.innerText = 'hello word';
document.body.insertBefore(blockClone,block);

//===========================Task 2===========================
showTaskLabel(2);

// - Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let array =  ['Main','Products','About us','Contacts'];

let unorderedList = document.getElementsByClassName('menu')[0];

for( let i = 0; i < array.length; i ++){
  let list = document.createElement('li')
  list.innerText = `${array[i]}`;
  list.style.margin = '5px';
  list.style.fontFamily = 'cursive';


  unorderedList.appendChild(list);
}

//===========================Task 3===========================
showTaskLabel(3);

// - Є масив

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for(let course of coursesAndDurationArray){
    let container = document.createElement('div');
    container.innerText = `Title: ${course.title},\n MonthDuration: ${course.monthDuration}`;
    container.style.margin = '5px';
    container.style.padding = '5px';
    container.classList.add('container');
 


    document.body.insertBefore(container,block.nextSibling);
    
}

//===========================Task 3===========================
showTaskLabel(3);

// - Є масив

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

let container = document.getElementsByClassName('container')[coursesAndDurationArray.length - 1];
for( let course of coursesAndDurationArray){
    let wrapper = document.createElement('div');
    wrapper.classList.add('item');
    wrapper.style.backgroundColor = '#b0ccb0';
    let header = document.createElement('h1');
    header.classList.add('heading');
    header.innerText = `Title: ${course.title}`;
    let info = document.createElement('p');
    info.classList.add('description');
    info.innerText = `MonthDuration: ${course.monthDuration}`;

    wrapper.insertAdjacentElement("beforeend", info);
    wrapper.insertAdjacentElement("afterbegin", header);
    container.insertAdjacentElement("afterend",wrapper);;
   
}

