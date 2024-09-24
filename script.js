// 9 spots, 2 players, board with spot and either blank or not blank
// 3 ways across to win, 3 ways down to win, 2 diagonals to win

const board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
console.table(board);
// function displayGame (index){

// }

const curplayer = document.querySelector('#gamestate');
const boardDisplay = document.querySelector('.gameBoard');

const boardButton = document.createElement('button');
boardButton.classList = "gamebutton";
boardDisplay.appendChild(boardButton);