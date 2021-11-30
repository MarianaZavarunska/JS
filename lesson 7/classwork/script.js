
let showTaskLabel = (number) => console.log(`=========================Task ${number}=========================`);

//===========================Task 1===========================
showTaskLabel(1);
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. 
// Додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Driver(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
}

function Car(model, producer, dateAppeared, maxSpeed, engineCapacity) {

    this.model = model;
    this.producer = producer;
    this.dateAppeared = dateAppeared;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`We are driving with speed ${maxSpeed}km. per hour! Immediately, decrease speed!`);
    };
    this.info = function () {

        Object.keys(this).forEach(key => {
            if (key !== 'drive' && key !== 'info' && key !== 'increaseMaxSpeed' && key !== 'changeYear' && key !== 'addDriver') {
                if (key === 'driver' && this.driver) {
                    let infoDriver = [];
                    Object.values(this.driver).forEach(info => {
                        infoDriver.push(info);
                    });
                    console.log(`${key}`, infoDriver);

                } else {
                    console.log(`${key} - ${this[key]}`);

                }
            }
        });
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    };
    this.changeYear = function (newValue) {
        this.dateAppeared = newValue;
    };
    this.addDriver = function (driver) {
        driver = new Driver(1, 'Joe', 31);
        this.driver = driver;

    };
}

let car = new Car("rav-4", "toyota", 2000, 150, 1.7);

console.log(car);
car.increaseMaxSpeed(75);
car.changeYear(2010);

console.log(car);
car.drive();
car.addDriver();
car.info();


//===========================Task 2===========================
showTaskLabel(2);
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Driver2 {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
class Car2 {
    constructor(model, producer, dateAppeared, maxSpeed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.dateAppeared = dateAppeared;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    };

    drive() {
        console.log(`We are driving with speed ${this.maxSpeed} km. per hour! Immediately, decrease speed!`);
    };

    info() {
        Object.keys(this).forEach(key => {
            if (key !== 'drive' && key !== 'info' && key !== 'increaseMaxSpeed' && key !== 'changeYear' && key !== 'addDriver') {
                if (key === 'driver' && this.driver) {
                    let infoDriver = [];
                    Object.values(this.driver).forEach(info => {
                        infoDriver.push(info);
                    });
                    console.log(`${key}`, infoDriver);

                } else {
                    console.log(`${key} - ${this[key]}`);

                }
            }
        })
    };

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    };
    changeYear(newValue) {
        this.dateAppeared = newValue;
    };
    addDriver(driver) {
        driver = new Driver2(2, 'John', 35);
        this.driver = driver;

    };
}

let car2 = new Car2("X-5", "BMW", 2012, 180, 2.0);

console.log(car2);
car2.increaseMaxSpeed(75);
car2.changeYear(2015);

console.log(car2);
car2.drive();
car2.addDriver();
car2.info();

//===========================Task 3===========================
showTaskLabel(3);
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, feetSize) {
        this.name = name;
        this.age = age;
        this.feetSize = feetSize;
    }
}
let cinderellas = [];
for (let i = 0; i < 10; i++) {
    cinderellas.push(new Cinderella(`Ann${i}`, (i + 1) * 3, (i + 1) * 4));
}

console.log(cinderellas);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, foundShoes) {
        this.name = name;
        this.age = age;
        this.foundShoes = foundShoes;
    }
}

let prince = new Prince('Carl', 29, 36);
console.log(prince);

// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// for (let princess of cinderellas) {
//     if (princess.feetSize === prince.foundShoes) {
//         console.log(`${princess.name} and ${prince.name} are a great couple!`);
//     }
// }

let suitable = cinderellas.find((princess) => princess.feetSize === prince.foundShoes);

console.log( (suitable !== null) ? `${suitable.name} and ${prince.name} are suitable` : 'There is not suitable couple' );
