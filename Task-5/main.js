// Опредление класса для хранения данных
class ObjStorageClass{
    constructor() {
        // Создание публичной переменной для хранения данных
        this.data = {};
    }

    // Метод для добавления значения по ключу
    addValue(key, value) {
        this.data[key] = value;
    }

    // Метод для получения значения по ключу
    getValue(key) {
        return this.data[key];
    }

    // Метод для удаления значения по ключу
    deleteValue(key) {
        if (this.data[key]) {
            delete this.data[key];
            return true;
        }
        return false;
    }

    // Метод для получения массива ключей
    getKeys() {
        return Object.keys(this.data);
    }
}

// Создание объекта для хранения информации о напитках
let drinkStorage = new ObjStorageClass();

// Функция для добавления информации о напитке
function addDrink() {
    let name = prompt("Введите название напитка:");
    let alcohol = confirm("Напиток алкогольный?");
    let recipe = prompt("Введите рецепт напитка:");

    // Добавление информации в хранилище
    drinkStorage.addValue(name, {alcohol: alcohol, recipe: recipe});
}

// Функция для получения информации о напитке
function getDrink() {
    let name = prompt("Введите название напитка:");
    let drink = drinkStorage.getValue(name);
    if(drink) {
        let info = `Напиток: ${name}\nАлкогольный: ${drink.alcohol ? "да" : "нет"}\nРецепт приготовления: ${drink.recipe}`;
        alert(info);
    } else {
        alert("Напиток не найден.")
    }
}

// Функция для удаления информации о напитке
function deleteDrink() {
    let name = prompt("Введите название напитка:");
    let deleted = drinkStorage.deleteValue(name);
    if (deleted) {
        alert("Информация о напитке удалена.");
    } else {
        alert("Напиток не найден.");
    }
}

// Функция для вывода списка названий всех сохранённых напитков
function getAllDrinks() {
    let drinks = drinkStorage.getKeys();
    if (drinks.length > 0) {
        alert(`Список напитков: ${drinks.join("\n")}`);
    } else {
        alert("Нет сохранённых напитков.");
    }
}

// Привязка кнопок
const addInfo = document.getElementById('addInfo');
const getInfo = document.getElementById('getInfo');
const deleteInfo = document.getElementById('deleteInfo');
const getAllName = document.getElementById('getAllName');

// Привязка функций к событиям клика по кнопкам
addInfo.addEventListener('click', addDrink);
getInfo.addEventListener('click', getDrink);
deleteInfo.addEventListener('click', deleteDrink);
getAllName.addEventListener('click', getAllDrinks);