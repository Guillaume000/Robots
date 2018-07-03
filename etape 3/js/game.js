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
        this.attackingCharacter.choosePlayer().append(`<p class="archivedMessage">${this.attackingCharacter.name} a terminé son tour</p>`);
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
            $("#actionChoice").dialog({
                text: 
                    $("#actionChoice").html(`<p>Action de ${this.attackingCharacter.name} :</p>
                    <p>- Attaquer avec ${this.attackingCharacter.weapon.name} ${this.attackingCharacter.weapon.power} points de dégâts</p> 
                    <p>- Défendre (Réduit les dégâts de la prochaine attaque de 50%)</p>`),
                buttons: {
                    Attaque: () => {
                        this.attackingCharacter.attack(this.defendingCharacter);
                        this.board.updateStatistics(this.defendingCharacter);
                        $("#actionChoice").dialog("close");
                        this.victoryCondition();
                        this.turn();
                    },
                    Défense: () => {
                        this.attackingCharacter.protect();
                        this.board.updateStatistics(this.attackingCharacter);
                        $("#actionChoice").dialog("close");
                        this.turn();
                    }
                },
                classes: {
                    "ui-dialog": "attackAction"
                }
            });
        }
    }
    

    victoryCondition() {
        if(this.defendingCharacter.lifePoints <= 0) {
            this.defendingCharacter.lifePoints = 0;
            $("#informationMessage").dialog({
                text: $("#informationMessage").html(`<p>${this.attackingCharacter.name} a gagné !</p>`),
                classes: {
                    "ui-dialog": "positionMessage"
                }
            });
            setTimeout(this.hideDialog, 3000);
            this.newGame();
        }
    }
    
    startGame() {
        this.board.updateStatistics(this.attackingCharacter);
        this.board.updateStatistics(this.defendingCharacter);
        this.attackingCharacter.move(this.board);
        this.move();
    }
    
    move() {
        $(".mobility").click((e) => {
            this.attackingCharacter.changePosition(e.currentTarget);
            this.attackingCharacter.checkWeapon(e.currentTarget); 
            this.beginBattle();
            $(".mobility").removeClass("mobility").off();
            this.board.updateStatistics(this.attackingCharacter);
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
                $("#informationMessage").dialog({
                    text: $("#informationMessage").html(`<p>Début du combat !</p>`),
                    classes: {
                        "ui-dialog": "positionMessage"
                    }
                });
                setTimeout(this.hideDialog, 2000);
                this.attackingCharacter.mobility = 0;
                this.defendingCharacter.mobility = 0;
            }
        });
    }
    
    hideDialog() {
        $("#informationMessage").dialog("close");
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
            },
            classes: {
                "ui-dialog": "newGame"
            }
        });
    }
}
