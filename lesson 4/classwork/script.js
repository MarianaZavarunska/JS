// Task 1
console.log('=========================Task 1=========================');
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

findMin(-15, 15, 100);

function findMin(a,b,c){
    if( a === b && b === c ){
        console.log(` \u2204 Min(${a},${b},${c})`);
    } else if(a < b){
        if(c < a){
            showMessage(a,b,c,c,'Min');
        }else {
            showMessage(a,b,c,a,'Min');
        }
    } else if (c < b){
        showMessage(a,b,c,c,'Min');
    } else {
        showMessage(a,b,c,b,'Min');
    }
}


// Task 2
console.log('=========================Task 2=========================');
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

findMax(100, 100, 100);

function findMax(a,b,c){
    if( a === b && b === c ){
        console.log(` \u2204 Max(${a},${b},${c})`);
    } else if(a > b){
        if(a > c){
            showMessage(a,b,c,a,'Max');
        }else {
            showMessage(a,b,c,c,'Max');
        }
    } else if (b > c){
        showMessage(a,b,c,b,'Max');
    } else {
        showMessage(a,b,c,c,'Max');
    }
}

function showMessage(a,b,c,result,action){
    console.log(`${action}(${a},${b},${c}) = ${result}`);
}

// Task 8
console.log('=========================Task 8=========================');
// - створити функцію яка заповнює масив рандомними числами

let numbers = [];

fillNumbers(numbers);
console.log(numbers);

function fillNumbers(numbers){
    for( i = 0; i < 10; i++){
       numbers[i] = Math.ceil(Math.random() * 20);
    }   
}

// Task 3
console.log('=========================Task 3=========================');
// - створити функцію яка повертає найбільше число з масиву

let maxElOfNumbers = findMaxElement(numbers);

console.log(`Max = ${maxElOfNumbers}`);

function findMaxElement(numbers){
    let result = numbers[0];
    numbers.forEach(number=> {
        result = result > number ? result : number;
    });
    return result;
}

// Task 4
console.log('=========================Task 4=========================');
// - створити функцію яка повертає найменьше число з масиву

let minElOfNumbers = findMinElement(numbers);

console.log(`Min = ${minElOfNumbers}`);

function findMinElement(numbers){
    let result = numbers[0];
    numbers.forEach(number=> {
        result = result < number ? result : number;
    });
    return result;
}

// Task 5
console.log('=========================Task 5=========================');
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sumElements = calcSumOfElement(numbers);

console.log(` \u2211 ${sumElements}`);

function calcSumOfElement(numbers){
    let sum = 0;
    numbers.forEach(number => {
        sum += number;
    });
    return sum;
}

// Task 6
console.log('=========================Task 6=========================');
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let averageValue = calcAverageValue(numbers);

console.log(`Average = ${averageValue}`);

function calcAverageValue(numbers){
    return sumElements / numbers.length ;
}

// Task 7
console.log('=========================Task 7=========================');
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let minEl = findMaxMin(4,6,100,-14);

console.log(`Min = ${minEl}`);


function findMaxMin(){
    let max = arguments[0];
    let min= arguments[0];

    for(let i = 0; i < arguments.length; i++){
        max = max > arguments[i] ? max : arguments[i];
        min = min < arguments[i] ? min : arguments[i];
    }

    console.log(`Max = ${max}`);

    return min;
}

// Task 9
console.log('=========================Task 9=========================');
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let randomArray = [];

fillArray(randomArray, 15);
console.log(randomArray);

function fillArray(randomArray,limit){
    for( i = 0; i < limit; i++){
       randomArray[i] = Math.floor(Math.random() * 100);
    }   
}

// Task 10
console.log('=========================Task 10=========================');
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let reverse = showReverseArray(randomArray);
console.log(reverse);

function showReverseArray(randomArray){
    return randomArray.reverse();
}

// Task 10.2
console.log('=========================Task 10.2=========================');
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].



let reverse2 = showReverseArray2(randomArray);
console.log(reverse2);

function showReverseArray2(randomArray){

   let reverse =[];
   for( let i = randomArray.length - 1; i > 0 ; i --){
       reverse.push(randomArray[i]);
   }
   return reverse;
}
