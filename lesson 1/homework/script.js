
// Tasks 1 and 2

// let a = 'hello';
// let b = 'owu';
// let c = 'com';
// let d = 'ua';
// let e = 1;
// let f = 10;
// let g = -999;
// let h = 123;
// let i = 3.14;
// let j = 2.7;
// let k = 16;
// let l = true;
// let m = false;

showVariables('hello','owu','com','ua',1,10,-999,123,3.14,2.7,16,true,false);

// a = 'hi';
// b = 'world';
// c = 'whats';
// d = 'up';
// e = 2;
// f = 100;
// g = -9999;
// h = 1234;
// i = 3.4567;
// j = 5.10;
// k = 20;
// l = false;
// m = true;

showVariables('hi','world','whats','up',2,100,-9999,1234,2.17,5.10,20,false,true);


function showVariables(a1,b1,c1,d1,e1,f1,g1,h1,i1,j1,k1,l1,m1) {
    let a = a1;
    let b = b1;
    let c = c1;
    let d = d1;
    let e = e1;
    let f = f1;
    let g = g1;
    let h = h1;
    let i = i1;
    let j = j1;
    let k = k1;
    let l = l1;
    let m = m1;
    
    console.log(`${a} ${b} ${c} ${d} ${e} ${f} ${g} ${h} ${i} ${j} ${k} ${l} ${m}`);
    alert(`${a} ${b} ${c} ${d} ${e} ${f} ${g} ${h} ${i} ${j} ${k} ${l} ${m}`);
    document.write(`<br> ${a} ${b} ${c} ${d} ${e} ${f} ${g} ${h} ${i} ${j} ${k} ${l} ${m}`);
}


// Tasks 3

let firstName = 'Mariana';
let middleName = 'Volodumurivna';
let lastName = 'Zavarynska';
let person = firstName.concat(middleName, lastName);
console.log(person);
console.log( firstName + ' ' + middleName + ' ' + lastName);

// Tasks 4

const btn = document.getElementById('btn');
const page = document.getElementById('page')

btn.addEventListener('click', setInfo)

function setInfo() {
    let firstName = prompt("Please enter your firstName", "Harry");
    let middleName = prompt("Please enter your middleName", "Romanovuch");
    let age = prompt("Please enter your age" , 25);
     if( firstName && middleName && age) {
      page.innerHTML = 'Hello' + ' ' + firstName + ' ' + middleName + '.' + `<br>` + 'You' + ' ' + 'are' + ' '+ age + ' ' + 'years'+ ' ' + 'old'
     } else{
     page.innerHTML = '<h3>Please enter your info</h3>';
     }
    
}

// Tasks 5

readType();

function readType(){
    let a = 100;
    let b = '100';
    let c = true;

    console.log( a, typeof a);
    console.log( b, typeof b);
    console.log( c, typeof c);
}

// Tasks 6

console.log('5 ? 6 -> true');
console.log(5 < 6);
console.log(' 5 ? 6 -> false');
console.log(5 > 6);
console.log(' 5 ? 6 -> false');
console.log(5 == 6);
console.log(' 5 ? 6 -> false');
console.log(5 === 6);
console.log('10 ? 10 -> true');
console.log(10 ==10);
console.log('10 ? 10 -> true');
console.log(10 === 10);
console.log('10 ? 10 -> true');
console.log(10 >= 10);
console.log('10 ? 10 -> false');
console.log(10 != 10);
console.log('10 ? 10 -> false');
console.log(10 !== 10);
console.log('10 ? 10 -> false');
console.log(!(10 == 10));
console.log('10 ? 10 -> false');
console.log(10 > 10);
// ...
console.log(" 123 ? '123' -> false ");
console.log (123 === '123');
console.log(" 123 ? '123' -> true ");
console.log (123 == '123');

// Task 7

let str = "20";
let a = 5;

document.write( "<br/>" + str + a + "<br/>"); 
// 205 тому що "20" це тип стрінг і виходить складання двох стрінгів, отже врезультаті складання ми отримуємо тип даних  стрінг
// всі інші оператори типу - * : працюють як звичайно

document.write(str - a + "<br/>"); 
document.write(str * "2" + "<br/>");
document.write(str / 2 + "<br/>");








