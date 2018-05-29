// Game.init
var board = new Grid({width: 10, height: 10});
board.createGrid();
board.populateGridWith("wall");
board.populateGridWith("weapon");
board.populateGridWith("robot");

// Game.launch
var wallsPosition = board.walls;
var weaponsPosition = board.weapons;
//turn est = à true pour le player1 et à false pour le player2
var turn = true;
var victoryCondition = false;
var actualPlayer = board.robots[0];
    
if(board.robots.length > 1){
    if(turn) {
        actualPlayer = board.robots[0];
    } else {
        actualPlayer = board.robots[1];
    }
}

    if(turn) {
        console.log(actualPlayer.name);
        actualPlayer.move(board);
        turn == false;
    }
    if(turn == false) {
        console.log(actualPlayer.name);
        actualPlayer.move(board);
        turn == true;    
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



    

