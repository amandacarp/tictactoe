let cells = document.querySelectorAll('.row > div');
let clickCount = 0
let gameOver = false;
let currentPlayer = "X"

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked);
}

function cellClicked(event) {

    if (gameOver) {
        alert("GAME OVER!")
        location.reload()
        return;
    }
    //anti cheat 
    if (event.target.textContent !== "") {
        return;
    }

    event.target.textContent = currentPlayer;


    // increments for next click 
    ++clickCount


checkWin();

togglePlayer();
}

//checking gameboard 
function checkCombo(a, b, c){
    if (cells[a].textContent === currentPlayer &&
        cells[b].textContent === currentPlayer &&
        cells[c].textContent === currentPlayer){
            return true;
    } else {
        return false;
    }
}


    // toggle between "X" and "O"
function togglePlayer(){
    if (currentPlayer === 'X') {
        currentPlayer = 'O'
    } else {
        currentPlayer = 'X'
    }
}


    //checking all possible winning scenarios 
function checkWin(){
    if (checkCombo(0, 1, 2)) {
        alert(currentPlayer + ' has WON!')
         gameOver = true
    } else if (checkCombo(3, 4, 5)) {
        alert(currentPlayer + ' has WON!')
         gameOver = true
    } else if (checkCombo(6, 7, 8)) {
        alert(currentPlayer + ' has WON!')
         gameOver = true
    } else if (checkCombo(0, 3, 6)) {
        alert(currentPlayer + ' has WON!')
         gameOver = true
    } else if (checkCombo(1, 2, 3)) {
        alert(currentPlayer + ' has WON!')
         gameOver = true
    } else if (checkCombo(1, 4, 7)) {
        alert(currentPlayer + ' has WON!')
         gameOver = true
    } else if (checkCombo(2, 5, 8)) {
        alert(currentPlayer + ' has WON!')
         gameOver = true
    } else if (checkCombo(0, 4, 8)) {
        alert(currentPlayer + ' has WON!')
         gameOver = true
    } else if (checkCombo(2, 4, 6)) {
        alert(currentPlayer + ' has WON!')
         gameOver = true
    } else if (clickCount === 9) {
        alert("DRAW!"), gameOver = true
    }
}