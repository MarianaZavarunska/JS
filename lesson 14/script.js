
// Promise

// function getUp(day = 1) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if(day >= 1 && day <= 5){
//                 resolve('Lets sipping coffee!');

//             } else if(day === 6 || day === 7){
//                 resolve('Weekend');
//             }
//                 reject('Hit the hay!');

//         }, 2000)
//     })
// }

// function goToEat(meal){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`The ripe time to eat ${meal}`);
//         })

//     }, 1000)
// }

// function hitTheBooks(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Lets break it down!');
//         })

//     }, 70000)
// }

// function goToGym(day) {
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             if(day >= 1 && day <= 5){
//                 resolve('Have a workout!');

//             } else if (day === 6 || day === 7 ){
//                 resolve('Do a treadmill session!');
//             }

//             reject('Lets take a break');
//         })
//     }, 5000)
// }

// function work(isPupil) {
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             if(isPupil){
//                 resolve('Lets work again!');
//             }

//             reject('Chillax!');
//         })

//     }, 2000)
// }

// function goSpeakingClub(isWeekend) {
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             if(isWeekend){
//                 resolve('Lets speak a little bit!');
//             }

//             reject('Studying!');

//         }, 3000)
//     } ) 
// }

// getUp(2)
//    .then(day => {

//        console.log(day);

//        return goToEat('Pancakes')
//    })
//    .then(eating => {

//         console.log(eating);

//         return hitTheBooks();
//    })
//    .then(infoDone => {

//        console.log(infoDone);

//        return goToGym(2);
//    }) 
//    .then(workoutCompleted => {
//        console.log(workoutCompleted);

//        return goToEat('Buckwheat')
//    })
//    .then(eating => {
//        console.log(eating);

//        return work(true);
//    })
//    .then(lessonFinished => {
//        console.log(lessonFinished);

//        return getUp(6)
//    })
//    .then(weekend => {
//        console.log(weekend);

//        return goToGym(6)
//    })
//    .then(workoutCompleted => {
//        console.log(workoutCompleted);

//        return goSpeakingClub(true);
//    })
//    .then( speaking => {
//        console.log(speaking);
//    })
//    .catch(reason => {
//       console.log('error', reason);
//    })



//Callbacks


// function getUp(day = 1, cb){
//     setTimeout(() => {
//         if(day >= 1 && day <= 5){
//             cb(null, 'Lets sipping coffee!');

//             return;
//         }

//           cb('hit the hay');
//     }, 1000)
// }

// function goToEat(meal, cb){
//     setTimeout(() => {
//         if(meal){
//             cb(null,`The ripe time to eat ${meal}`);

//             return;
//         }

//         cb('Lets take a rain check!');

//     }, 2000)
// }

// function goToStudy(cb){
//     setTimeout(() => {
//         cb(null, 'Lets break it down!');

//         return;
//     })
// }

// function goToGym(day, cb){
//     setTimeout(() => {
//         if(day >= 1 && day <= 5){
//             cb(null, 'Do the workout!');

//             return;
//         }

//         cb('Lets take a break');
//     }, 4000)
// }

// function work(isPupil = true, cb) {
//     setTimeout(() => {
//         if(isPupil){
//             cb(null, 'Working');

//             return;
//         }

//         cb('Chill');
//     }, 3000)
// }

// getUp(3, (err, morning) => {
//     if(err){
//         console.log('OOPS');

//         return;
//     }

//     console.log(morning);

//     goToEat('Pancakes', (err, breakfast) =>{
//         if(err){
//             console.log(err);

//             return;
//         }

//         console.log(breakfast);

//         goToStudy((err, studying) => {
//             if(err){
//                 console.log(err);

//                 return;
//             }

//             console.log(studying);

//             goToGym(3, (err, workout) => {
//                 if(err){
//                     console.log(err);

//                     return;
//                 }

//                 console.log(workout);

//                 goToEat('Buckwheat', (err, dinner) => {
//                     if(err){
//                         console.log(err);

//                         return;
//                     } 

//                     console.log(dinner);

//                     work(true, (err, working) => {
//                         if(err){
//                             console.log(err);

//                             return;
//                         }

//                         console.log(working);
//                         console.log('Go to Bed !')

//                     })

//                 })
//             })
//         })
//     })
// })

//USING ASYNC/AWAIT

// let container = document.createElement('div');
// document.body.append(container);


// async function getUp() {
//     setTimeout(() =>  {
//          container.innerHTML = `<h2>Good Morning</h2><video src="https://i.giphy.com/media/KNy9sP4auz6n45gsMQ/giphy360p.mp4" autoplay="" loop="" muted="" playsinline="" onerror="this.onerror=()=>{};this.src='https://i.giphy.com/KNy9sP4auz6n45gsMQ.mp4';">
//     <img src="https://i.giphy.com/KNy9sP4auz6n45gsMQ.gif " alt="">
// </video>`
//   }, 1000);
// }

// async function cookingBreakfast(){
//     setTimeout(() => {
//         container.innerHTML = `<h2>Breakfast</h2><video src="https://i.giphy.com/media/AHqBiauvJ6ZaPcQB0T/giphy360p.mp4" autoplay="" loop="" muted="" playsinline="" onerror="this.onerror=()=>{};this.src='https://i.giphy.com/AHqBiauvJ6ZaPcQB0T.mp4';">
//         <img src="https://i.giphy.com/AHqBiauvJ6ZaPcQB0T.gif " alt="">
//     </video>`;
//    }, 4000)
// }

// async function sippingCoffee() {
//   setTimeout(() => {
//      container.innerHTML = `<h2>Coffee Time</h2><video src="https://i.giphy.com/media/Y0NhkIdyT3TVBDWLkG/giphy360p.mp4" autoplay="" loop="" muted="" playsinline="" onerror="this.onerror=()=>{};this.src='https://i.giphy.com/Y0NhkIdyT3TVBDWLkG.mp4';">
//         <img src="https://i.giphy.com/Y0NhkIdyT3TVBDWLkG.gif " alt="">
//     </video>`;
// }, 7700)
// }

// async function studying() {
//     setTimeout(() => {
//         container.innerHTML = `<h2>Studying</h2><video src="https://i.giphy.com/media/VP6DBjjWBzDBK8eqDO/giphy360p.mp4" autoplay="" loop="" muted="" playsinline="" onerror="this.onerror=()=>{};this.src='https://i.giphy.com/VP6DBjjWBzDBK8eqDO.mp4';">
//         <img src="https://i.giphy.com/VP6DBjjWBzDBK8eqDO.gif " alt="">
//     </video>`;
//    }, 11000)
// }

// async function goToEat() {
//       setTimeout(() => {
//         container.innerHTML = `<h2>Eating</h2><video src="https://i.giphy.com/media/mv7i2xjbgAqW8BD7te/giphy360p.mp4" autoplay="" loop="" muted="" playsinline="" onerror="this.onerror=()=>{};this.src='https://i.giphy.com/mv7i2xjbgAqW8BD7te.mp4';">
//         <img src="https://i.giphy.com/mv7i2xjbgAqW8BD7te.gif " alt="">
//     </video>`;
    
//     }, 13000)
// }

// async function goToGym() {
//     setTimeout(() => {
//         container.innerHTML = `<h2>Workout</h2><video src="https://i.giphy.com/media/zMaweBUXlZzFrGdHrT/giphy360p.mp4" autoplay="" loop="" muted="" playsinline="" onerror="this.onerror=()=>{};this.src='https://i.giphy.com/zMaweBUXlZzFrGdHrT.mp4';">
//         <img src="https://i.giphy.com/zMaweBUXlZzFrGdHrT.gif " alt="">
//     </video>`;
    
//     }, 16000)
// }

// async function congratulating() {
//     setTimeout(() => {
//         container.innerHTML = `<h1>Happy New Year OKTEN!</h1> <h3>Merry Christmas!</h3> <video src="https://i.giphy.com/media/tMLGAJe7CYypcoeYYr/giphy360p.mp4" autoplay="" loop="" muted="" playsinline="" onerror="this.onerror=()=>{};this.src='https://i.giphy.com/tMLGAJe7CYypcoeYYr.mp4';">
//         <img src="https://i.giphy.com/tMLGAJe7CYypcoeYYr.gif " alt="">
//     </video>`;
    
//     }, 18000)
// }



// async function schedule() {

//     await getUp();
//     await cookingBreakfast();
//     await sippingCoffee();
//     await studying();
//     await goToEat();
//     await goToGym();
//     await congratulating();
   
// }

// schedule();


function wakeUp(day = 1){
    return new Promise((resolve,reject) => {
        setTimeout( () => {
           if(day >= 1 && day <= 5){
               resolve('Good morning!');
           }

           reject('Lets sleep in!')
        }, 1000)
    } )
}

function haveMeal(meal) {
    return new Promise((resolve,reject) => {
        setTimeout( () => {

           meal ? resolve(`The ripe time to eat ${meal}`): reject('You need to go grocery shopping!')
       
        }, 2000)
    } )

}

function studying(info){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            info ? resolve(`Time for studying ${info}`): reject('Chillax')
        })
    }, 5000)
}

function goToGym(workout){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            workout ? resolve(`Do ${workout} workout`): reject('Take a break!')
        })
    }, 4000)
}

let message = (message) => console.log(`=====${message}=====`);

async function schedule(day) {
    try{
        let response = await wakeUp(day);
        message(`Today is ${day} day of week`);
        message(response);

        response = await haveMeal('Pancakes');
        message(response);

        response = await studying('Information Technology');
        message(response);

        response = await goToGym('Strength');
        message(response);

        response = await haveMeal('Buckwheat');
        message(response);


    } catch(e){
        console.log('======');
        console.error(e);
        console.log('======');
    }
}

schedule(2);