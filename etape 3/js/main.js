var board = new Grid({width: 10, height: 10});
board.createGrid();
board.populateGridWith("wall");
board.populateGridWith("weapon");
board.populateGridWith("robot");

var actualPlayer = board.robots[0];
var nextPlayer = board.robots[1];

actualPlayer.move(board);