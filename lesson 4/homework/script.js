// Task 1
console.log('=========================Task 1=========================');

function findAreaRectangle(a,b){
    return a * b;
}

let area = findAreaRectangle(10,3);
console.log(area);

// Task 2
console.log('=========================Task 2=========================');

let circleArea = (r) => Math.PI * Math.pow(r,2);
let showMessage = (r) => `The area of circle with r = ${r} is ${circleArea(r)}`;

console.log(showMessage(5));

// Task 3
console.log('=========================Task 3=========================');

function findAreaCylinder(r,h){
    return 2 * findMainArea(r) + findAsideArea(r,h);
}

function findMainArea(r) {
     return Math.PI *  Math.pow(r,2);
}

function findAsideArea(r,h) {
    return 2 * Math.PI * r * h;
}

console.log(findAreaCylinder(2,5))


// Task 4
console.log('=========================Task 4========================='); 

let actors = ['Will Smith', 'Ryan Reynolds', 'Ben Stiller', 'Patrick Dempsey', 'Morgan Freeman', 'Dwayne Johnson', 'Adam Sandler', 'Arnold Schwarzenegger', 'Robert De Niro', 'Sylvester Stallone'];

showActor(actors);

function showActor(actors){
    actors.forEach(actor => {
        console.log(actor);
    });
}

// Task 5
console.log('=========================Task 5========================='); 

showParagraph('Ryan Reynolds is a Canadian-born Canadian-American actor and film producer. He began his career starring in the Canadian teen soap opera Hillside');

function showParagraph(text) {
    document.write(`<p class="info"> ${text}</p>`);
}


// Task 6
console.log('=========================Task 6========================='); 

createList('Will Smith');

function createList(text) {
   document.write('<ul class="actors">');
   for(i = 0; i < 3; i++){
       document.write(`<li>${text}</li>`)
   }

   document.write('</ul>');
}


// Task 7
console.log('=========================Task 7========================='); 

createListWithSize('Patrick Dempsey', 5);

function createListWithSize(text, amoung) {
    document.write('<ul class="actors">');
    for(i = 0; i < amoung; i++){
        document.write(`<li> ${text} </li>`)
    }
    document.write('</ul>');
 }

 // Task 8
console.log('=========================Task 8========================='); 

let friends = [ 'Ross', 'Rachel', 'Monica', 'Chandler', 'Phoebe', 'Joey'];

createListOfArrayElement(friends);

function createListOfArrayElement(friends){
    document.write('<ul class="friends-container">');
    for(i = 0; i < friends.length; i++){
        document.write(`<li> ${friends[i]} </li>`)
    }
    document.write('</ul>');

}
 
 // Task 9
 console.log('=========================Task 9========================='); 

 let users = [];

 fillArray();
 function fillArray() {
     for (let i = 0; i < 10; i++) {
         
        // let obj = {};
        //  obj['id'] = i;
        //  obj['name'] = i;
        //  obj['age'] = i + 10;
        
        // let obj = {
        //     'id' : i,
        //     'name' : 'name ' + i,
        //     'age' : i + 10
        // };
        
        //  users.push(obj);
        
        users.push({'id': i, 'name': 'name ' + i, 'age': i + 10});
     }
 }

 function showArrayOfObjects(users){
    for (let user of users) {
        document.write(`<div class="users"> id: ${user.id}; name: ${user.name}; age: ${user.age}</div>`);
    }
}

showArrayOfObjects(users);