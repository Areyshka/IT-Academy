// Запрос информации и возрат ответа или null
function promptInfo(question) {
    let answer = prompt(question);
    return (!answer || answer === null) ? null : answer;
}

// Запрос возраста и возврат ответа или null
function promptAge(question) {
    let answer = prompt(question);
    return (!answer || answer === null || isNaN(answer)) ? null : answer;
}

// Получение полного имени пользователя с проверкой корректности введенных данных и возвращение его или null
function getFullName() {
    const firstName = promptInfo("Как Вас зовут? (Имя)");
    const middleName = promptInfo("Какое у Вас отчество?");
    const lastName = promptInfo("Какая у Вас фамилия?");
    return (firstName === null || middleName === null || lastName === null) ? null : `${lastName} ${firstName} ${middleName}`;
}

// Получение возраста пользователя с проверкой корректности введенных данных и возвращение его или null
function getAge() {
    const yearAge = promptAge("Сколько Вам лет?");
    return (yearAge === null) ? null : yearAge;
}

// Вычисление возраста пользователя в днях
function calculateDayAge(yearAge) {
    return yearAge * 365;
}

// Вычисление возраста пользователя через 5 лет
function calculateFutureAge(yearAge) {
    return Number(yearAge) + 5;
}

// Определение пола пользователя
function getGender() {
    const isMale = confirm("Ваш пол - мужской?");
    return isMale ? "мужской" : "женский";
}

// Определение статуса пенсионера
function calculatePensioner(gender, yearAge) {
    return (gender === "мужской" && yearAge >= 63) || (gender === "женский" && yearAge >= 58) ? "да" : "нет";
}

// Отображение информации о пользователе
function displayingInfo() {
    const fullName = getFullName();
    const yearAge = getAge();
    
    // Проверка корректности введенных данных и возврат сообщения о некорректности данных или отмене ввода
    if (fullName === null || yearAge === null || !fullName || !yearAge) {
        return "Данные введены некорректно или Вы нажали кнопку \"Отмена\" при вводе данных.";
    }
    
    // Вычисление дополнительных данных
    const dayAge = calculateDayAge(yearAge);
    const futureAge = calculateFutureAge(yearAge);
    const gender = getGender();
    const isPensioner = calculatePensioner(gender, yearAge);
    
    // Формирование и возвращение данных о пользователе
    return `Ваше ФИО: ${fullName}\nВаш возраст в годах: ${yearAge}\nВаш возраст в днях: ${dayAge}\nЧерез 5 лет Вам будет: ${futureAge}\nВаш пол: ${gender}\nВы на пенсии: ${isPensioner}`;
}

// Генерация и отображение профиля пользователя или же сообщения о некорректности данных или отмене ввода данных
const profileResult = displayingInfo();
alert(profileResult);