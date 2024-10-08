
// handles the gameboard content and getting/updating/resetting gameboard values
const gameBoard = (function(){
    let gameBoardArray = ["", "", "", "","","", "", "", ""];
    
    const updateGameBoard = (playerState, index) => {
        const htmlField = document.querySelector(`.game-board button:nth-child(${index + 1})`);
        htmlField.textContent = playerState;
        gameBoardArray[index] = playerState;
    };

    const getBoardValue = (index) => {
        return gameBoardArray[index];
    }

    const getEmptySlots = () => {
        let empty = []
        for(let i = 0; i < gameBoardArray.length; i++){
            if (gameBoardArray[i][j] == ""){
                empty.push(i);
            }
        }
        return empty;
    }

    const resetGameBoard = () => {
        for(let i = 0; i < gameBoardArray.length; i++){
            for(let j = 0; j < gameBoardArray[0].length; j++){
                gameBoardArray[i][j] = "";
            }
        }
    }

    return { updateGameBoard, getEmptySlots, resetGameBoard, getBoardValue };

})();


// handles changing of gamestate - checks, player checks, game functions
const gamestateController = (() => {
    let playerState = "X";
    let aiState = "O";

    const swapState = () => {
        let oldState = playerState;
        playerState = oldState == "X"? "O":"X";
        aiState = oldState;
        const oldStateDoc = document.querySelector(`#${oldState}`);
        const newStateDoc = document.querySelector(`#${playerState}`);
        oldStateDoc.classList = "player-btn";
        newStateDoc.classList = "player-btn selected";
    }

    const checkWinnerRows = (board) => {
        for(let i = 0; i < 3; i++){
            let rows = [];
            for (let j = i*3; j < 3*3+3; j++){
                rows.push(board.getBoardValue(j));
            }
            if (rows.every(val => val == "X") || rows.every(val => val == "O")){
                return true;
            }
        }
        return false;
    }

    const checkWinnerCols = (board) => {
        for(let i = 0; i < 3; i++){
            let cols = [];
            for (let j = 0; j < 3; j++){
                cols.push(board.getBoardValue(i+3*j));
            }
            if (cols.every(val => val == "X") || cols.every(val => val == "O")){
                return true;
            }
        }
        return false;
    }

    const checkWinnerDiags = (board) => {
        diaone = [board.getField(0), board.getField(4), board.getField(8)];
        diagtwo = [board.getField(6), board.getField(4), board.getField(2)];
        if (diaone.every(val => val == 'X') || diaone.every(val => val == 'O')) {
            return true;
        }
        else if (diagonal2.every(field => field == 'X') || diagonal2.every(field => field == 'O')) {
            return true;
        }
        return false;
    }

    const checkPossible = (index) => {
        if(gameBoard.getBoardValue(index)==""){
            return true;
        }
    }

    const tileClick = (index) => {
        if(checkPossible(index)){
            gameBoard.updateGameBoard(playerState, index);
        }
    }
    
    return {tileClick, swapState};
    
})();

// handles button clicking/page interactions
const displayController = (function(){
    const htmlBoard = Array.from(document.querySelectorAll('button.board-btn'));

    const _init = (() => {
        for (let index = 0; index < htmlBoard.length; index++) {
            const element = htmlBoard[index];
            element.addEventListener('click', gamestateController.tileClick.bind(element, index));
        }
    })();

    const _bindPlayerBtn = (() => {
        const xselect = document.querySelector(`#X`);
        xselect.addEventListener('click', gamestateController.swapState.bind(xselect));
        const oselect = document.querySelector(`#O`);
        oselect.addEventListener('click', gamestateController.swapState.bind(oselect));
    })();
    
})();

