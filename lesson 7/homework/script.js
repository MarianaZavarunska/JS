let showTaskLabel = (number) => console.log(`=========================Task ${number}=========================`);

//===========================Task 1===========================
showTaskLabel(1);

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id,name,surname,email,phone){

        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
}

let array = [];

function createArray(array){
    
    for(let i = 0; i < 10; i++){
        array.push(new User(i,'Katya','Varnava','some@email.com','(+380)95-674-95-13'));
    }
}

createArray(array);

console.log(array);

//===========================Task 2===========================
showTaskLabel(2);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filtered = array.filter((user) => user.id % 2 === 0)

console.log(filtered);

//===========================Task 3===========================
showTaskLabel(3);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sorted = array.sort((user1,user2) => user2.id - user1.id );   //відсортувала по спаданню бо згенерований вже посортований по зростанню

console.log(sorted);

//===========================Task 4===========================
showTaskLabel(4);
// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів) 
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {

    constructor(id,name,surname,email,phone,order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

}

// class Clients {

//     constructor(){
//         this.clients = []
//     }
//     newClient(id,name,surname,email,phone,order){
//         let client = new Client(id,name,surname,email,phone,order);
//         this.clients.push(client);
//     }

//     get AllClients(){
//         return this.clients
//     }
// }

// let clients = new Clients();

// for(let i = 0; i < 10; i++){
//     clients.newClient(i,'Katya','Varnava','some@email.com','(+380)95-674-95-13', ['iphone','tablet','laptop']);
// }

// console.log(clients.AllClients);

let clients = [];

function createClients(clients){
    
    for(let i = 0; i < 10; i++){
        let numberOfOrders = Math.ceil(Math.random() * 10);
        let arrayOfOrders = [];
        
        for (let index = 0; index < numberOfOrders + 1; index++) {
            arrayOfOrders.push('product ' + index);
        }
        clients.push(new Client(i,'Katya','Varnava','some@email.com','(+380)95-674-95-13', arrayOfOrders));

    }

}

createClients(clients);

console.log(clients);


//===========================Task 5===========================
showTaskLabel(5);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortedByOrders = clients.sort((client1,client2) => client2.order.length - client1.order.length );

console.log(sortedByOrders);
