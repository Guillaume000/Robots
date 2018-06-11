var board = new Grid({width: 10, height: 10});
board.createGrid();
board.populateGridWith("wall");
board.populateGridWith("weapon");
board.populateGridWith("robot");

var victoryCondition = false;
var actualPlayer = board.robots[0];

actualPlayer.move(board);

function turn() {
    console.log(actualPlayer.name + " a fini son tour");
    if(actualPlayer == board.robots[0]) {
        actualPlayer = board.robots[1];
    } else {
        actualPlayer = board.robots[0];
    }
        actualPlayer.move(board);
}
