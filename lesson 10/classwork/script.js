let showTaskLabel = (number) => console.log(`=========================Task ${number}=========================`);

//===========================Task 1===========================
showTaskLabel(1);

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

const forms = document.forms;
const inputText =
    console.log(forms);
const button = document.getElementById('submit');

button.addEventListener('click', () => {
    console.log(forms[0].firstName.value);
    console.log(forms[0].phone.value);
    console.log(forms[1].secondName.value);
    console.log(forms[1].age.value);
});

//===========================Task 2===========================
showTaskLabel(2);

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let container = document.createElement('div');
let buttonTable = document.createElement('button');
buttonTable.type = 'submit';
buttonTable.innerText = 'Create Table';

for (let i = 1; i < 4; i++) {
    let input = document.createElement('input');
    input.id = `input_${i}`;
    input.style.margin = '5px 0';

    if (i === 1 || i === 2) {
        input.type = 'number';

        input.placeholder = (i === 1) ? "Enter, number of rows!" : "Enter, number of columns!";

    } else {
        input.type = 'text';
        input.placeholder = 'Enter, text of boxes!'
    }

    container.appendChild(input);
};

container.appendChild(buttonTable);
document.body.appendChild(container);

buttonTable.addEventListener('click', () => {
    let table = document.createElement('table');
    let rowNumber = document.querySelector('#input_1').value;
    let columnNumber = document.querySelector('#input_2').value;
    let content = document.querySelector('#input_3').value;

    for (let i = 0; i < rowNumber; i++) {
        let row = document.createElement('tr');

        for (let j = 0; j < columnNumber; j++) {
            let column = document.createElement('td');
            column.innerText = content;

            row.appendChild(column);
        };
        table.appendChild(row);
    };

    document.body.appendChild(table);

}, 
// { "once": true}
);

let allInputWithTypeNumber = document.querySelectorAll('[type=number]');
console.log(allInputWithTypeNumber);

allInputWithTypeNumber.forEach(input => {
    input.min = '1';
});


//===========================Task 3===========================
showTaskLabel(3);

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

let uncensored = ['курва', 'бля', 'нах'];
let inputCheckText = document.createElement('input');
inputCheckText.type = 'text';
inputCheckText.placeholder = 'Enter word!';

let checkBtn = document.createElement('button');
checkBtn.type = 'submit';
checkBtn.innerText = 'Check';


document.body.appendChild(inputCheckText);
document.body.appendChild(checkBtn);


checkBtn.addEventListener('click', checkWords);

function checkWords() {
    for (let word of uncensored) {
        if (inputCheckText.value === word) {
            alert('Please, enter good word!');
        }
    }
};

//===========================Task 4===========================
showTaskLabel(4);

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

let checkSentenceBtn = document.createElement('button');
checkSentenceBtn.innerText = 'Check Sentence';
checkSentenceBtn.style.display = 'block';

document.body.appendChild(checkSentenceBtn);

checkSentenceBtn.addEventListener('click', () => {
    for (let word of uncensored) {
        if (inputCheckText.value.includes(word)) {
            alert('Please, enter good word!')
        };
    }

});

