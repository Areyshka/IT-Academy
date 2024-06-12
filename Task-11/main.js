// Событие, срабатывающее, когда HTML полностью загружен.
document.addEventListener("DOMContentLoaded", function() {

    // Получение всех необходимых элементов.
    let cells = document.querySelectorAll(".cell");
    let startAgain = document.getElementById("start");
    let message = document.getElementById("message");
    let player = document.getElementById("player");
    
    // Массив выигрышных комбинаций.
    const winCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    // Изначально пустое игровое поле.
    let playingField = ["", "", "", "", "", "", "", "", ""];

    // Текущий игрок.
    let currentPlayer = "X";

    // Состояние игры.
    let game = false;
    
    // Функция начала игры.
    function startGame() {
        game = true;

        // Обработчик события по клику для каждой ячейки.
        cells.forEach(cell => cell.addEventListener("click", () => {
            message.textContent = "";

            // Получение индекса ячейки.
            let index = parseFloat(cell.getAttribute("index"));

            // Проверка на заполненность ячейки.
            if(playingField[index] !== "" && game) {
                message.textContent = "This cell is already occupied";
                return;
        }
        
        // Вызов функции обновления ячейки.
        updateCell(cell, index);

        // Вызов функции проверки победы.
        isWin();
        }));
    
        // Добавление обработчика событий для начала игры заново, приведение всех позиций в начальное состояние.
        startAgain.addEventListener("click", () => {
            playingField = ["", "", "", "", "", "", "", "", ""];
            currentPlayer = "X";
            cells.forEach(cell => {
                cell.textContent = "";
                cell.classList.remove("X", "O")
            });
            game = true;
            message.textContent = "";
            player.textContent = currentPlayer;  
        });  
    };
    
    // Функция обновления ячейки.
    function updateCell(cell, index) {
        if (playingField[index] === "" && game) {
            playingField[index] = currentPlayer;
            cell.textContent = currentPlayer;
            cell.classList.add(currentPlayer);
        }
    };
    
    // Функция для смены игрока.
    function switchPlayer() {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        player.textContent = currentPlayer;
    };
    

    // Функция проверки победы.
    function isWin() {
        let win = false;

        // Проверка выигрышных комбинаций.
        for (let i = 0; i < winCombinations.length; i++) {
            let comb = winCombinations[i];
            let one = playingField[comb[0]];
            let two = playingField[comb[1]];
            let three = playingField[comb[2]];
    
            if (one === "" || two === "" || three === "") {
                continue;
            }
    
            if (one === two && two === three) {
                message.textContent = `${currentPlayer} wins!`
                win = true;
                break;
            }
        }
        
        // Проверка, есть ли победитель или ничья.
        if (win) {
            player.textContent = `${currentPlayer}`;
            game = false;
        } else if (!playingField.includes("")) {
            game = false;
            message.textContent = "Game draw!";
        } else {
            switchPlayer()
        }
    };
    
    // Вызов функции начала игры.
    startGame();
    
    });