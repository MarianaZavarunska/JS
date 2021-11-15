// Task 1
console.log('=========================Task 1=========================');

let numbers = [0, 1, 2, -5, 6];
let strings = [ 'Ross', 'Rachel', 'Monica', 'Chandler', 'Phoebe', 'Joey'];
let diverse = [ 'Potter', 1, 7, true, 'wizard'];

console.log(numbers);
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

