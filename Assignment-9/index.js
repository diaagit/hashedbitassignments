//Write a JavaScript function that declares a variable using let, const, and var. What is the difference in scope for each?

function variableScope() {  
    let x = 10;  
    const y = 20;  
    var z = 30;  
    console.log(x);  
    console.log(y);  
    console.log(z);  
}
variableScope();


//Create an array called fruits that contains five different fruit names. Write a function that returns the second fruit in the array.

let fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];

function secondFruit() {
    return fruits[1];
}
console.log(secondFruit());


//Write a function that takes an array as an argument, adds a new element to the end of the array using push(), and then removes the last element using pop(). Return the modified array.

let array = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];

function modifyArray(arr) {
    arr.push('Pineapple');
    arr.pop();
    return arr;
}
console.log(modifyArray(array));


//Create an array of numbers and write a function that uses the map() method to return a new array containing each number squared.

let numbers = [1, 2, 3, 4, 5];

function squareNumbers(arr) {
    return arr.map(num => num * num);
}
console.log(squareNumbers(numbers));


//Write a function that filters out all even numbers from an array of numbers using the filter() method. Return the new array of odd numbers

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function oddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}
console.log(oddNumbers(numbers1));


//Create an object called person with properties for name, age, and occupation. Write a function that logs a greeting message using these properties.

let person = {
    name: 'John',
    age: 30,
    occupation: 'Developer'
};

function greetPerson(obj) {
    return `Hello, my name is ${obj.name}, I am ${obj.age} years old, and I work as a ${obj.occupation}.`;
}
console.log(greetPerson(person));


//Write a function that takes an object with properties width and height and returns the area of a rectangle (width * height).


let rectangle = {
    width: 10,
    height: 20
};  

function calculateArea(obj) {
    return obj.width * obj.height;
}
console.log(calculateArea(rectangle));


//Given an object with various properties, write a function that returns an array of the object’s keys using Object.keys().

let car = {     
    make: 'Toyota',     
    model: 'Camry',     
    year: 2020,     
    color: 'red' 
};

function getKeys(obj) {
    return Object.keys(obj);
}
console.log(getKeys(car));


//Write a function that takes two objects as arguments and merges them into one object using Object.assign(). Return the new object.

let obj1 = {
    name: 'John'
};

let obj2 = {
    age: 30
};

function mergeObjects(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
console.log(mergeObjects(obj1, obj2));



//Create an array of numbers and write a function that uses the reduce() method to calculate the sum of all the numbers in the array.

let numbers2 = [1, 2, 3, 4, 5];

function sumNumbers(arr) {
    return arr.reduce((total, num) => total + num, 0);
}
console.log(sumNumbers(numbers2));















