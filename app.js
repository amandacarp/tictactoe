let cells = document.querySelectorAll('.row > div');
clickCount = 0

for (let i = 0; i < cells.length; i++){
    cells[i].addEventListener("click", cellClicked);
}

function cellClicked () {
    event.target.textContent = "X"
}

function cellClicked( event ) {
    if( clickCount % 2 === 0 && event.target.textContent !== "O" ) {
         event.target.textContent = "X";
         ++clickCount;
    } else if( clickCount % 2 === 1 && event.target.textContent !== "X" )
    {
         event.target.textContent = "O";
         ++clickCount;
    }};