
function showTaskLabel(number){
    console.log(`=========================Task ${number}=========================`);
}


//===========================Task 1===========================
showTaskLabel(1);
// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';

function normalizeFullName(string) {
    let normalizedName = '';
    for (let i = 0; i < string.length; i++) {
        let item = string[i];
        if (item === '.' || item === '-' || item === '_') {
            if (normalizedName[normalizedName.length - 1] === " ") {
                continue;
            }
            normalizedName += ' ';
        } else {
            normalizedName += item;
        }
    }
    return normalizedName;

}

console.log(normalizeFullName(n2));

//===========================Task 2===========================
showTaskLabel(2);
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let random = [];
let randomizer = (arr) => {
    for (let i = 0; i < 100; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
}

randomizer(random);

console.log(random);

//===========================Task 3===========================
showTaskLabel(3);
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

 console.log(random.sort());


//===========================Task 4===========================
showTaskLabel(4);
//  - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let filtered = random.filter((item) => item % 2 === 0);
console.log(filtered);

//===========================Task 5===========================
showTaskLabel(5);
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let randomSmall = [];
let randomizerSmall = (arr) => {
    for (let i = 0; i < 20; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
}

randomizerSmall(randomSmall);

let convertToString = randomSmall.map((item) => item.toString());
console.log(convertToString);

//===========================Task 6===========================
showTaskLabel(6);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.


function sortWithDirection(array,direction){

    return direction === 'ascending' ?  array.sort(): array.sort((item1,item2) => item2 -item1);

}
console.log(randomSmall);      //unsorted;
console.log(sortWithDirection(randomSmall,'descending'));


//===========================Task 7===========================
showTaskLabel(7);
// - є масив
//  -- відсортувати його за спаданням за monthDuration



let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

function sortDescending(array){
   return  array.sort( (item1,item2) => item2.monthDuration - item1.monthDuration) 
}

console.log(sortDescending(coursesAndDurationArray));


//===========================Task 8===========================
showTaskLabel(8);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

console.log( coursesAndDurationArray.filter( (item) => item.monthDuration > 5) );