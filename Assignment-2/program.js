//Write javascript code to display from 1 to 100 but just even numbers.

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//Output: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100


//Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

function calculator(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            return a / b;
            break;
        default:
            return 'Invalid operator';
    }
}

console.log(calculator(10, 5, '+')); //15
console.log(calculator(10, 5, '-')); //5   
console.log(calculator(10, 5, '*')); //50
console.log(calculator(10, 5, '/')); //2




//. You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.

/*if 500000 >= salary > 0 then 0% tax on the entire salary.
If 1000000 >= salary > 500000 then 10% tax on the entire salary.
If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
If the salary > 1500000 then 30% tax on the entire salary.*/


function findTax(salary) {
    let tax = 0;
    switch (true) {
        case salary > 1500000:
            tax = salary * 0.3;
            break;
        case salary > 1000000:
            tax = salary * 0.2;
            break;
        case salary > 500000:
            tax = salary * 0.1;
            break;
        default:
            tax = 0;
    }
    return tax;
}

console.log(findTax(500000)); //0
console.log(findTax(600000)); //60000
console.log(findTax(1000000)); //100000
console.log(findTax(1500000)); //300000

//Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

function sumOfProducts(n1, n2) {
    let sum = 0;
    while (n1 > 0 && n2 > 0) {
        sum += (n1 % 10) * (n2 % 10);
        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
    }
    return sum;
}

console.log(sumOfProducts(6, 34));  //24
console.log(sumOfProducts(123, 456));  //32