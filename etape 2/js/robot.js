class Robot {
    constructor(name, lifePoints, mobility, weapon, position) {
        this.name = name;
        this.lifePoints = lifePoints;
        this.mobility = mobility;
        this.weapon = weapon;
        this.position = position;
    }

    move(board) {
        board.setMobilityWithDirection("top", this);
        board.setMobilityWithDirection("bottom", this);
        board.setMobilityWithDirection("left", this);
        board.setMobilityWithDirection("right", this);
        
        $(".mobility").click(function() {
            actualPlayer.checkWeapon();
            $(".mobility").removeClass("mobility").off();
            turn();
        });
    }
    
    checkWeapon() {
        $.each(board.weapons, function(numberObject, objectSkills) {
            if($(".mobility").hasClass(objectSkills.classCSS)) {
                $("." + objectSkills.classCSS).removeClass(objectSkills.classCSS).addClass(actualPlayer.weapon.classCSS);
                actualPlayer.weapon = objectSkills;
            }
        });
     }
}



