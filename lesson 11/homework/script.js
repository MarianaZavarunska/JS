let showTaskLabel = (number) => console.log(`=========================Task ${number}=========================`);

//===========================Task 1===========================
showTaskLabel(1);

// -створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage

const formInfo = document.forms.info;
const btn = document.getElementById('submit');
// console.log(formInfo)

btn.addEventListener('click', (e) => {
     e.preventDefault();
    
     let firstName = formInfo.elements.firstName.value;
     let age = formInfo.elements.age.value;

     let person = {firstName, age};
     localStorage.setItem('person',JSON.stringify(person));
    
})


//===========================Task 2===========================
showTaskLabel(2);

// -створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

const formCar = document.forms.car;
const btnCar = document.getElementById('car-btn');

let cars = [];

btnCar.addEventListener('click', () => {
    let model = formCar.elements.model.value;
    let type = formCar.elements.type.value; 
    let volume = formCar.elements.volume.value;

    if(model === "" || type === "" || volume === "") {
        return;
    }
    let car = { model, type, volume};
   
    cars.push(car);
    
    if (localStorage.getItem('cars')){

        let oldCar = localStorage.getItem('cars') ;
        oldCar = JSON.parse(oldCar);
        oldCar.push(car);

        localStorage.setItem('cars', JSON.stringify(oldCar));
    } else {
        localStorage.setItem('cars', JSON.stringify(cars));
    }
    
});


