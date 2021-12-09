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

     localStorage.setItem('firstName', JSON.stringify(firstName));
     localStorage.setItem('age',JSON.stringify(age));
   
})
// localStorage.clear();