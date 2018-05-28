class Robot {
    constructor(name, lifePoints, mobility, weapon, power, position) {
        this.name = name;
        this.lifePoints = lifePoints;
        this.mobility = mobility;
        this.weapon = weapon;
        this.power = power;
        this.position = position;
        this.availableMoves = {top : true , left : true, right: true, bottom: true };

    }

    introduce() {
        console.log("Bonjour, je m'appelle " + this.name + ". J'ai " + this.lifePoints + " points de vie et je me déplace à " + this.mobility + " cases par seconde. " + "Je suis à la case de coordonnées (" + this.position.a + "," + this.position.b + "), j'ai une arme qui s'appelle " + this.weapon.weaponName);
    }

    move(board) {
        // Affiche les cases disponibles
        /*for(var x = 1; x < this.mobility + 1; x++) {
            $("#case-" + (this.position.a + x) + this.position.b).toggleClass("mobility");
            $("#case-" + (this.position.a - x) + this.position.b).toggleClass("mobility");
            $("#case-" + this.position.a + (this.position.b + x)).toggleClass("mobility");
            $("#case-" + this.position.a + (this.position.b - x)).toggleClass("mobility");
            //Mettre des animations entrée / sortie
        }
        
        // Récupère les positions
        for(var x = 1; x < this.mobility + 1; x++) {
            this.checkAvailableMove({x: (this.position.a + x), y: this.position.b}, "bottom");
            this.checkAvailableMove({x: (this.position.a - x), y: this.position.b}, "top");
            this.checkAvailableMove({x: (this.position.a), y: this.position.b + x}, "right");
            this.checkAvailableMove({x: (this.position.a), y: this.position.b - x}, "left");
        }
        // Déplacement par .click
        var positionA = this.position.a;
        var positionB = this.position.b;
        
        // Déplaçement vers le bas
        $("#case-" + (positionA + 1) + positionB).click(function() {
            $("#case-" + (positionA + 1) + positionB).off();
            for(var p = 0; p < 4; p++) {
                $("#case-" + (positionA + p) + positionB).removeClass("mobility");
                $("#case-" + (positionA - p) + positionB).removeClass("mobility");
                $("#case-" + positionA + (positionB + p)).removeClass("mobility");
                $("#case-" + positionA + (positionB - p)).removeClass("mobility");
                //Mettre des animations entrée / sortie
            }
            if(turn == true) {
                $("#case-" + positionA + positionB).removeClass("robot0");
                $("#case-" + (positionA + 1) + positionB).addClass("robot0").removeClass('mobility');
                player1.position.a = positionA + 1;
            } else {
                $("#case-" + positionA + positionB).removeClass("robot1");
                $("#case-" + (positionA + 1) + positionB).addClass("robot1").removeClass('mobility');
                player2.position.a = positionA + 1;
            }
        });
        
        // Déplaçement vers le haut
        $("#case-" + (positionA - 1) + positionB).click(function() {
            $("#case-" + (positionA - 1) + positionB).off();
            for(var p = 0; p < 4; p++) {
                $("#case-" + (positionA + p) + positionB).removeClass("mobility");
                $("#case-" + (positionA - p) + positionB).removeClass("mobility");
                $("#case-" + positionA + (positionB + p)).removeClass("mobility");
                $("#case-" + positionA + (positionB - p)).removeClass("mobility");
                //Mettre des animations entrée / sortie
            }
            if(turn == true) {
                $("#case-" + positionA + positionB).removeClass("robot0");
                $("#case-" + (positionA - 1) + positionB).addClass("robot0").removeClass('mobility');
                player1.position.a = positionA - 1;
            } else {
                $("#case-" + positionA + positionB).removeClass("robot1");
                $("#case-" + (positionA - 1) + positionB).addClass("robot1").removeClass('mobility');
                player2.position.a = positionA - 1;
            }
        });
        
        // Déplaçement vers la droite
        $("#case-" + positionA + (positionB + 1)).click(function() {
            $("#case-" + positionA + (positionB + 1)).off();
            for(var p = 0; p < 4; p++) {
                $("#case-" + (positionA + p) + positionB).removeClass("mobility");
                $("#case-" + (positionA - p) + positionB).removeClass("mobility");
                $("#case-" + positionA + (positionB + p)).removeClass("mobility");
                $("#case-" + positionA + (positionB - p)).removeClass("mobility");
                //Mettre des animations entrée / sortie
            }
            if(turn == true) {
                $("#case-" + positionA + positionB).removeClass("robot0");
                $("#case-" + positionA + (positionB + 1)).addClass("robot0").removeClass('mobility');
                player1.position.b = positionB + 1;
            } else {
                $("#case-" + positionA + positionB).removeClass("robot1");
                $("#case-" + positionA + (positionB + 1)).addClass("robot1").removeClass('mobility');
                player2.position.b = positionB + 1;
            }
        });
        
        // Déplaçement vers la gauche
        $("#case-" + positionA + (positionB - 1)).click(function() {
            $("#case-" + positionA + (positionB - 1)).off();
            for(var p = 0; p < 4; p++) {
                $("#case-" + (positionA + p) + positionB).removeClass("mobility");
                $("#case-" + (positionA - p) + positionB).removeClass("mobility");
                $("#case-" + positionA + (positionB + p)).removeClass("mobility");
                $("#case-" + positionA + (positionB - p)).removeClass("mobility");
                //Mettre des animations entrée / sortie
            }
            if(turn == true) {
                $("#case-" + positionA + positionB).removeClass("robot0");
                $("#case-" + positionA + (positionB - 1)).addClass("robot0").removeClass('mobility');
                player1.position.b = positionB - 1;
            } else {
                $("#case-" + positionA + positionB).removeClass("robot1");
                $("#case-" + positionA + (positionB - 1)).addClass("robot1").removeClass('mobility');
                player2.position.b = positionB - 1;
            }
        });*/
    }
    
    /*checkAvailableMove(position, direction){
        var self = this;
        var elem = $("#case-" + position.x + position.y);
        var classes = elem.attr("class");
        if(classes === undefined) {
            classes = classes ? classes.split(' ').slice(-1)[0] : '';
        }
        var classes_arr = classes.split(" ");
        
        classes_arr.forEach(function(classe){

            switch (direction){

                case "right":
                    if (self.availableMoves.right){
                        if (classe == "wall" || classe == "robot0" || classe == "robot1"){
                            self.availableMoves.right = false;
                            for(var i = 0; i < 3; i++) {
                                $("#case-" + position.x + (position.y + i)).removeClass('mobility');
                            }
                        } 
                    }
                    break;

                case "bottom":
                    if (self.availableMoves.bottom){
                        if (classe == "wall" || classe == "robot0" || classe == "robot1"){
                            self.availableMoves.bottom = false;
                            for(var i = 0; i < 3; i++) {
                                $("#case-" + (position.x + i) + position.y).removeClass('mobility');
                            }
                        }
                    }
                    break;

                case "left":
                    if (self.availableMoves.left){
                        if (classe == "wall" || classe == "robot0" || classe == "robot1"){
                            self.availableMoves.left = false;
                            for(var i = 0; i < 3; i++) {
                                $("#case-" + position.x + (position.y - i)).removeClass('mobility');
                            }
                        }
                    }
                    break;

                case "top":
                    if (self.availableMoves.top){
                        if (classe == "wall" || classe == "robot0" || classe == "robot1"){
                            self.availableMoves.top = false;
                            for(var i = 0; i < 3; i++) {
                                $("#case-" + (position.x - i) + position.y).removeClass('mobility');
                            }
                        } 
                    }
                    break;
            }
        });
    }*/
}



