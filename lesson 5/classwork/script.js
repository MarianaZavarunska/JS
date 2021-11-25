// Всі функції повинні бути описані стрілочним типом!!!!

// Task 1
console.log('=========================Task 1=========================');
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let checkType = (a,b,c) => {
    if(typeof a === 'number' && typeof b === 'number' && typeof c === 'number'){
        return true;
    }else {
       return false;
       
    }
}

let showMin = (a,b,c,min) => console.log(`Min(${a},${b},${c}) = ${min}`);

let findMin = (a,b,c) => {
    if (checkType(a,b,c) === true){
        if( a === b && b === c ){
            console.log(` \u2204 Min(${a},${b},${c})`);
        
        }else if( a < b ){
        if( b < c){
            showMin(a,b,c,a);
        }else if (c < a){
            showMin(a,b,c,c);
        } else {
            showMin(a,b,c,b);
        }
       } else if (c < b) {
        showMin(a,b,c,c);
      }else {
        showMin(a,b,c,b);
      }
  }else{
    console.log('We entered the wrong date');
  }
}
findMin(300,300,300);

// Task 2
console.log('=========================Task 2=========================');
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let showMax = (a,b,c,max) => console.log(`Max(${a},${b},${c}) = ${max}`);

let findMax = (a,b,c) => {
    if (checkType(a,b,c) === true) {
        if( a === b && b === c ){
            console.log(` \u2204 Max(${a},${b},${c})`);
        } else if( a > b ){
            if( b > c){
                showMax(a,b,c,a);
            }else if (c > a){
                showMax(a,b,c,c);
            } else {
                showMax(a,b,c,a);
            }
        } else if (c > b) {
            showMax(a,b,c,c);
        } else {
            showMax(a,b,c,b);
        }
    }else{
        console.log('We entered the wrong date!');
    }
}
 
findMax(100,100,"10");

console.log('========================= Variant 2========================');

let findMaximum = (a,b,c) => {
    if( a > b && a > c){
        showMax(a,b,c,a); 
    } else if ( b > c){
        showMax(a,b,c,b); 
    } else {
        showMax(a,b,c,c);
    }
} 

findMaximum(60,100,20);

// Task 9
console.log('=========================Task 9=========================');
// - створити функцію яка заповнює масив рандомними числами
let numbers = [];
let createNumbers = (numbers) => {
    for(let i= 0; i < 10; i++){
     numbers.push(Math.floor(Math.random() * 100));
    }
}
createNumbers(numbers);
console.log(numbers);

// Task 3
console.log('=========================Task 3=========================');
// - створити функцію яка повертає найбільше число з масиву

let findMaxElement = (array) => {
    let max = array[0];
    for( let i = 0; i < array.length; i++){
        if( array[i] > max){
            max = array[i];
        } 
    }
    return max;
}

console.log(findMaxElement(numbers));

// Task 4
console.log('=========================Task 4=========================');
// - створити функцію яка повертає найменьше число з масиву

let findMinElement = (array) => {
    let min = array[0];
    for( let i = 0; i < array.length; i++){
        if( array[i] < min){
            min = array[i];
        } 
    }
    return min;
}

console.log(findMinElement(numbers));

// Task 5
console.log('=========================Task 5=========================');
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let findSum = (array) => {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
   return sum;
}

console.log(` \u2211 ${findSum(numbers)}`);

// Task 6
console.log('=========================Task 6=========================');
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let findAverage = (array) => findSum(array) / array.length;

console.log(findAverage(numbers));

// Task 7
console.log('=========================Task 7=========================');
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше 

let showMaxMin = (...elements) => {
    let min = elements[0];
    let max = elements[0]; 

    for( let i = 0; i < elements.length; i++){
        min = elements[i] > min ? min : elements[i];
        max = elements[i] < max ? max : elements[i];
    }

    console.log(`Max = ${max}`);
    return min;
    
}

console.log(`Min = ${showMaxMin(1,2,4,5,6,78,90,87)}`);

// Task 10
console.log('=========================Task 10=========================');
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. 

let numbersLimit = [];
let createNumbersLimit = (array,limit) => {
    for(let i= 0; i < limit; i++){
     array.push(Math.floor(Math.random() * 100));
    }
}
createNumbersLimit(numbersLimit,15);
console.log(numbersLimit);

// Task 11
console.log('=========================Task 11=========================');
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let reverse = [];

let createReverseNumbers = (array) => {
    for( let i = array.length - 1; i >= 0; i--){
        reverse.push(array[i]);
    }
    return reverse;
}

console.log(createReverseNumbers(numbersLimit));

