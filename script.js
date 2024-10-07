
// handles the gameboard content and getting/updating/resetting gameboard values
const gameBoard = (function(){
    let gameBoardArray = ["", "", "", "","","", "", "", ""];
    
    const updateGameBoard = (playerState, index) => {
        const htmlField = document.querySelector(`.game-board button:nth-child(${index + 1})`);
        htmlField.textContent = playerState;
        gameBoardArray[index] = playerState;
        console.log(gameBoardArray);
    };

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

    return { updateGameBoard, getEmptySlots, resetGameBoard };

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

    // clicked tile -> check for update and for possibility

    const tileClick = (index) => {
        gameBoard.updateGameBoard(playerState, index);
    }
    
    return {tileClick, swapState};
    
})();

// handles button clicking/page interactions
const displayController = (function(){
    const htmlBoard = Array.from(document.querySelectorAll('button.board-btn'));

    const test = (index) => {
        console.log(index);
    }
    
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

