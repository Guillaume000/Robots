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
                console.log(this.name + " a équipé l'arme " + this.weapon.name);
                return false;
            }
        });
    }
}



