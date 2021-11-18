// Task 1
console.log('=========================Task 1=========================');

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

let averageValue = calcAverageValue(numbers);

console.log(`Average = ${averageValue}`);

function calcAverageValue(numbers){
    return sumElements / numbers.length ;
}

// Task 7
console.log('=========================Task 7=========================');




// Task 9
console.log('=========================Task 9=========================');

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

let reverse = showReverseArray(randomArray);
console.log(reverse);

function showReverseArray(randomArray){
    return randomArray.reverse();
}

// Task 10.2
console.log('=========================Task 10.2=========================');


let reverse2 = showReverseArray2(randomArray);
console.log(reverse2);

function showReverseArray2(randomArray){
   let reverse =[];
   for( let i = randomArray.length - 1; i > 0 ; i --){
       reverse.push(randomArray[i]);
   }
   return reverse;
}
