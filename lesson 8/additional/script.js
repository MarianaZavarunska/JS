
// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
console.log('Task 1');

let children = document.body.children;

console.log(children);

let arrayOfClasses = [];
function getArrayOfClasses(element) {
    if (element.children.length) {
        for (let child of element.children) {
            if (child.classList.length) {
                child.classList.forEach((className) => {
                    arrayOfClasses.push(className);
                });
            } else {
                getArrayOfClasses(child);
            }
        }
    }
}
getArrayOfClasses(document.body);
console.log(arrayOfClasses);