
// handles the gameboard content and getting/updating/resetting gameboard values
const gameBoard = (function(){
    let gameBoardArray = [["","",""], ["","",""], ["","",""]];
    
    const updateGameBoard = function (playerState, row, col){
        gameBoardArray[row][col] = playerState;
    };

    // todo:
    // 

    return { updateGameBoard };

})();


// handles changing of gamestate - checks, player checks, game functions
const gamestateController = (() => {
    let playerState = "X";

    const swapState = () => {
        let oldState = playerState;
        playerState = oldState == "X"? "O":"X";
        const oldStateDoc = document.querySelector(`#${oldState}`);
        const newStateDoc = document.querySelector(`#${playerState}`);
        oldStateDoc.classList = "player-btn";
        newStateDoc.classList = "player-btn selected";
    }

    const test = (index) => {
        console.log(`test ${index}`);
    }
    
    return {test, swapState};
    
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
            element.addEventListener('click', gamestateController.test.bind(element, index));
        }
    })();

    const _bindPlayerBtn = (() => {
        const xselect = document.querySelector(`#X`);
        xselect.addEventListener('click', gamestateController.swapState.bind(xselect));
        const oselect = document.querySelector(`#O`);
        oselect.addEventListener('click', gamestateController.swapState.bind(oselect));
    })();
    
})();

