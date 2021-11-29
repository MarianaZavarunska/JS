function showTaskLabel(number) {
    console.log(`=========================Task ${number}=========================`);
}


//===========================Task 1===========================
showTaskLabel(1);
// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

function cutString(string, separator) {
    let separated = [];
    for (let i = 0; i < string.length; i += 3) {
        separated.push(string.slice(i, separator + i));

    }
    return separated;
}
let separated = cutString('насолода', 3);
console.log(separated);

//===========================Task 2===========================
showTaskLabel(2);
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
//  наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, 
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
// so@em..co@m

//two @ and two dots
//at least two symbols after dot

function validationOfEmail(string) {
    let validationOfEmail = '';
    let index = 0;
    let countSnails = 0;
    let countDots = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === '@' && i > 0) {
            index = i;
            countSnails++;
            for (let j = index + 1; j < string.length; j++) {
                if (string[j] === '.' && j > index + 2 && j !== string.length - 1) {
                    validationOfEmail += string;
                    countDots++;
                }
            }
        }
    }
    if (countSnails !== 1 || countDots !== 1) {
        validationOfEmail = '';
    }


    return (validationOfEmail === '' ? 'Email is not valid' : validationOfEmail);
}

console.log(validationOfEmail('someemail@gmail.com'));

//===========================Task 3===========================



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
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
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
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --відсортувати його в спадаючому порядку за кількістю елементів в полі modules

function sortDescending(array) {
    return array.sort((item1, item2) => (item2.modules).length - (item1.modules).length);
}

console.log(sortDescending(coursesArray));


//===========================Task 3===========================
showTaskLabel(3);

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

function countCharacters(string, character) {
    let count = 0;
    for (let item of string) {
        if (item === character) {
            count++;
        }
    }
    return count;

}

console.log(countCharacters("lorem ipsum lorem", "a"));

//===========================Task 4===========================
showTaskLabel(4);

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

function cutStringWithAmountOfWords(string,long) {
    let countSpace = 0;
    for(let i = 0; i < string.length; i++){
        if(string[i] === ' '){
            countSpace++; 
        }
        
        if(countSpace === (long - 1)){
            let nextSpace = string.indexOf(' ', i + 1);
            console.log(string.slice(0, nextSpace));
            break;
        }
    }
    
}
cutStringWithAmountOfWords("Сила тяжести приложена к центру масс тела", 3 );