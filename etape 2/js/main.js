var board = new Grid({width: 10, height: 10});
board.createGrid();
board.populateGridWith("wall");
board.populateGridWith("weapon");
board.populateGridWith("robot");

var joueur1 = board.robots[0];
var joueur2 = board.robots[1];
//turn est = à true pour le joueur1 et à false pour le joueur2
var turn = true;
var victoryCondition = false;

//Tours de jeu
//while(turn) {
    $(document).ready(function(){
        console.log("Tour du Joueur 1");
        $("#case-" + joueur1.position.a + joueur1.position.b).click(function(){
            //Quand on clique, les cases accessibles sont en couleur
            /*$("#case-" + joueur1.position.a + joueur1.position.b).hover(function(){
                $("#case-" + (joueur1.position.a + 1) + (joueur1.position.b)).addClass('mobility');
            });*/
            $("#case-" + joueur1.position.a + joueur1.position.b).removeClass('robot0');
            joueur1.move();
            $("#case-" + joueur1.position.a + joueur1.position.b).addClass('robot0');
            //Si le personnage arrive sur une case avec une arme, il prend l'arme et laisse la sienne sur place
            //Si le personnage veut se déplacer à travers un mur ou un autre personnage, il s'arrête devant
            //Si le personnage arrive à côté de l'autre personnage le combat commence
        });
    });
    //Fin du tour du joueur1
    //turn = false;
//}

//while(turn == false) {  
    $(document).ready(function(){
        console.log("Tour du Joueur 2");
        $("#case-" + joueur2.position.a + joueur2.position.b).click(function(){
            $("#case-" + joueur2.position.a + joueur2.position.b).removeClass('robot1');
            joueur2.move();
            $("#case-" + joueur2.position.a + joueur2.position.b).addClass('robot1');
        });
    });
    //turn = true;
//}

// Conditions de victoire = lifePoints à 0
if((joueur1.lifePoints == 0) || (joueur2.lifePoints == 0)) {
    victoryCondition = true;
    if(victoryCondition == true) {
        if(joueur1.lifePoints == 0) {
            alert("Le " + joueur2.name + " a gagné !");
        } else {
            alert("Le " + joueur1.name + " a gagné !");
        }
    }
}



    

