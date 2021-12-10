let showTaskLabel = (number) => console.log(`=========================Task ${number}=========================`);

//===========================Task 1===========================
showTaskLabel(1);

// є масив -
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.

// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let users = [
    { name: 'vasya', age: 31, status: false }, //id=0
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];


const container = document.querySelector('.container');

for (let i = 0; i < users.length; i++) {
    let user = users[i];
    let userWrapper = document.createElement('div');
    userWrapper.classList.add('user-card');
    user.id = i;

    userWrapper.innerHTML = `Name: ${user.name}</br>Age: ${user.age}</br> Status: ${user.status}`;

    let heartWrapper = document.createElement('div');
    heartWrapper.classList.add('heart-wrapper');



    //if user exists in local storage
    //if true than add fas else add far

    // {name: "masha", age: 30, status: true, id: 8}
    // {name: "andrey", age: 29, status: true, id: 7}
    // {name: "vasya", age: 31, status: false, id: 0}
    // {name: "petya", age: 30, status: true, id: 1}
    // {name: "kolya", age: 29, status: true, id: 2}

    if (localStorage.getItem('favorite')) {
        let favUsers = JSON.parse(localStorage.getItem('favorite'));
        for (let j = 0; j < favUsers.length; j++) {
            let favUser = favUsers[j];
            if (favUser['id'] == user['id']) {
                heartWrapper.innerHTML = `<i class="fas fa-heart"></i>`;
                break;
            } else {
                heartWrapper.innerHTML = `<i class="far fa-heart"></i>`;
            }
        }
    }
    else {
        heartWrapper.innerHTML = `<i class="far fa-heart"></i>`;
    }

    heartWrapper.addEventListener('click', () => {

        if (heartWrapper.innerHTML.includes('fas')) {

            heartWrapper.innerHTML = heartWrapper.innerHTML.replace('fas', 'far');
        } else {
            heartWrapper.innerHTML = `<i class="fas fa-heart"></i>`;
        }

        addFavorite(user);
    })

    userWrapper.append(heartWrapper)
    container.append(userWrapper);
};

function addFavorite(user) {
    let favorites = [];

    if (localStorage.getItem('favorite')) {
        let favUsers = localStorage.getItem('favorite');
        favUsers = JSON.parse(favUsers);
        favorites = favUsers;

        for (let i = 0; i < favUsers.length; i++) {
            let item = favUsers[i];
            if (item.id === user.id) {
                favorites.splice(i, 1);
                localStorage.setItem('favorite', JSON.stringify(favorites));
                return;
            };
        }
    }

    favorites.push(user);
    localStorage.setItem('favorite', JSON.stringify(favorites));
}






