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