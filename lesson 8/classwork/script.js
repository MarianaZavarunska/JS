
let showTaskLabel = (number) => console.log(`=========================Task ${number}=========================`);

//===========================Task a===========================
showTaskLabel('a');
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

const header = document.getElementById('main_header');

header.innerText = 'Semptember-2021';

//===========================Task b===========================
showTaskLabel('b');
// b) робить шириниу елементу ul 400px

const unorderedList = document.getElementsByTagName('ul');

unorderedList[0].style.width = "400px";

//===========================Task c===========================
showTaskLabel('c');
// c) робить шириниу всіх елементів з класом linkList шириною 50%

const linkList = document.getElementsByClassName('linkList');

for (let item of linkList) {

    item.style.width = '50%';
}

//===========================Task d===========================
showTaskLabel('d');

// d) отримує текст який зберігається в елементі з класом listElement2

// const linkListItem = linkList.getElementsByClassName('listElement2');

let linkText;

for (let item of linkList) {

    if (item.classList.contains('listElement2')) {
        linkText = item.innerText;
    }
}

console.log(linkText);

//===========================Task e===========================
showTaskLabel('e');
// e) отримує всі елементи li та змінює ім колір фону на сірий

for (let el of linkList) {
    el.style.backgroundColor = 'grey';
    el.style.border = '1px solid black';
    el.style.margin = '5px';
}

//===========================Task f===========================
showTaskLabel('f');
// f) отримує всі елементи 'a' та додає їм клас anchor

let links = document.getElementsByTagName('a');

for (let a of links) {
    a.classList.add('anchor');
}

//===========================Task g===========================
showTaskLabel('g');
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

for (let a of links) {

    if (a.innerText === 'link3') {
        a.style.fontSize = '40px';
    };
}

//===========================Task h===========================
showTaskLabel('h');
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

for (let a of links) {
    let aText = a.innerText;
    a.classList.add(`element_${aText}`);
}

//===========================Task i===========================
showTaskLabel('i');
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

const h3 = document.getElementsByClassName('sub-header');
let color = window.prompt('Please, enter a color of chapters!');

for(let item of h3){
    item.style.color = color;
}

//===========================Task j===========================
showTaskLabel('j');
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

let color2 = window.prompt('Please, enter a color of chapters!');

for (let item of h3) {
    if (item.innerText === 'content 2 segment') {
        item.style.color = color2;
    }
}

//===========================Task k===========================
showTaskLabel('k');

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let text = window.prompt('Please, enter text for chapter!');

const content_1 = document.querySelector('.content_1');

// if(content_1.children){
//     content_1.children[0].innerText = text;
// }

function replaceText(element){

    if(element.children.length){

        for (const child of element.children) {
            replaceText(child); 
        }
       
    }else{
        element.innerText = text; 
    }
}

replaceText(content_1);

//===========================Task l===========================
showTaskLabel('l');
// l) отримати елементи p та змінити їм padding на 20px

const paragraphs = document.querySelectorAll('p');

paragraphs.forEach((paragraph) => paragraph.style.padding = '20px');

//===========================Task m===========================
showTaskLabel('m');
// m) отримати елементu з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

const paragraphs2 = document.querySelectorAll('.text2');

paragraphs2.forEach((paragraph) => paragraph.innerText = 'sep-2021');

// але на сторінці один р з класом text2, тому можна було доступитись тільки до нього
