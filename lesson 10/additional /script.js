let showTaskLabel = (number) => console.log(`=========================Task ${number}=========================`);

//===========================Task 1===========================
showTaskLabel(1);

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
// Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

const container = document.getElementById('container');

container.addEventListener('mousedown', function (e) {
    if (e.which === 1) {
        console.log(`Tag - ${e.target.tagName}`);
        console.log(`Classes- ${e.target.className}`);
        console.log(`Id - ${e.target.id}`);
        console.log(`Height x Width: ${e.target.clientHeight} X ${e.target.clientWidth}`);
    }
});

//===========================Task 2===========================
showTaskLabel(2);

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
// Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

const popUpBlock = document.getElementById('pop-up');


container.addEventListener('mousedown', function (e) {

    if (e.which === 1) {
        popUpBlock.classList.add('active');
        popUpBlock.style.top = `${e.clientY}px`;
        popUpBlock.style.left = `${e.clientX}px`;

        let properties =
            [
                `Tag- ${e.target.tagName}`,
                `Classes - ${e.target.className}`,
                `Id- ${e.target.id}`,
                `Height x Width: ${e.target.clientHeight} X ${e.target.clientWidth}`
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

//filter status 

const statusFilter = document.getElementById('status');

statusFilter.addEventListener('click', (e) => {

    if (e.target.checked) {
        let infoList1 = document.createElement('ul');
        infoList1.classList.add('users-info1');

        let filteredByStatus = usersWithAddress.filter(user => user.status === false);
        filteredByStatus.forEach((user) => {
            let list = document.createElement('li');

            // for (const key in user) {
            //     if(typeof user[key] === 'object' && user[key] !== null){
            //         for(const item in user[key]){
            //             list.innerHTML += `${item}: ${user[key][item]}</br> `;
            //         }
            //     } else {
            //         list.innerHTML += `${key}: ${user[key]}</br> `;
            //     }
            // }
            getUserInfo(user, list);

            infoList1.appendChild(list);

        });
        infoList1.classList.add('active');

        document.body.appendChild(infoList1);
    } else {
        let ul = document.querySelector('.users-info1');
        ul.remove();
    }
})

//filter age
const ageFilter = document.getElementById('age');

ageFilter.addEventListener('click', (e) => {

    if (e.target.checked) {
        let infoList2 = document.createElement('ul');
        infoList2.classList.add('users-info2');

        let filteredByAge = usersWithAddress.filter(user => user.age >= 29);
        filteredByAge.forEach((user) => {
            let list2 = document.createElement('li');


            getUserInfo(user, list2);

            infoList2.appendChild(list2);

        });

        infoList2.classList.add('active');

        document.body.appendChild(infoList2);
    } else {
        let ul = document.querySelector('.users-info2');
        ul.remove();
    }
});

//filter city

const cityFilter = document.getElementById('city');

cityFilter.addEventListener('click', (e) => {

    if (e.target.checked) {
        let infoList3 = document.createElement('ul');
        infoList3.classList.add('users-info3');

        let filteredByCity = usersWithAddress.filter(user => user.address.city === 'Kyiv');
        filteredByCity.forEach((user) => {
            let list3 = document.createElement('li');


            getUserInfo(user, list3);

            infoList3.appendChild(list3);

        });

        infoList3.classList.add('active');

        document.body.appendChild(infoList3);
    } else {
        let ul = document.querySelector('.users-info3');
        ul.remove();
    }
});

function getUserInfo(user, list) {

    for (const key in user) {
        if (typeof user[key] === 'object' && user[key] !== null) {

            getUserInfo(user[key], list);
        } else {
            list.innerHTML += `${key}: ${user[key]}</br> `;
        }

    }
}

//===========================Task 5===========================
showTaskLabel(5);

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

const carouselContainer = document.querySelector('.carousel-container');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const loader = document.querySelector('.loader');

let arr = [
    "https://images.unsplash.com/photo-1470549813517-2fa741d25c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHwxOTA3Mjd8fHx8fHx8MTYzODk2NjMwOA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/31/RpgvvtYAQeqAIs1knERU_vegetables.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHwxOTA3Mjd8fHx8fHx8MTYzODk2NjM3MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/reserve/YFdIoUsRJCAehcoUnQaS_Straw.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHwxOTA3Mjd8fHx8fHx8MTYzODk2NjQwMw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHwxOTA3Mjd8fHx8fHx8MTYzODk2NjQyNg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
];

let index = 0;



window.onload = () => {
    carouselContainer.style.backgroundImage = `url('${arr[index]}}')`;
}

// USING ASYNC/AWAIT
async function generateBackground() {

    const config = {
        headers: {
            Accept: 'application/json'
        },
    }

    const res = await fetch('https://source.unsplash.com/collection/190727', config, { cache: "no-cache" });

    arr.push(res.url);

}


function navigatArray() {
    leftBtn.addEventListener('click', () => {
        index--;

        if (index < 0) {
            index = 0;
            return;
        } else {
            carouselContainer.style.backgroundImage = `url('${arr[index]}}')`;
        }
    }
    )

    rightBtn.addEventListener('click', async () => {
        index++;
        if (index === arr.length - 1) {

            loader.style.display = 'block';
            await generateBackground();
            carouselContainer.style.backgroundImage = `url('${arr[index]}}')`
            loader.style.display = 'none';
        } else {
            carouselContainer.style.backgroundImage = `url('${arr[index]}}')`;
        }

    }
    )
}

navigatArray();

//===========================Task 6===========================
showTaskLabel(6);
// Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

function getSelectionText() {

    let text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

const blockSelected = document.getElementById('select-bold');

blockSelected.onmouseup = () => {
    let selected = getSelectionText();
    let selectedBold = `<b>${selected}</b>`;
    blockSelected.innerHTML = blockSelected.innerText.replace(`${selected}`, `${selectedBold}`);
}


// Radio-btns
const block = document.getElementById('selection-area');

const cursiveBtn = document.getElementById('cursive');
const boldBtn = document.getElementById('bold');
const yellowBtn = document.getElementById('yellow');
const resetBtn = document.getElementById('reset');


block.addEventListener('pointerup', () => {
    let selected = getSelectionText();
    let changedText = selected;

    if (cursiveBtn.checked) {
        changedText = `<i>${changedText}</i>`;

    };
    if(boldBtn.checked) {
        changedText = `<b>${changedText}</b>`;

    };
    if (yellowBtn.checked) {
        changedText = `<mark>${changedText}</mark>`;

    };

    if(cursiveBtn.checked || boldBtn.checked || yellowBtn.checked){
        block.innerHTML = block.innerText.replace(`${selected}`, `${changedText}`);
    }
    
})

resetBtn.addEventListener('click', () => {

    if (cursiveBtn.checked){
        cursiveBtn.checked = !cursiveBtn.checked;
    };
    if(boldBtn.checked){
        boldBtn.checked = !boldBtn.checked;
    };
    if (yellowBtn.checked) {
        yellowBtn.checked = !yellowBtn.checked;
    };
    block.innerText = block.innerText;
})


