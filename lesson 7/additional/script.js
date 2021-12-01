
let showTaskLabel = (number) => console.log(`=========================Task ${number}=========================`);

//===========================Task 1===========================
showTaskLabel(1);

// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }
function Address(street,suite,city,zipcode,geo){
    this.street =street;
    this.suite = suite;
    this.city = city;
    this.zipcode = zipcode;
    this.geo = geo;
}
function Geo(lat,lng){
    this.lat = lat;
    this.lng = lng;
}
function Company(companyName,catchPhrase,bs){
    this.companyName = companyName;
    this.catchPhrase = catchPhrase;
    this.bs = bs;
}

function Employee(id,name,username,email,street,suite,city,zipcode,lat,lng,phone,website,companyName,catchPhrase,bs) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = new Address(street,suite,city,zipcode, new Geo(lat,lng));
    this.phone = phone;
    this.website = website;
    this.company = new Company(companyName,catchPhrase,bs)
}

let employee = new Employee(1,'Leanne Graham','Bret','Sincere@april.biz','Kulas Light','Apt. 556','Gwenborough','92998-3874','-37.3159','81.1496','1-770-736-8031 x56442','hildegard.org','Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets');

console.log(employee);


//===========================Task 2===========================
showTaskLabel(2);

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//  -назва тегу ()
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результуючого об'єкту
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
class Attribute{

    constructor(attribute,description){
        this.attribute = attribute;
        this.description = description;
    }
}

class Tag {

    constructor(name,action,attribute1,description1,attribute2,description2,attribute3,description3) {
        this.name = name;
        this.action = action;
        this.attribute = [new Attribute(attribute1,description1), new Attribute(attribute2,description2), new Attribute(attribute3,description3)];
    }
}

let form = new Tag('form','Створює форму на сторінці і відправляє дані із заповненої форми', 'action', 'вказує шлях відправлення даних','name', 'визначає імья форми', 'method', 'визначає, який HTTP method використовувати при надсиланні форми(POST - приховує дані, які надсилає)');
console.log(form);

let select = new Tag('select', 'Створює випадаючий список','name', 'Визначає імя випадаючого списка', 'required', 'вказує, що обовьязкого потрібно зробити вибір', 'disabled', 'неможливо зробити вибір');
console.log(select);