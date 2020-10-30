let cells = document.querySelectorAll('.row > div');
clickCount = 0

for (let i = 0; i < cells.length; i++){
    cells[i].addEventListener("click", cellClicked);
}

// toggle between "X" and "O"
    function cellClicked () {
        if (clickCount % 2 === 0){
            event.target.textContent = "X";
            ++clickCount
    } else if (clickCount % 2 === 1){
        event.target.textContent = "O";
        ++clickCount
    }}
    