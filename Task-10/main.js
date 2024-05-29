// 1. Запросить у пользователя два числа и вывести их сумму, разность, произведение и частное.

// let firstNum = parseInt(prompt("Введите первое число."));
// let secondNum = parseInt(prompt("Введите второе число."));
// alert(`Сумма: ${firstNum + secondNum}\nРазность: ${firstNum - secondNum}\nПроизведение: ${firstNum * secondNum}\nЧастное: ${firstNum / secondNum}`);

// 2. Напишите программу, которая проверяет, является ли введенное пользователем число четным или нечетным.

// function isOdd(num) {
//     if (num % 2 !== 0) {
//         alert("Число нечётное.");
//     }
//         alert("Число чётное.");
// }

// isOdd(10);

// 3. Напишите программу, которая выводит числа от 1 до 100, заменяя числа, которые делятся на 3 на "Fizz", числа, которые делятся на 5 на "Buzz", а числа, которые делятся на оба на "FizzBuzz".

// function numbers() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         }
//         console.log(i);
//     } 
// }

// numbers();

// 4. Напишите функцию, которая принимает два числа в качестве аргументов и возвращает их сумму.

     //function declaration
// function getSum(num1, num2) {
//     return num1 + num2;
// }

// let result = getSum(2,5);
// console.log(result);

     //function expression
// let sum = function(num1, num2) {
// return num1 + num2;
// }

// let result = sum(9,4);
// console.log(result);

     //arrow function
// let sum = (num1, num2) => num1 + num2;

// let result = sum(7,9);
// console.log(result);


     //IIFE
// console.log((function getSum(num1, num2) {
//         return num1 + num2;
// })(3,8));

