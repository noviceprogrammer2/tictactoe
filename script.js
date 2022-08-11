// game logic

// game board 
const gameBoard = (() => {
    boardArray = ['', '', '', '', '', '', '', '', '']
    return { boardArray }

})()

// builds players with a name and a marker 
const player = (name, marker) => {
    board = []
    return { name, marker, board }
}



// generates display of board array and adds event listeners 
const displayController = (() => {

    const tiles = document.querySelector('.game-container').children
    for (let i = 0; i < tiles.length; i++) {
        // add data to divs to link with array indexes
        tiles[i].dataset.index = i
        tiles[i].textContent = boardArray[i]
    }
})()

const winConditions = () => {
    winning = [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
    [0, 3, 6]
    [1, 4, 7]
    [2, 5, 8]
    [0, 4, 8]
    [2, 4, 6]]

}

const game = (() => {
    // initialize players
    const player1 = player('one', 'X')
    const player2 = player('two', 'O')
    const playerTurn = (element) => {
        console.log(element.dataset.index)
        if (boardArray[element.target.dataset.index] == 'X' || 'O') {
            return
        }
        else {
            boardArray[[element.target.dataset.index]] == "X"
            displayController()
        }
    }
    gameSquares = document.querySelectorAll('.square')
    for(let i = 0; i <gameSquares.length; i++){
        gameSquares[i].addEventListener("click", playerTurn)
        console.log('event added')
    }
        


   
    for(i = 0; i<9; i++){

    }
})()





