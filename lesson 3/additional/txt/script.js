// Task 1a
console.log('=========================Task 1a=========================');

let numbers = [];

for( i = 0; i < 50; i++){
    numbers[i] = Math.floor(Math.random() * 10) * 2;
}
console.log(numbers);

// Task 1b
console.log('=========================Task 1b=========================');

numbers = [];

for( i = 0; i < 50; i++){
    numbers[i] = (Math.floor(Math.random() * 10) * 2) - 1;
}
console.log(numbers);

// Task 1c
console.log('=========================Task 1c=========================');

numbers = [];

for( i = 0; i < 20; i++){
    numbers[i] = Math.floor(Math.random() * 10);
}
console.log(numbers);

// Task 1d
console.log('=========================Task 1d=========================');

numbers = [];

for( i = 0; i < 20; i++){
    let random = Math.floor(Math.random() * 100);

    while(!(random >= 8 && random <= 732)){
        random = Math.floor(Math.random() * 100);
    }
    numbers[i] = random;
}
console.log(numbers);

// Task 2
console.log('=========================Task 2=========================');

let numbers3 = [];

for(i = 0; i < numbers.length; i+=3){
    numbers3.push(numbers[i]);
}
console.log(numbers3);

// Task 3-4
console.log('=========================Task 3-4=========================');

numbers3 = [];

for(i = 0; i < numbers.length; i+=3){
    if(numbers[i] % 2 === 0){
    numbers3.push(numbers[i]);
    }
}
console.log(numbers);
console.log(numbers3);

// Task 5
console.log('=========================Task 5=========================');

let neighbours= [];

for(i = 0; i < numbers.length; i++){
    if(i < numbers.length - 1 && (numbers[i + 1]) % 2 === 0){
        neighbours.push(numbers[i]);
    }
}
console.log(numbers);
console.log(neighbours);

// Task 6
console.log('=========================Task 6=========================');

let prices = [100,250,50,168,120,345,188];

let sum = 0;
for(i = 0; i < prices.length; i++){
    sum += prices[i];
}
console.log(sum);

// Task 7
console.log('=========================Task 7=========================');

let numb = [];

for( i = 0; i < 10; i++){
    numb[i] = Math.floor(Math.random() * 10);
}
console.log(numb);

let newNumb = [];
for(i = 0; i < numb.length; i++){
    numb[i] *= 5;
    newNumb.push(numb[i])
}
console.log(newNumb);

// Task 8
console.log('=========================Task 8=========================');

let mess = [true, 'Bob', 12, 'Smith', 100, -345, false, undefined];
let mess_numb = [];

for(i = 0; i < mess.length; i++){
    if(typeof mess[i] === 'number'){
       mess_numb.push(mess[i]);
    }
}
console.log(mess_numb);

// Task 9
console.log('=========================Task 9=========================');
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let users =[];

for( i = 0; i < usersWithId.length; i++){
    for(j = 0; j< citiesWithId.length; j++){
        if(usersWithId[i].id === citiesWithId[j].user_id){
            let res = usersWithId[i];
            res.address = citiesWithId[j];
            users.push(res);
          }
        }
    }

console.log(users);

// Task 10
console.log('=========================Task 10=========================');

let array_10 = [1, 2, 3, 5, 7, 9, 56, 8, 67, -40];
console.log(array_10);

for( let n of array_10){
    if( n % 2 === 0){
        console.log(n);
    }
}

// Task 11
console.log('=========================Task 11=========================');

let array__10 = [];
for( let n of array_10){
    array__10.push(n);
}

console.log(array__10);

// Task 12
console.log('=========================Task 12=========================');
let letters = [ 'a', 'b', 'c']; 

let word = '';
for (let i= 0; i < letters.length; i++) {
    word +=letters[i];
}
console.log(word);

// Task 13
console.log('=========================Task 13=========================');

word = '';
let k = 0;
while(k < letters.length){
    word +=letters[k];
    k++;
}
console.log(word);

// Task 14
console.log('=========================Task 14=========================');

word = '';
for ( letter of letters) {
    word +=letter;
}
console.log(word);

