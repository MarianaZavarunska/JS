let showTaskLabel = (number) => console.log(`=========================Task ${number}=========================`);

//===========================Task 1===========================
showTaskLabel(1);

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
// Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина


document.addEventListener('mousedown', function (e) {
    if (e.which === 1) {
        console.log(`Назва тегу - ${e.target.tagName}`);
        console.log(`Список класів - ${e.target.className}`);
        console.log(`Список id - ${e.target.id}`);
        console.log(`${e.target.clientHeight} X ${e.target.clientWidth}`);
    }
});

//===========================Task 2===========================
showTaskLabel(2);

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
// Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

const popUpBlock = document.getElementById('pop-up');

document.addEventListener('mousedown', function (e) {
    if (e.which === 1) {
        popUpBlock.classList.add('active');
        popUpBlock.style.top = `${e.clientY}px`;
        popUpBlock.style.left = `${e.clientX}px`;

        let properties =
            [
                `Назва тегу - ${e.target.tagName}`,
                `Список класів - ${e.target.className}`,
                `Список id - ${e.target.id}`,
                `${e.target.clientHeight} X ${e.target.clientWidth}`
            ]

        let unOrderedList = document.createElement('ul');

        properties.forEach((property) => {
            let list = document.createElement('li');
            list.innerText = property;

            unOrderedList.appendChild(list);
        });

        // for (let i = 0; i < 4; i++) {
        //     let list = document.createElement('li');
        //     list.innerText = properties[i];

        //     unOrderedList.appendChild(list);
        // }

        let ul = popUpBlock.firstElementChild;

        if (ul !== null) {
            ul.remove();
        };

        popUpBlock.appendChild(unOrderedList);

    };
});

//===========================Task 3===========================
showTaskLabel(3);

// -- взять массив пользователей

// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

let usersWithAddress = [
    { id: 1, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 2, name: 'petya', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 1 } },
    { id: 3, name: 'kolya', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } },
    { id: 4, name: 'olya', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 90 } },
    { id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 115 } },
    { id: 6, name: 'anya', age: 31, status: false, address: { city: 'Kyiv', street: 'Shevchenko', number: 2 } },
    { id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 22 } },
    { id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } },
    { id: 9, name: 'masha', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 12 } },
    { id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 11, name: 'max', age: 31, status: true, address: { city: 'Ternopil', street: 'Shevchenko', number: 121 } }
];
