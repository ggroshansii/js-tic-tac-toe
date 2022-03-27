

const TICTACTOE = (function() {
    return {
        board : [null, null, null, null, null, null, null, null, null],
    }
})();

function game() {

    var myModal = new bootstrap.Modal(document.getElementById('onLoadModal'), {
        keyboard: false
      })
      myModal.show()


    let board = TICTACTOE.board;
    let isPlayer1Turn = true;
    console.log('fired')

    function interactiveBoard() {
        let cells = document.querySelectorAll(".cell");
        console.log('cells', cells)
        for (let i=0; i<cells.length; i++) {
            cells[i].addEventListener('click', ()=> {
                if (this.isPlayer1Turn) {
                    board[i] = "x";
                    this.isPlayer1Turn = !this.isPlayer1Turn;

                } else {
                    board[i] = "o";
                    this.isPlayer1Turn = !this.isPlayer1Turn; 
                }
                displayBoard()
            })
        }
    }

    function displayBoard() {
        let cells = document.querySelectorAll(".cell");
        for (let i=0; i<cells.length; i++) {
            cells[i].textContent = board[i]
        }
    }

    return {interactiveBoard}
}

let newGame = game();
console.log(newGame)
newGame.interactiveBoard()