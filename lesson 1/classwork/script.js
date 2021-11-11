// Task 1

const arrayLength = 10;
const randomArray = [];

for(let i = 0; i < arrayLength; i++) {
    randomArray.push(Math.floor(Math.random() * 10)); // number from 0 to 10
}
console.log(randomArray);

// Task 2

let book = {
    name: "Harry Potter",
    numberOfPages: 500,
    genre: 'Fantasy Fiction'
};
console.log(book);

// Task 3

book.authors = "J. K. Rowling";
console.log(book);

// Task 4

let books = [
    { 
        "name": "Harry Potter",
        "numberOfPages": 500,
        "genre": "Fantasy Fiction",
        "authors": "J. K. Rowling"
    },
    { 
        "name": "Da Vinci Code",
        "numberOfPages": 500,
        "genre": "Crime/Thriller",
        "authors": "Dan Brown"
    }, 
    { 
        "name": "Fifty Shades of Grey",
        "numberOfPages": 500,
        "genre": "Romance",
        "authors": "E. L. James"
    }
]

console.log(books);
console.log(books[0]);
console.log(books[1]);
console.log(books[2]);

// Task 5

let s = rectangleArea(23,10);
console.log("s=" + s);

function rectangleArea(h,w){
    return h * w;
}

// Task 6

let v = cylinderVolume(10, 4)
console.log("v=" + v);

function cylinderVolume(h,d) {
    const pi = 3.14;
    return pi * d ** 2 / 4  * h;
}

// Task 7

let k = theoremPythagorean(3 , 4);
console.log("k=" + k);

function theoremPythagorean(n , m) {
   return Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
}
