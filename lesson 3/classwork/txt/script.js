
let numbers = [2,17,13,6,22,31,45,66,100,-18];

// Task 1
console.log('=========================Task 1=========================');

let i = 0; 
 while( i < numbers.length) {

    i++;
 }

 // Task 2
console.log('=========================Task 2=========================');
 
for( let numb of numbers) { 

} 

// Task 3
console.log('=========================Task 3=========================');

let j = 0; 
let odds = [];

 while( j < numbers.length) {
    if( j % 2 !== 0 ){
       odds.push(numbers[j]);
    }
    j++;
 }
 console.log(numbers);
 console.log(odds);

 // Task 4
console.log('=========================Task 4 =========================');

odds = [];

for(let i = 0; i < numbers.length; i++) { 
    if( i % 2 !== 0 ){
        odds.push(numbers[i]);
     }
} 
console.log(numbers);
console.log(odds);

// Variant 2
console.log('========================= Variant 2 =========================');

odds = [];
for(let i = 1; i < numbers.length; i+=2) { 
    odds.push(numbers[i]); 
} 
console.log(odds);

 // Task 5
 console.log('=========================Task 5 =========================');

j = 0; 
let even = [];

 while( j < numbers.length) {
    if( numbers[j] % 2 == 0 ){
       even.push(numbers[j]);
    }
    j++;
 }
 console.log(numbers);
 console.log(even);

// Task 6
console.log('=========================Task 6 =========================');
even = [];

for(let i = 0; i < numbers.length; i++) { 
    if( numbers[i] % 2 == 0 ){
        even.push(numbers[i]);
     }
} 
console.log(numbers);
console.log(even);

// Task 6
console.log('=========================Task 7 =========================');

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
        numbers[i] = 'okten';
    }
}
console.log(numbers);

// Task 7
console.log('=========================Task 8 =========================');

odds = [];
for( let i = numbers.length - 1; i >= 0; i--){
    odds.push(numbers[i]); 
}
console.log(odds);

// console.log(numbers.reverse());

