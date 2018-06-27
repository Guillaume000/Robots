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
    }
    
    changePosition(target) {
        const idTarget = target.id;
        const newPosition = idTarget.split("case-");
        $("#case-" + this.position.a + this.position.b).addClass('animated zoomOut').removeClass(this.classCSS + ' animated zoomIn zoomOut');
        this.position.a = parseInt(newPosition[1][0]);
        this.position.b = parseInt(newPosition[1][1]);
        $("#case-" + this.position.a + this.position.b).addClass(this.classCSS + (' animated zoomIn'));
    }
    
    checkWeapon(target) {
        $.each(Config.weaponsElements, (numberObject, objectSkills) => {
            if($("#case-" + this.position.a + this.position.b).hasClass(objectSkills.classCSS)) {
                $("#case-" + this.position.a + this.position.b).removeClass(objectSkills.classCSS);
                $("#case-" + this.position.a + this.position.b).addClass(this.weapon.classCSS);
                this.weapon = objectSkills;
                alert(`${this.name} a équipé l'arme ${this.weapon.name}`);
                return false;
            }
        });
    }
    
    attack(target) {
        this.attackCalculation(target);
    }
    
    attackCalculation(target) {
        alert(`${this.name} attaque avec l'arme ${this.weapon.name} et inflige ${this.weapon.power} points de dégâts`);
        if($(`.${target.classCSS}`).hasClass("shield")) {
            target.lifePoints = target.lifePoints - (this.weapon.power / 2);
            $(`.${target.classCSS}`).removeClass("shield");
            alert(`${target.name} a absorbé ${this.weapon.power / 2}`);
        } else {
            target.lifePoints = target.lifePoints - this.weapon.power;      
        }  
        alert(`Il reste ${target.lifePoints} points de vie au ${target.name}`);
    }
    
    protect() {
        alert(`${this.name} absorbera la moitié des dégâts infligés à la prochaine attaque`);
        $(`.${this.classCSS}`).addClass("shield");
    }
}



