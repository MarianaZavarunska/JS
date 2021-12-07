let showTaskLabel = (number) => console.log(`=========================Task ${number}=========================`);

//===========================Task 1===========================
showTaskLabel(1);

// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let disappearedEl = document.createElement('div');

disappearedEl.id = 'text';
disappearedEl.style.backgroundColor = 'black';
disappearedEl.style.width = '100px';
disappearedEl.style.height = '100px';

document.body.appendChild(disappearedEl);

let buttonDisappeared = document.createElement('button');

buttonDisappeared.innerText = 'Disappear the Square';

document.body.appendChild(buttonDisappeared);

buttonDisappeared.addEventListener('click', () => { disappearedEl.classList.toggle('disappeared') });

//===========================Task 2===========================
showTaskLabel(2);

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let buttonGhost = buttonDisappeared.cloneNode();

buttonGhost.style.display = 'block';

buttonGhost.innerText = 'Disappear me!';

document.body.appendChild(buttonGhost);

buttonGhost.addEventListener('click', () => { buttonGhost.remove() });

//===========================Task 3===========================
showTaskLabel(3);

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let form = document.createElement('form');
form.action = '#';

let inputAge = document.createElement('input');

inputAge.type = 'number';
inputAge.placeholder = 'Enter your age!';

let inputSubmit = document.createElement('input');

inputSubmit.type = 'submit';

form.appendChild(inputAge);
form.appendChild(inputSubmit);
document.body.appendChild(form);

inputSubmit.addEventListener('click', function (e) {

    e.preventDefault();
    let age = inputAge.value;

    if (Number(age) <= 18) {
        alert('You are too young!');
    }
}
);

//===========================Task 4===========================
showTaskLabel(4);

// - Создайте меню, которое раскрывается/сворачивается при клике

let wrapper = document.createElement('div');
let dropdownMenu = document.createElement('div');

dropdownMenu.innerText = 'MENU';
dropdownMenu.classList.add('dropdown-btn');

wrapper.appendChild(dropdownMenu);



let unOrderedList = document.createElement('ul');
unOrderedList.classList.add('dropdown-menu');
unOrderedList.classList.add('dropdown');

let menu = ['Home', 'Main', 'About', 'Contact'];

for (let item of menu) {
    let list = document.createElement('li');
    list.innerText = item;

    unOrderedList.appendChild(list);
}

wrapper.appendChild(unOrderedList);
document.body.appendChild(wrapper);


document.addEventListener('click', (e) => { 
    if(e.target.className ==='dropdown-btn'){
        unOrderedList.classList.toggle('dropdown');
    }
    if(e.target.className !== 'dropdown-menu' && e.target.className !=='dropdown-btn'){
       unOrderedList.classList.add('dropdown');
    }
});

document.addEventListener('keyup', (e) => {
    if(e.code === 'Escape'){
        unOrderedList.classList.add('dropdown');
    }
})



//===========================Task 5===========================
showTaskLabel(5);

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {
        title: 'lorem',
        body: 'lorem ipsum dolo sit ameti'
    },
    {
        title: 'lorem',
        body: 'lorem ipsum dolo sit ameti'
    },
    {
        title: 'lorem',
        body: 'lorem ipsum dolo sit ameti'
    }];

for (let comment of comments) {
    let commentContainer = document.createElement('div');
    commentContainer.style.cssText = "background-color: black; color: #fff; padding-bottom: 5px; margin-bottom: 10px;";

    // commentContainer.style.backgroundColor = 'black';
    // commentContainer.style.color = '#fff';
    // commentContainer.style.paddingBottom = '5px';
    // commentContainer.style.marginBottom = '10px';

    let buttonComment = document.createElement('div');
    buttonComment.classList.add('button-comment');
    buttonComment.innerText = 'Collapse';

    for (let key in comment) {
        let keyContainer = document.createElement('div');
        keyContainer.style.padding = '10px';
       
        keyContainer.innerText = `${comment[key]}`;

        // if (key === 'title') {
        //     keyContainer.onclick = function() {
        //         keyContainer.nextElementSibling.style.display = 'none';
        //     }
        // }
        buttonComment.onclick = function(){
            if( key === 'body'){
                keyContainer.classList.toggle('collapse');
            }
        }
        commentContainer.appendChild(keyContainer);
    }
    commentContainer.appendChild(buttonComment)

    document.body.appendChild(commentContainer);
}


