// Task 1
console.log('=========================Task 1=========================');

let numbers = [0, 1, 2, -5, 6];
let strings = [ 'Ross', 'Rachel', 'Monica', 'Chandler', 'Phoebe', 'Joey'];
let diverse = [ 'Potter', 1, 7, true, 'wizard'];

console.log(numbers.toString());
console.log(strings);
console.log(diverse);

// Task 2
console.log('=========================Task 2=========================');

let actors = [];

actors[0] = 'Will Smith';
actors[1] = 'Ryan Reynolds';
actors[2] = 'Ben Stiller';
actors[3] = 'Patrick Dempsey';
actors[4] = 'Morgan Freeman';
actors[5] = 'Dwayne Johnson';
actors[6] = 'Adam Sandler';
actors[7] = 'Arnold Schwarzenegger';

console.log(actors);

// Task 3-4
console.log('=========================Task 3-4 =========================');

for(let i = 0; i < 10; i++ ){
    document.write(`<div>Block ${i}</div>`);
}

// Task 5-6
console.log('=========================Task 5-6 =========================');

let i = 0;
while( i < 20){
    document.write(`<h1>Text ${i}</h1>`);

    i++;
}

// Task 7
console.log('=========================Task 7 =========================');

let numbs = new Array(10);

for (let i = 0; i < numbs.length; i++) {
    // let actor = numbers[i];
    // actor = 8;
    numbs[i] = Math.floor(Math.random() * 10);  
}
console.log(numbs);

// Task 8
console.log('=========================Task 8 =========================');

let top10 = ['Will Smith', 'Ryan Reynolds', 'Ben Stiller', 'Patrick Dempsey', 'Morgan Freeman', 'Dwayne Johnson', 'Adam Sandler', 'Arnold Schwarzenegger', 'Robert De Niro', 'Sylvester Stallone']; 

for( actor of top10){
    console.log(actor);
}

// Task 9-11
console.log('=========================Task 9-11 =========================');

let different = [1, true, 'Jonh', -345, false, 'Bob', true, 60, false, 'Mary'];

for (let i = 0; i < different.length; i++) {
    if (typeof different[i] === 'boolean'){
        console.log(different[i] ,`${i}`);
    }
}

for (let i = 0; i < different.length; i++) {
    if (typeof different[i] === 'number'){
        console.log(different[i],`${i}`);
    }
}

for (let i = 0; i < different.length; i++) {
    if (typeof different[i] === 'string'){
        console.log(different[i],`${i}`);
    }
}

// Task 12
console.log('=========================Task 12 =========================');

let mess = new Array();

mess.push('Andrii');
mess.push('Ann');
mess.push(144);
mess.push(169);
mess.push(256);
mess.push(' ');
mess.push(true);
mess.push(false);
mess.push({name: 'Andrii', age: 18});
mess.push(undefined);

for(const el of mess){
    console.log(el);
}


// Task 13
console.log('=========================Task 13 =========================');

for(let i = 0; i < 10; i++){
    console.log(`${i}`);
    document.write(`${i} <br>`);
}
document.write(`<br>`);

// Task 14
console.log('=========================Task 14 =========================');

for(let i = 1; i <= 100; i++){
    console.log(`${i}`);
    document.write(`${i} <br>`);
}
document.write(`<br>`);

// Task 15
console.log('=========================Task 15 =========================');

for(let i = 1; i <= 100; i+=2){
    console.log(`${i}`);
    document.write(`${i} <br>`);
}
document.write(`<br>`);

// Task 16
console.log('=========================Task 16 =========================');

for(let i = 1; i <= 100; i++){
    if( (i % 2) == 0) {
    console.log(`${i}`);
    document.write(`${i} <br>`);
    }
}
document.write(`<br>`);

// Task 17
console.log('=========================Task 17 =========================');

for(let i = 1; i <= 100; i++){
    if( (i % 2) !== 0) {
    console.log(`${i}`);
    document.write(`${i} <br>`);
    }
}