var board = new Grid({width: 10, height: 10});
board.createGrid();
board.populateGridWith("wall");
board.populateGridWith("weapon");
board.populateGridWith("robot");

var player1 = board.robots[0];
var player2 = board.robots[1];
var wallsPosition = board.walls;
var weaponsPosition = board.weapons;
//turn est = à true pour le player1 et à false pour le player2
var turn = false;
var victoryCondition = false;

//Fin du tour du joueur en cours
$("#endTurn").click(function(){
    if(turn == true) {
        turn = false;
    } else {
        turn = true;
    }

    //Tours de jeu
    if(turn == true) { 
        console.log("J1");
        //effacer les couleurs de j2
        /*for(var x = 0; x < 4; x++) {
            $("#case-" + (player1.position.a + x) + player1.position.b).addClass("mobility");
            $("#case-" + (player1.position.a - x) + player1.position.b).addClass("mobility");
            $("#case-" + player1.position.a + (player1.position.b + x)).addClass("mobility");
            $("#case-" + player1.position.a + (player1.position.b - x)).addClass("mobility");
            //Mettre des animations entrée / sortie
        }*/
        player1.move(board);
    }

    
    
    if(turn == false) {  
        console.log("J2");
        //effacer les couleurs de j1
        
        /*for(var x = 0; x < 4; x++) {
            $("#case-" + (player2.position.a + x) + player2.position.b).addClass("mobility");
            $("#case-" + (player2.position.a - x) + player2.position.b).addClass("mobility");
            $("#case-" + player2.position.a + (player2.position.b + x)).addClass("mobility");
            $("#case-" + player2.position.a + (player2.position.b - x)).addClass("mobility");
            //Mettre des animations entrée / sortie
        }*/
        player2.move(board);
    }
    
    $("#case-" + player1.position.a + player1.position.b).removeClass('mobility');
});

// Conditions de victoire = lifePoints à 0
if((player1.lifePoints == 0) || (player2.lifePoints == 0)) {
    victoryCondition = true;
    if(victoryCondition == true) {
        if(player1.lifePoints == 0) {
            alert("Le " + player2.name + " a gagné !");
        } else {
            alert("Le " + player1.name + " a gagné !");
        }
    }
}



    

