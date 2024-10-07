const gameBoard = (function(){
    let gameBoardArray = [["","",""], ["","",""], ["","",""]];
    
    const updateGameBoard = function (playerState, row, col){
        gameBoardArray[row][col] = playerState;
    };



    return { updateGameBoard };

})();

const gamestateController = (() => {
    const test = (index) => {
        console.log(`test ${index}`);
    }
    
    return {test};
    
})();

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
    
})();

