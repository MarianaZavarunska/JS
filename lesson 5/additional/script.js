// Task 1
console.log('=========================Task 1=========================');
// - Дано натуральное число n. Выведите все числа от 1 до n.

let naturals = [];

let showAllNaturals = (n) => {
    for(let i = 1; i <= n; i++){
        naturals.push(i);
    }
    return naturals;
}

console.log(showAllNaturals(10));

// Task 2
console.log('=========================Task 2=========================');
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке  убывания в противном случае.

let arrayAB = [];

let showArrayAB = (a,b) => {
    if( a < b){
        for(let i = a; i <= b; i++){
            arrayAB.push(i);
        } 
    } else {
        for(let i = a; i >= b; i--){
            arrayAB.push(i);
        } 
    }
    return arrayAB;
}

console.log(showArrayAB(17,13));

// Task 3
console.log('=========================Task 3=========================');
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let numb = [1,4,5,6,8,10];
console.log(numb);

let exchangeEl = (array, i) => {
    //numb, 2
    let a = array[i] //5
    let b = array[i + 1] //5
    array[i + 1] = a;
    array[i] = b;
    return array;
}

console.log(exchangeEl(numb, 2));

// Task 4
console.log('=========================Task 4=========================');
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
let move = [1,5,0,6,6,78,0,0,6,7,9,0,5];
console.log(move);

let moveToEnd = (array) => {
   let filtered = array.filter((val) => val !== 0);
   
   let length = array.length - filtered.length;
   
   for ( let i = 0; i < length; i++){
       filtered.push(0);
   }
   return filtered;
   
}

console.log(moveToEnd(move));
