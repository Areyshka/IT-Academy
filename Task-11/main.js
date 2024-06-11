document.addEventListener("DOMContentLoaded", function() {
    let cells = document.querySelectorAll(".cell");
    let startAgain = document.getElementById("start");
    let message = document.getElementById("message");
    let player = document.getElementById("player");
    
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
    
    let playingField = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";
    let game = false;
    
    function startGame() {
        game = true;
        cells.forEach(cell => cell.addEventListener("click", () => {
            message.textContent = "";
            let index = parseFloat(cell.getAttribute("index"));
            if(playingField[index] !== "" && game) {
                message.textContent = "This cell is already occupied";
                return;
        }
    
        updateCell(cell, index);
        isWin();
        }));
    
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
    
    function updateCell(cell, index) {
        if (playingField[index] === "" && game) {
            playingField[index] = currentPlayer;
            cell.textContent = currentPlayer;
            cell.classList.add(currentPlayer);
        }
    };
    
    function switchPlayer() {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        player.textContent = currentPlayer;
    };
    
    function isWin() {
        let win = false;
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
    
        if (win) {
            player.textContent = `${currentPlayer}`;
            game = false;
        } else if (!playingField.includes("")) {
            game = false;
        } else {
            switchPlayer()
        }
    };
    
    startGame();
    
    });