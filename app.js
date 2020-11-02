let cells = document.querySelectorAll('.row > div');
let clickCount = 0
let gameOver = false;
console.log(cells)

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked);
}

// toggle between "X" and "O"
function cellClicked(event) {
    //anti cheat 
    if (event.target.textContent === "X" || event.target.textContent === "O") {
        return
    }

    if (clickCount % 2 === 0) {
        event.target.textContent = "X";
    } else {
        event.target.textContent = "O";
    }

    // increments for next click 
    ++clickCount

    //checking all possible winning scenarios 
    if (cells[0].textContent === "X" && cells[1].textContent === "X" && cells[2].textContent === "X") {
        alert("X HAS WON!"), gameOver = true
    } else if (cells[3].textContent === "X" && cells[4].textContent === "X" && cells[5].textContent === "X") {
        alert("X HAS WON!"), gameOver = true
    } else if (cells[6].textContent === "X" && cells[7].textContent === "X" && cells[8].textContent === "X") {
        alert("X HAS WON!"), gameOver = true
    } else if (cells[0].textContent === "X" && cells[3].textContent === "X" && cells[6].textContent === "X") {
        alert("X HAS WON!"), gameOver = true
    } else if (cells[1].textContent === "X" && cells[2].textContent === "X" && cells[3].textContent === "X") {
        alert("X HAS WON!"), gameOver = true
    } else if (cells[1].textContent === "X" && cells[4].textContent === "X" && cells[7].textContent === "X") {
        alert("X HAS WON!"), gameOver = true
    } else if (cells[2].textContent === "X" && cells[5].textContent === "X" && cells[8].textContent === "X") {
        alert("X HAS WON!"), gameOver = true
    } else if (cells[0].textContent === "X" && cells[4].textContent === "X" && cells[8].textContent === "X") {
        alert("X HAS WON!"), gameOver = true
    } else if (cells[2].textContent === "X" && cells[4].textContent === "X" && cells[6].textContent === "X") {
        alert("X HAS WON!"), gameOver = true
    } else if (cells[0].textContent === "O" && cells[1].textContent === "O" && cells[2].textContent === "O") {
        alert("O HAS WON!"), gameOver = true
    } else if (cells[3].textContent === "O" && cells[4].textContent === "O" && cells[5].textContent === "O") {
        alert("O HAS WON!"), gameOver = true
    } else if (cells[6].textContent === "O" && cells[7].textContent === "O" && cells[8].textContent === "O") {
        alert("O HAS WON!"), gameOver = true
    } else if (cells[0].textContent === "O" && cells[3].textContent === "O" && cells[6].textContent === "O") {
        alert("O HAS WON!"), gameOver = true
    } else if (cells[1].textContent === "O" && cells[2].textContent === "O" && cells[3].textContent === "O") {
        alert("O HAS WON!"), gameOver = true
    } else if (cells[1].textContent === "O" && cells[4].textContent === "O" && cells[7].textContent === "O") {
        alert("O HAS WON!"), gameOver = true
    } else if (cells[2].textContent === "O" && cells[5].textContent === "O" && cells[8].textContent === "O") {
        alert("O HAS WON!"), gameOver = true
    } else if (cells[0].textContent === "O" && cells[4].textContent === "O" && cells[8].textContent === "O") {
        alert("O HAS WON!"), gameOver = true
    } else if (cells[2].textContent === "O" && cells[4].textContent === "O" && cells[6].textContent === "O") {
        alert("O HAS WON!"), gameOver = true
    } else if (clickCount === 9) {
        alert("DRAW!"), gameOver = true
    }

    //alert game over
    if (gameOver === true) {
        alert("GAME OVER!")
    }

}



