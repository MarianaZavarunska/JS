// Task 1
console.log('=========================Task 1=========================');
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

findAmoungOfArguments(7,5,10);

function findAmoungOfArguments(){

    let sum = 0;

    if(arguments.length === 1){
        console.log(`${arguments[0]}`);
    } else {
       for( let i = 0; i < arguments.length; i++){
           sum += arguments[i];
       }
       console.log(`Sum = ${sum}`);
    }
}

// Task 2
console.log('=========================Task 2=========================');
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

let numb1 = [1,2,3,4];
let numb2 = [2,3,4,5];
let numb3 = [];

addValueOfTwoElements(numb1,numb2);
console.log(numb3);

function addValueOfTwoElements(numb1,numb2){
  
    for(let i = 0; i < numb1.length; i++){
       if(i >= numb2.length) break;

        numb3.push(numb1[i] + numb2[i]);
    }
}

// Task 3
console.log('=========================Task 3=========================');

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let array =  [{name: 'Dima', age: 13}, {model: 'Camry'}];
let keys = [];

showKeyOfArray(array);
console.log(keys);

function showKeyOfArray(array){
   for( let el of array){
     Object.keys(el).forEach(element => {
         keys.push(element);
     });
   }
}

// Variant 2

// function showKeyOfArray(array){
//     for( let el of array){
//       for ( let key in el){
//           keys.push(key);
//       }
//     }
//  }

// Task 4
console.log('=========================Task 4=========================');

// Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

let user = [{name: 'Dima', age: 13}, {model: 'Camry'}];
let values = [];

showValueOfArray(user);
console.log(values);

function showValueOfArray(user){
   for( let el of user){
     Object.values(el).forEach(element => {
         values.push(element);
     });
   }
}

// Variant 2

// function showValueOfArray(user){
//     for( let el of user){
//       for ( let key in el){
//           values.push(el[key]);
//       }
//     }
//  }

