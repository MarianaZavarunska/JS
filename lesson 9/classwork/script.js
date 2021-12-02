let showTaskLabel = (number) => console.log(`=========================Task ${number}=========================`);

//===========================Task 1===========================
showTaskLabel(1);

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

// Проітерувати масив, створиши для кожного елементу масиву <div class='member'>.

for (let character of simpsons) {
    let container = document.createElement('div');
    container.classList.add('member');

    container.innerHTML = `${character.name}  ${character.surname} ${character.age} </br> ${character.info} </br> <img src= "${character.photo}">`;

    // for (let [key, value] of Object.entries(character)) {
    //     container.innerHTML += ` ${key} ${value} <br> `   //variant 2
    // }

    document.body.appendChild(container);
}

//===========================Task 2===========================
showTaskLabel(2);

// - взяти попередній масив з сімпсонами.
// Проітерувати його, створиши для кожного елементу масиву <div class='member'>. Для кожної властивості елементу створити окремий блок, та помістити його у div.member

for (let character of simpsons) {
    let container = document.createElement('div');
    container.classList.add('member');
    for (const key in character) {
        let block = document.createElement('div');
        if (key !== 'photo') {
            block.innerText = `${character[key]}`;
        } else {
            block.innerHTML = `<img src= "${character[key]}">`
        }

        container.appendChild(block);
    }
    document.body.appendChild(container);
}


//===========================Task 3===========================
showTaskLabel(3);
// Створити для кожного елементу наступного масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png



let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


for (let course of coursesArray) {
    let wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'row';
    wrapper.style.flexWrap = 'wrap';
    wrapper.style.border = '2px solid grey';
    wrapper.style.marginBottom = '10px';

    for (const key in course) {
        let box = document.createElement('div');
        box.style.color = 'rgb(94, 94, 94)';
       

        if (key === 'title') {
            box.innerText = `${key}: ${course[key]}`;
            box.style.margin = '5px';
            box.style.flexBasis = '100%';

        } else if (key === 'monthDuration') {
            box.innerText = `${key}: ${course[key]}`;  
            box.style.flexBasis = '30%';
            box.style.margin = '5px';

        } else if (key === 'hourDuration') {
            box.innerText = `${key}: ${course[key]}`;
            box.style.flexBasis = '62.2%';
            box.style.margin = '5px';

        } else {
            box.style.flexBasis = '100%';
            let unorderedList = document.createElement('ul');
            unorderedList.innerText = `${key}`;
            unorderedList.style.textTransform = 'uppercase';
            unorderedList.style.textAlign = 'center';

            for (const item of course[key]) {
                let list = document.createElement('li');
                list.innerText = `${item}`;
                list.style.backgroundColor = 'rgba(118, 190, 172, 0.5)';
                list.style.listStyle = 'none';
                list.style.textAlign = 'start';
                list.style.padding = '10px';
                list.style.margin = '5px 0';

                unorderedList.appendChild(list);
            }
            box.appendChild(unorderedList);
        }

        if (key !== 'modules') {
            box.style.fontSize = '1rem';
            box.style.backgroundColor = 'rgba(118, 190, 172, 0.5)';
            box.style.marginLeft = '2.5rem';
            box.style.padding = '5px';
        }
        wrapper.appendChild(box);
      
    }

    document.body.appendChild(wrapper);
}

