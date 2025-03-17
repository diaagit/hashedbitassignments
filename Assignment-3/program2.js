// Create an array of states in india.

let states = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'];

//Remove all the names starting with vowels from the list. Use array.filter.

states = states.filter(state => !['A', 'E', 'I', 'O', 'U'].includes(state[0]));
console.log(states);
//Output: [ 'Bihar', 'Chhattisgarh', 'Gujarat', 'Haryana', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Punjab', 'Rajasthan', 'Tamil Nadu', 'Telangana', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal' ]


/* let str = 'I love my India'
output expected = 'India my love I'
Write code for this.*/

let str = 'I love my India';
let arr1 = str.split(' ');
let revArr = arr1.reverse();
let revStr = revArr.join(' ');
console.log(revStr);

//Output: India my love I


/*let string = 'INDIA'
output = 'INDONESIA'
Use array.splice*/

let string = 'INDIA';
let arr = string.split('');
arr.splice(3, 0, 'O');
let newString = arr.join('');
console.log(newString);

//Output: INDONESIA


//Take any string with minimum 20 characters. Count number of consonant and vowel in the string.


let str1 = 'This is a string with minimum 20 characters';
let vowels = 0;
let consonants = 0;
let strArr = str1.split('');
strArr.forEach(char => {
    if (['A', 'E', 'I', 'O', 'U'].includes(char.toUpperCase())) {
        vowels++;
    } else if (char.match(/[a-zA-Z]/)) {
        consonants++;
    }
});
console.log('Vowels: ', vowels);
console.log('Consonants: ', consonants);        

//Output: Vowels:  11
//Consonants:  23



/*Write a function to replace wrong word with correct word in any sentance.
Like this - correctfn(string, wrong, correct)
Use string.replace in function*/

function correctfn(string, wrong, correct) {
    return string.replace(wrong, correct);
}

let sentence = 'This is a wrong sentence';
let wrong = 'wrong';
let correct = 'correct';
console.log(correctfn(sentence, wrong, correct));

//Output: This is a correct sentence



/* inputArr = [1,2,3,9,10,7,5,4,3]
answer = [9, 10, 7]
User array.filter and return numbers greater than 5.*/

let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
let answer = inputArr.filter(num => num > 5);
console.log(answer);    

//Output: [ 9, 10, 7 ]


/*const students = [
{ name: "Ram", scores: [80, 70, 60] },
{ name: "Mohan", scores: [80, 70, 90] },
{ name: "Sai", scores: [60, 70, 80] },
{ name: "Hemang", scores: [90, 90, 80, 80] },
];
Output = [
{ name: "Ram", average: 70 },
{ name: "Mohan", average: 80 },
{ name: "Sai", average: 70 },
{ name: "Hemang", average: 85 },
];
Use array.map and array.reduce.*/

const students = [  { name: "Ram", scores: [80, 70, 60] },
{ name: "Mohan", scores: [80, 70, 90] },
{ name: "Sai", scores: [60, 70, 80] },
{ name: "Hemang", scores: [90, 90, 80, 80] },
];

let output = students.map(student => {
    let sum = student.scores.reduce((acc, score) => acc + score);
    let average = sum / student.scores.length;
    return { name: student.name, average: average };
}
);
console.log(output);

//Output: [ { name: 'Ram', average: 70 },
//  { name: 'Mohan', average: 80 },
//  { name: 'Sai', average: 70 },
//  { name: 'Hemang', average: 85 }
// ]


/*Write a function to find repeated sum of digits until there is only a single digit in the number.
Example - 456 - 4+5+6 = 15 - 1+5 = 6.*/

function repeatedSum(num) {
    while (num > 9) {
        let sum = 0;
        let numArr = num.toString().split('');
        numArr.forEach(digit => {
            sum += parseInt(digit);
        });
        num = sum;
    }
    return num;
}

let num = 456;
console.log(repeatedSum(num));

//Output: 6


//Write a function to count the number of words in a paragraph.

function countWords(paragraph) {
    return paragraph.split(' ').length;
}

let paragraph = 'This is a paragraph with some words';
console.log(countWords(paragraph)); 

//Output: 7



// Write a function to reverse a string.

function reverseString(str) {
    return str.split('').reverse().join('');
}   

let str2 = 'Hello';
console.log(reverseString(str2));

//Output: olleH


/*Input

[
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
]
    
Output: -
[
    student1: {
        average: 44
    },
    student2: {
        average: 44
    },
    student3: {
        average: 44
    }
]
Write code to find average as mentioned above. Use array and object methods.

*/

let students1 = [
    { student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
    { student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
    { student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } }
];

let output1 = students1.map(student => {
    let subjects = Object.values(student)[0];
    let sum = Object.values(subjects).reduce((acc, subject) => acc + subject);
    let average = sum / Object.values(subjects).length;
    return { average: average };
}
);
console.log(output1);   

//Output: [ { average: 64.2 }, { average: 64.2 }, { average: 64.2 } ]






