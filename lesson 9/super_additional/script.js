let showTaskLabel = (number) => console.log(`=========================Task ${number}=========================`);

//===========================Task 1===========================
showTaskLabel(1);

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];

let arrayOfAddress = [];


for (let user of users) {
    for (let key in user) {
        if (key === 'address') {
            let array = [];
            for (let item in user[key]) {
                array.push(`${item}: ${user[key][item]}`);
            }
            arrayOfAddress.push(array);
        }
    }
}
console.log(arrayOfAddress);

//===========================Task 2===========================
showTaskLabel(2);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//  Всі данні в одному блоці.

for (let user of users) {
    let container = document.createElement('div');
    container.style.border = '2px solid black';
    container.style.margin = '10px 0';

    getProperties(user, container);

    document.body.appendChild(container);
}

function getProperties(user, container) {
    for (let key in user) {

        if (typeof user[key] === 'object' && user[key] !== null) {
            getProperties(user[key], container);
        } else {
            container.innerHTML += `${key} - ${user[key]} </br>`;
        }
    }
}




//===========================Task 3===========================
showTaskLabel(3);
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

for (let user of users) {
    let wrapper = document.createElement('div');
    wrapper.style.border = '2px solid black';
    wrapper.style.margin = '10px 0';
    wrapper.style.backgroundColor = 'lightGrey';

    getAllProperties(user, wrapper);

    document.body.appendChild(wrapper);
}

function getAllProperties(user, wrapper) {

    for (let key in user) {
        let newWrapper = document.createElement('div');
        newWrapper.style.border = '2px solid black';
        newWrapper.style.padding = '10px';
        newWrapper.style.margin = '5px';

        if (typeof user[key] === 'object' && user[key] !== null) {

            getAllProperties(user[key], newWrapper);

        } else {
            newWrapper.innerText += `${key}- ${user[key]}`;
        }
        wrapper.appendChild(newWrapper);
    }
}

//===========================Task 4===========================
showTaskLabel(4);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
//  розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості


//  Зроблено в Task 3

//===========================Task 5===========================
showTaskLabel(5);

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

const boxList = document.querySelector('#content');
const headers = document.querySelectorAll('h2');

let unOrderedList = document.createElement('ul');

for (let header of headers) {

    let list = document.createElement('li');

    list.innerText = header.innerText;

    unOrderedList.appendChild(list);
}
boxList.appendChild(unOrderedList);

//===========================Task 6===========================
showTaskLabel(6);

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },
];

const title = boxList.nextElementSibling;

let titleContainer = document.createElement('div');
titleContainer.style.textAlign = 'center';

titleContainer =  title.cloneNode(true);

document.body.appendChild(titleContainer);

let rulesContainer = document.createElement('div');

for (let i = 0; i < rules.length; i++) {
    let ruleContainer = document.createElement('div');
    ruleContainer.style.border = '1px solid black';
    ruleContainer.style.margin = '10px 0';
    ruleContainer.classList.add('rule-container');

    let number = document.createElement('div');
    number.innerText = `${i + 1}`;
    ruleContainer.appendChild(number);

    for (let key in rules[i]) {
        let keyContainer = document.createElement('div');
        keyContainer.innerText += `${rules[i][key]}`;
        ruleContainer.appendChild(keyContainer);
    }

    rulesContainer.appendChild(ruleContainer);
}

document.body.appendChild(rulesContainer);
