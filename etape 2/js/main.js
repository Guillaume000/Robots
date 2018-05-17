var board = new Grid({width: 10, height: 10});
board.createGrid();
board.populateGridWith("wall");
board.populateGridWith("weapon");
board.populateGridWith("robot");

var player1 = board.robots[0];
var player2 = board.robots[1];
var wallsPosition = board.walls;
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
        $(document).ready(function(){
            console.log("Tour du Joueur 1");
            $("#case-" + player1.position.a + player1.position.b).hover(function() {
                for(var x = 0; x < player1.mobility + 1; x++) {
                    $("#case-" + (player1.position.a + x) + player1.position.b).toggleClass("mobility");
                    $("#case-" + (player1.position.a - x) + player1.position.b).toggleClass("mobility");
                    $("#case-" + player1.position.a + (player1.position.b + x)).toggleClass("mobility");
                    $("#case-" + player1.position.a + (player1.position.b - x)).toggleClass("mobility");
                    //Mettre des animations entrée / sortie
                }
            });
            $("#case-" + player1.position.a + player1.position.b).click(function(){
                $("#case-" + player1.position.a + player1.position.b).off();
                for(var x = 0; x < player1.mobility + 1; x++) {
                    $("#case-" + (player1.position.a + x) + player1.position.b).toggleClass("mobility");
                    $("#case-" + (player1.position.a - x) + player1.position.b).toggleClass("mobility");
                    $("#case-" + player1.position.a + (player1.position.b + x)).toggleClass("mobility");
                    $("#case-" + player1.position.a + (player1.position.b - x)).toggleClass("mobility");
                    //Mettre des animations entrée / sortie
                }
                $("#case-" + player1.position.a + player1.position.b).removeClass('robot0');
                player1.move();
                    for(var i = 0; i < board.walls.length; i++) {
                        if((player1.position.a == wallsPosition[i].position.a) && (player1.position.b == wallsPosition[i].position.b)) {
                            //$("#case-" + player1.position.a + player1.position.b).off();
                            console.log("ne doit pas passer");
                        }
                    }
                $("#case-" + player1.position.a + player1.position.b).addClass('robot0');
                //Si le personnage arrive sur une case avec une arme, il prend l'arme et laisse la sienne sur place
                //Si le personnage veut se déplacer à travers un mur ou un autre personnage, il s'arrête devant
                //Si le personnage arrive à côté de l'autre personnage le combat commence
            });
        });
    }

    if(turn == false) {  
        $(document).ready(function(){
            console.log("Tour du Joueur 2");
            $("#case-" + player2.position.a + player2.position.b).click(function(){
                $("#case-" + player2.position.a + player2.position.b).removeClass('robot1');
                player2.move();
                $("#case-" + player2.position.a + player2.position.b).addClass('robot1');
            });
        });
    }
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



    

