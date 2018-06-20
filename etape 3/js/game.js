class Game {
    constructor() {
        this.board = new Grid({width: 10, height: 10});
        this.initializeBoard();
        this.attackingCharacter = this.board.robots[0];
        this.defendingCharacter = this.board.robots[1];   
    }
    
    initializeBoard() {
        this.board.createGrid();
        this.board.populateGridWith("wall");
        this.board.populateGridWith("weapon");
        this.board.populateGridWith("robot");
    }
    
    turn() {
        console.log(`${this.attackingCharacter.name} a fini son tour`);
        this.moveTurn();
        this.attackingCharacter.move(this.board);
        this.move();
        this.battleTurn();
    }

    moveTurn() {
        if(this.attackingCharacter == this.board.robots[0]) {
            this.attackingCharacter = this.board.robots[1];
            this.defendingCharacter = this.board.robots[0];
        } else {
            this.attackingCharacter = this.board.robots[0];
            this.defendingCharacter = this.board.robots[1];
        }
    }

    battleTurn() {
        if(this.attackingCharacter.mobility == 0) {
            this.battle();
        }
    }
    
    battle() {
        if(this.attackingCharacter.lifePoints > 0 && this.defendingCharacter.lifePoints > 0) {
            $( () => {
                $("#actionChoice").dialog({
                    buttons: {
                        Attaque: () => {
                            this.attackingCharacter.attack(this.defendingCharacter);
                            // TODO Actualiser les valeurs
                            $("#actionChoice").dialog("close");
                            this.victoryCondition();
                            this.turn();
                        },
                        Défense: () => {
                            this.attackingCharacter.protect();
                            // TODO Actualiser les valeurs
                            $("#actionChoice").dialog("close");
                            this.turn();
                        }
                    }
                });
            });
            console.log(`Action de ${this.attackingCharacter.name}
            Attaquer avec ${this.attackingCharacter.weapon.name} ${this.attackingCharacter.weapon.power} points de dégâts 
            Défendre (Réduit les dégâts de la prochaine attaque de 50%)`);    
        }
    }
    

    victoryCondition() {
        if(this.defendingCharacter.lifePoints <= 0) {
            alert(`${this.attackingCharacter.name} a gagné !`);
            this.newGame();
        }
    }
    
    startGame() {
        this.attackingCharacter.move(this.board);
        this.move();
    }
    
    move() {
        $(".mobility").click((e) => {
            this.attackingCharacter.changePosition(e.currentTarget);
            this.attackingCharacter.checkWeapon(e.currentTarget);
            this.beginBattle();
            $(".mobility").removeClass("mobility").off();

            // J'initialise le variable box
            var box = $('#namePlayer1');

            // Je définis ma requête ajax
            $.ajax({

                // Adresse à laquelle la requête est envoyée
                url: '../php/demo.php',
                
                // Le délai maximun en millisecondes de traitement de la demande
                timeout: 4000,

                // La fonction à apeller si la requête aboutie
                success: function (data) {
                    // Je charge les données dans box
                    box.html(data);
                },

                // La fonction à appeler si la requête n'a pas abouti
                error: function() {
                    // J'affiche un message d'erreur
                    box.html("Désolé, aucun résultat trouvé.");
                }
            });
            
            this.turn();
        });
    }
    
    beginBattle() {
        $.each(Config.robotsElements, (numberObject, objectSkills) => {
            if(
                $("#case-" + (this.attackingCharacter.position.a + 1) + this.attackingCharacter.position.b).hasClass(objectSkills.classCSS) ||
                $("#case-" + (this.attackingCharacter.position.a - 1) + this.attackingCharacter.position.b).hasClass(objectSkills.classCSS) ||
                $("#case-" + this.attackingCharacter.position.a + (this.attackingCharacter.position.b + 1)).hasClass(objectSkills.classCSS) ||
                $("#case-" + this.attackingCharacter.position.a + (this.attackingCharacter.position.b - 1)).hasClass(objectSkills.classCSS)
            ) {
                alert("Début du combat");
                this.attackingCharacter.mobility = 0;
                this.defendingCharacter.mobility = 0;
            }
        });
    }

    newGame() {
        $("#newGame").dialog({
            buttons: {
                Oui: () => {
                    location.reload();
                },
                Non: () => {
                    $("#newGame").dialog("close");
                }
            }
        });
    }
}
