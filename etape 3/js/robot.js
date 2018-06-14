class Robot {
    constructor(name, lifePoints, mobility, weapon, position, classCSS) {
        this.name = name;
        this.lifePoints = lifePoints;
        this.mobility = mobility;
        this.weapon = weapon;
        this.position = position;
        this.classCSS = classCSS;
    }
    
    move(board) {
        board.setMobilityWithDirection("top", this);
        board.setMobilityWithDirection("bottom", this);
        board.setMobilityWithDirection("left", this);
        board.setMobilityWithDirection("right", this);
        
        $(".mobility").click((e) => {
            this.changePosition(e.currentTarget);
            this.checkWeapon(e.currentTarget);
            this.beginBattle();
            $(".mobility").removeClass("mobility").off();
            turn();
        });
    }
    
    changePosition(target) {
        var idTarget = target.id;
        var newPosition = idTarget.split("case-");
        $("#case-" + this.position.a + this.position.b).removeClass(this.classCSS);
        this.position.a = parseInt(newPosition[1][0]);
        this.position.b = parseInt(newPosition[1][1]);
        $("#case-" + this.position.a + this.position.b).addClass(this.classCSS);
    }
    
    checkWeapon(target) {
        $.each(Config.weaponsElements, (numberObject, objectSkills) => {
            if($("#case-" + this.position.a + this.position.b).hasClass(objectSkills.classCSS)) {
                $("#case-" + this.position.a + this.position.b).removeClass(objectSkills.classCSS);
                $("#case-" + this.position.a + this.position.b).addClass(this.weapon.classCSS);
                this.weapon = objectSkills;
                console.log(`${this.name} a équipé l'arme ${this.weapon.name}`);
                return false;
            }
        });
    }
    
    beginBattle() {
        $.each(Config.robotsElements, (numberObject, objectSkills) => {
            if(
                $("#case-" + (this.position.a + 1) + this.position.b).hasClass(objectSkills.classCSS) ||
                $("#case-" + (this.position.a - 1) + this.position.b).hasClass(objectSkills.classCSS) ||
                $("#case-" + this.position.a + (this.position.b + 1)).hasClass(objectSkills.classCSS) ||
                $("#case-" + this.position.a + (this.position.b - 1)).hasClass(objectSkills.classCSS)
            ) {
                alert("Début du combat");
                board.robots[0].mobility = 0;
                board.robots[1].mobility = 0;
            }
        });
    }
    
    battle() {
        $(function () {
            $("#actionChoice").dialog({
                modal: true,
                buttons: {
                    Attaque: function () {
                        actualPlayer.attack();
                        turn();
                    },
                    Défense: function () {
                        actualPlayer.protect();
                        turn();
                    }
                }
            });
        });
        //console.log(`Action de ${this.name}`);
        console.log(`Attaquer avec ${this.weapon.name} ${this.weapon.power} points de dégâts ou`);
        //console.log("Défendre (Réduit les dégâts de la prochaine attaque de 50%)");
    }
    
    attack() {
        this.attackCalculation();
        victoryCondition();
    }
    
    attackCalculation() {
        //console.log(`${this.name} attaque avec l'arme ${this.weapon.name} et inflige ${this.weapon.power} points de dégâts`);
        nextPlayer.lifePoints = nextPlayer.lifePoints - this.weapon.power;
        console.log(`Il reste ${nextPlayer.lifePoints} points de vie au ${nextPlayer.name}`);
    }
    
    protect() {
        //console.log(`${this.name} absorbera la moitié des dégâts infligés à la prochaine attaque`);
        nextPlayer.weapon.power = nextPlayer.weapon.power / 2;
    }
}



