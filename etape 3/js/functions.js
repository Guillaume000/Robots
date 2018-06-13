function turn() {
    console.log(`${actualPlayer.name} a fini son tour`);
    moveTurn();
    actualPlayer.move(board);
    battleTurn();
}

function moveTurn() {
    if(actualPlayer == board.robots[0]) {
        actualPlayer = board.robots[1];
        nextPlayer = board.robots[0];
    } else {
        actualPlayer = board.robots[0];
        nextPlayer = board.robots[1];
    }
}

function battleTurn() {
    if(actualPlayer.mobility == 0) {
        actualPlayer.battle();
    }
}

function victoryCondition() {
    if(nextPlayer.lifePoints <= 0) {
        alert(`${actualPlayer.name} a gagné !`);
        return false;
    }
}