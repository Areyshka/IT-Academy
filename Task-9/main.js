// 1. Задача: Разворот строки asd dsa
// Запросите у пользователя строку и выведите ее в обратном порядке.

// function reverseString() {
//     let str = document.getElementById('inputString').value;
//     alert(str.split('').reverse().join(''));
// }

// function reverseString() {
//     let str = document.getElementById('inputString').value;
//     let reverseStr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverseStr += str[i];
//     }
//     alert(reverseStr);
// }

// 2. Задача: Подсчет гласных 
// Запросите у пользователя строку и выведите количество гласных букв в этой строке.

// function countVowels() {
//     let str = document.getElementById('inputString').value.toLowerCase();
//     let vowels = ['а', 'у', 'о', 'и', 'э', 'ы', 'я', 'ю', 'е', 'ё', 'a', 'e', 'i', 'o', 'u'];
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if(vowels.includes(str[i])) {
//             count++;
//         }
//     }
//     alert(count);
// }

// 3. Задача: Поиск максимального элемента в массиве
// Создайте массив чисел и найдите в нем максимальное значение.

// let arr = [5, 8, 3, 12, 6];

// function maxValue() {
//     alert(Math.max(...arr));
// }

// maxValue(arr);

// let numbers = [5, 8, 3, 12, 6];

// function maxValue() {
//     let maxNum = numbers[0];
//     for (let number of numbers) {
//         if (number > maxNum) {
//             maxNum = number;
//         }
//     }
//     alert(maxNum);
// }

// maxValue(numbers);

// 4.Сумма чисел в массиве:
// Создайте массив чисел и найдите сумму всех чисел в массиве.

// let numbers = [5, 8, 3, 12, 6];

// function getSum () {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     alert(sum);
// }

// getSum(numbers);

// 5. Поиск минимального элемента в массиве:

// let arr = [5, 8, 3, 12, 6];

// function getMin() {
//     alert(Math.min(...arr));
// }

// getMin(arr);

// let arr = [5, 8, 3, 12, 6];

// function getMin() {
//     let minValue = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (minValue > arr[i]) {
//             minValue = arr[i];
//         }
//     }
//     alert(minValue);
// }

// getMin(arr);

// 6. Счетчик посещений: localStorage
// Создайте счетчик посещений страницы, который сохраняется в локальном хранилище. При каждом посещении страницы увеличивайте счетчик и выводите его на экран.

// let visitCount = document.getElementById('visitCount');
// let count = localStorage.getItem('count');

// count++;
// localStorage.setItem('count', count);
// visitCount.textContent = count;


// 7. Поиск элемента в массиве:
// Создайте массив чисел и найдите в нем заданное число. Выведите на экран индекс этого числа в массиве.

// let arr = [5, 8, 3, 12, 6];
// let targetNumber = 12;

// function findElem(arr, targetNumber) {
//     alert(arr.indexOf(targetNumber));
// }

// findElem(arr, targetNumber);

// 8*. Задание: Создание пользователей
// Создайте класс User, который представляет пользователя. У пользователя должны быть следующие свойства:
// name (строка) - имя пользователя,
// age (число) - возраст пользователя,
// email (строка) - электронная почта пользователя.
// Также у класса User должен быть метод getInfo(), который возвращает строку с информацией о пользователе в формате "Имя: [name], Возраст: [age], Email: [email]".

// class User {
//     constructor (name, age, email) {
//         this.name = name;
//         this.age = age;
//         this.email = email;
//     }

//     getInfo() {
//         return (`Имя: ${this.name}, Возраст: ${this.age}, Email: ${this.email}`)
//     }
// }

// let user1 = new User("Elena", 27, "elena@mail.ru");
// alert(user1.getInfo());