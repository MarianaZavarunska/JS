// Task 1
console.log('=========================Task 1=========================');
// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
let strings = ['hello world', 'lorem ipsum', 'javascript is cool'];

strings.forEach(item => console.log(item.length));

// Task 2
console.log('=========================Task 2=========================');
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

strings.forEach(item => console.log(item.toUpperCase()));

// Task 3
console.log('=========================Task 3=========================');
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

strings.forEach(item => console.log((item.toUpperCase()).toLowerCase()));

// Task 4
console.log('=========================Task 4=========================');
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let dirtyString = ' dirty string   ';

// console.log(dirtyString.length);
console.log(dirtyString.trim());

// console.log((dirtyString.trim()).length);

// Task 5
console.log('=========================Task 5=========================');
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let str = 'Каждый охотник желает знать';

let stringToArray = str.split(' ');  //  використовуємо метод split
console.log(stringToArray);

// let s = str.replaceAll(' ', ',');
// console.log(s);

let arrayOfWords = [];

function strToArray() {
    let indexEnd = 0;
    let indexStart = 0;
    let length = str.length;
    for (let item of str) {
        if (item === ' ') {
            indexStart = indexEnd;
            indexEnd = str.indexOf(item, ++indexEnd);
            arrayOfWords.push(str.substring(indexStart, indexEnd).trim());
        }
    }
    arrayOfWords.push((str.substring(indexEnd, length)).trim());
}
strToArray();

console.log(arrayOfWords)


// Task 6
console.log('=========================Task 6=========================');
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый

let substring = (string,long) => string.substring(0,long);
console.log(substring(str,7));

// =========================

let among = Math.ceil(Math.random() * 20);
function showSubstring() {
    if ( among > 0 && among < str.length){
    let substring = str.substring(0,among);
    return substring;
    } 
}

let substringNew = showSubstring();
console.log(substringNew);


// Task 7
console.log('=========================Task 7=========================');
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'


function insertDashInString(string) {
    
    let newString = ''; 

    for (let item of string) {
      
        if (item === ' ') {
            newString += '-';
        }else {
            newString += item;
        }
    }
    return newString.toUpperCase();
}

console.log(insertDashInString("HTML JavaScript PHP"));

// Task 8
console.log('=========================Task 8=========================');
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.


let firstLetterToUpperCase = (string) => string[0].toUpperCase().concat(string.substring(1,string.length));

console.log(firstLetterToUpperCase('hello world'));

// Task 9
console.log('=========================Task 9=========================');
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

function capitalizeEachWord(string) {

    let newString = string[0].toUpperCase(); 

    for (let i = 1; i < string.length; i++) {
       
        if (string[i - 1] === ' ') {
            let index = string.indexOf(string[i], i); 
            newString += string[index].toUpperCase(); 
        }else {
            newString += string[i];
        }
    }
    return newString;
}

console.log(capitalizeEachWord('hello world hello beautiful world'));