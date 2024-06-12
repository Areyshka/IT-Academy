// 1 Задание: Подсчет суммы чисел в массиве
// Попросите пользователя ввести несколько чисел через запятую (promt или input) .
// Разделите введенную строку на отдельные числа и сохраните их в массиве.
// Вычислите сумму всех чисел в массиве.
// Выведите сумму на экран.

// let text = document.getElementById('text');
// let numbers = prompt("Введите несколько чисел через запятую.");

// let arr = numbers.split(",").map(Number);
// let result = arr.reduce((sum, elem) => sum + elem, 0);
// text.textContent = result;

// 2 Задание: Поиск наибольшего слова в строке
// Попросите пользователя ввести строку.
// Разделите введенную строку на отдельные слова.
// Найдите самое длинное слово в строке.
// Выведите найденное самое длинное слово на экран.
// Пример ввода/вывода:
// Введите строку: JavaScript - это прекрасный язык программирования!
// Самое длинное слово: программирования

// let text = document.getElementById('text');
// let str = prompt("Введите строку:");
// let arr = str.split(" ");

// let result = arr.reduce((word, elem) => word.length > elem.length ? word : elem);
// text.textContent = result;

// 3 Задание: Генератор случайных паролей
// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// Создайте функцию, которая принимает на вход длину пароля.
// Внутри функции сгенерируйте случайный пароль заданной длины из букв верхнего и нижнего регистра, а также из цифр.
// Выведите сгенерированный пароль на экран.

// let text = document.getElementById('text');
// let num = parseFloat(prompt("Введите длину пароля (число):"));
// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// function getPassword(num) {
//     let result = "";
//     for (let i = 0; i < num; i++) {
//         let index = Math.floor(Math.random() * characters.length);
//         result += characters[index];
//     }
//     return result;
// }

// let password = getPassword(num);
// text.textContent = password;

