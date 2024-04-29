function treeSum(arr) {
    let sum = 0; // Создание переменной для хранения результата (сумма)
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") { // Проверка типа элемента массива, если тип элемента - число, прибавляем его к сумме
            sum += arr[i];
        } else if (Array.isArray(arr[i])) { // Ели элемент является массивом, происходит рекурсивный вызов функции treeSum, результат добавляется к сумме
            sum += treeSum(arr[i]);
        }
    }
    return sum;
}

console.log(treeSum([ 5, 7,
    [ 4, [2], 8, [1, 3], 2 ],
    [ 9, [] ],
    1, 8 ]));