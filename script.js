const gameBoard = (function(){
    let gameBoardArray = [["","",""], ["","",""], ["","",""]];
    
    const updateGameBoard = function (playerState, row, col){
        gameBoardArray[row][col] = playerState;
    };

    

    return { updateGameBoard };

})();