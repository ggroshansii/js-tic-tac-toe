const TICTACTOE = (function() {
    return {
        board : [null, null, null, null, null, null, null, null, null],
        displayBoard(currentBoard) {
            let cells = document.querySelectorAll(".cell");
            console.log('cells', cells)
            for (let i=0; i<cells.length; i++) {
                cells[i].addEventListener('click', ()=> {
                    cells[i].textContent = "X";
                })
            }
        }
    }
})();

// function createPlayers(numOfPlayers) {
//     let playersObj = {}
//     for (let i=0; i<numOfPlayers; i++) {
//         let input = "What is Player"
//     }
//     return playersObj;

// }


function game() {
    let currentBoard = TICTACTOE.board2;

    TICTACTOE.displayBoard(currentBoard)


    console.log('fired')
    
}

game()