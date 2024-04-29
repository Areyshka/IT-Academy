// Запрос необходимой информации у пользователя
const firstName = prompt("Как Вас зовут? (Имя)");
const middleName = prompt("Какое у Вас отчество?");
const lastName = prompt("Какая у Вас фамилия?"); 
const yearAge = prompt("Сколько Вам лет?");

let result; //Объявление переменной для хранения результата

// Проверка корректности введенных данных
if(firstName === "" || firstName === null || middleName === "" || middleName === null || lastName === "" || lastName === null || yearAge === "" || yearAge === null || isNaN(yearAge)) {
    result = "Данные введены некорректно или Вы нажали кнопку \"Отмена\" при вводе данных." // Формирование сообщения об ошибке
} else {
    // Вычисление возраста пользователя в днях и возраст пользователя через 5 лет
    const dayAge = yearAge * 365;
    const futureAge = Number(yearAge) + 5;

    // Запрос пола пользователя
    const isMale = confirm("Ваш пол - мужской?");

    // Объявление переменной для хранения пола пользователя и определение пола пользователя
    let gender;
    if (isMale) {
        gender = "мужской";
    } else {
        gender = "женский";
    }
    
    // Объявление переменной для хранения статуса пенсионера и определение его
    let isPensioner;
    if ((gender === "мужской" && yearAge >= 63) || (gender === "женский" && yearAge >= 58)) {
        isPensioner = "да";
    } else {
        isPensioner = "нет";
    }
    
    // Формирование данных о пользователе
    result = `Ваше ФИО: ${lastName} ${firstName} ${middleName}\nВаш возраст в годах: ${yearAge}\nВаш возраст в днях: ${dayAge}\nЧерез 5 лет Вам будет: ${futureAge}\nВаш пол: ${gender}\nВы на пенсии: ${isPensioner}`;
}

// Вывод результата
alert(result);