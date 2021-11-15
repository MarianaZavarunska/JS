// Task 1
console.log('=========================Task 1=========================');

let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];

if ( friends.length >= 2 ) {
    document.write('It is a big array, because of length is bigger than 3 or equal to 3');
}else {
    document.write('It is too small array, because of length is lesser than 3');
}

// Task 2
console.log('=========================Task 2=========================');

let a = 1000;
let b = 10;
let c = 80;
let avarage = a;

if ( a > b){
    if ( a < c){
        avarage = a;
    }else if (b > c){
        avarage = b;
    }else {
        avarage = c;
    }
}
console.log(`avarage(${a}, ${b}, ${c})= ${avarage}`);

// Task 3
console.log('=========================Task 3=========================');

// let result;
//  if (a + b < 4) {
//     result = 'Мало';
//  } else {
//     result = 'Багато';
//  }
let result =(a + b < 4) ? 'Мало':'Багато';
console.log(result);

// Task 3
console.log('=========================Task 3=========================');

let number = Number(window.prompt('Please, enter a number from -100 to 100'));

result = number < 0 ? `${number} is negative` : number == 0 ? `${number} equal 0` : `${number} is positive`;
console.log(result);
