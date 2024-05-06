// Назначение обработчика событий
document.getElementById('textInput').addEventListener('input', () => {
    // Получение элемента ввода и элемента заголовка h2
    let input = document.getElementById('textInput');
    let h2 = document.getElementById('result');
    // Проверка на пустое значение ввода
    if (input.value === '') {
        // Скрытие элемента h2, если поле ввода пустое
        h2.style.display = 'none';
    } else {
        // Отображение элемента h2, если поле ввода не пустое
        h2.style.display = 'block'
        // Текст элемента h2 с информацией о вводимом тексте
        h2.innerText = `Вcего символов: ${input.value.length}`;
    }
})