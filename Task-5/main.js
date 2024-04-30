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