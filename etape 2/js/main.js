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

// Conditions de victoire = lifePoints à 0
/*if((player1.lifePoints == 0) || (player2.lifePoints == 0)) {
    victoryCondition = true;
    if(victoryCondition == true) {
        if(player1.lifePoints == 0) {
            alert("Le " + player2.name + " a gagné !");
        } else {
            alert("Le " + player1.name + " a gagné !");
        }
    }
}*/