// Назначение обработчика событий
document.getElementById('textInput').addEventListener('input', () => {
    // Получение элемента ввода и элемента заголовка h2
    let input = document.getElementById('textInput');
    let h2 = document.getElementById('result');
    // Получение количества гласных
    let count = getVowels(input.value);
    // Проверка на пустое значение ввода
    if (input.value === '') {
        // Скрытие элемента h2, если поле ввода пустое
        h2.style.display = 'none';
    } else {
        // Отображение элемента h2, если поле ввода не пустое
        h2.style.display = 'block'
        // Текст элемента h2 с информацией о вводимом тексте
        h2.innerText = `Вcего символов: ${input.value.length}\n\nГласных букв: ${count}`;
        // Изменение цвета текста h2 в зависимости от количества гласных
        if (count > 4) {
            h2.style.color = 'red';
        } else {
            h2.style.color = 'blue';
        }
    }
})

// Функция для подсчёта количества гласных
function getVowels(input) {
    input = input.toLowerCase();
    let count = 0;
    // Создание массива из гласных
    let vowels = ['а', 'у', 'о', 'и', 'э', 'ы', 'я', 'ю', 'е', 'ё'];
    for (let i = 0; i < input.length; i++) {
        if (vowels.includes(input[i])) {
            count+=1;
        }
    }
    return count;
}