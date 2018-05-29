class Robot {
    constructor(name, lifePoints, mobility, weapon, power, position) {
        this.name = name;
        this.lifePoints = lifePoints;
        this.mobility = mobility;
        this.weapon = weapon;
        this.power = power;
        this.position = position;
    }

    introduce() {
        console.log("Bonjour, je m'appelle " + this.name + ". J'ai " + this.lifePoints + " points de vie et je me déplace à " + this.mobility + " cases par seconde. " + "Je suis à la case de coordonnées (" + this.position.a + "," + this.position.b + "), j'ai une arme qui s'appelle " + this.weapon.weaponName);
    }

    move(board) {
        board.setMobilityWithDirection("top", actualPlayer);
        board.setMobilityWithDirection("bottom", actualPlayer);
        board.setMobilityWithDirection("left", actualPlayer);
        board.setMobilityWithDirection("right", actualPlayer);
    }
}



