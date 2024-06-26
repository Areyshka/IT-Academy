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

// 5. Работа с объектами:
// Создайте объект user, содержащий поля name, age и address. address должен быть объектом, содержащим поля city и country
// Напишите функцию, которая изменяет возраст в объекте myInfo
// Напишите функцию, которая добавляет новое поле "email" в объект myInfo.
// Напишите функцию, которая удаляет поле "country" из объекта address
// Напишите функцию, которая выводит всю информацию о пользователе в формате "Имя: {name}, Возраст: {age}, Город: {city}".

// let user = {
//     name: "Elena",
//     age: 27,
//     address : {
//         city: "Grodno",
//         country: "Belarus",
//     }
// };

// function changeAge(newAge) {
//     user.age = newAge;
// }

// changeAge(25);
// console.log(user);

// function addEmail(email) {
//     user.email = email;
// }

// addEmail("elena@mail.ru");
// console.log(user);

// function deleteCountry() {
//     delete user.address.country;
// }

// deleteCountry();
// console.log(user);

// function outputInfo() {
//     console.log(`Имя: ${user.name}, Возраст: ${user.age}, Город: ${user.address.city}`);
// }

// outputInfo();

// 6. Напишите HTML страницу с полем ввода текста и блоком для отображения этого текста. Используя JavaScript, реализуйте следующее: при вводе текста в поле ввода, текст должен моментально отображаться в блоке.

// let inputText = document.getElementById('inputText');
// let output = document.getElementById('output');

// inputText.addEventListener('input', function() {
//     output.textContent = inputText.value;
// });

// 7. Напишите программу, которая изменяет заголовок страницы в зависимости от того, активно ли окно браузера или скрыто. При активном окне заголовок должен быть "Hello", а если окно скрыто (например, пользователь переключился на другую вкладку), то заголовок должен быть "Come back!".    

// let title = document.getElementById('title');

// document.addEventListener ('visibilitychange', function() {
//     if (document.hidden) {
//         title.textContent = "Come back!";
//     } else {
//         title.textContent = "Hello";
//     }
// });

// 8. (Ошибки)
// Функция, которая приветствует пользователя по имени, исправленная

// function greet(name) {
//     return `Hello, ${name}!`;
// }

// let result = greet("Anton");
// console.log(result);

// Hello, Anton!


// Функция, которая возвращает наибольшее из двух чисел, исправленная

// function getMaxNumber(a, b) {
//     if (a < b) {
//         return b;
//     } else {
//         return a;
//     }
// }

// let result = getMaxNumber(5,3);
// console.log(result);