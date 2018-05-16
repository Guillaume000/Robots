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

    move() {
        var down = prompt("Allez en bas ? (" + this.mobility + " cases maximum)");
        var right = prompt("Allez à droite ? (" + this.mobility + " cases maximum)");
        var up = prompt("Allez en haut ? (" + this.mobility + " cases maximum)");
        var left = prompt("Allez à gauche ? (" + this.mobility + " cases maximum)");
        
        if(down != undefined && down <= this.mobility) {
            this.position.a = this.position.a + parseInt(down);
        }

        if(right != undefined && right <= this.mobility) {
            this.position.b = this.position.b + parseInt(right);
        }

        if(up != undefined && up <= this.mobility) {
            this.position.a = this.position.a - parseInt(up);
        }

        if(left != undefined && left <= this.mobility) {
            this.position.b = this.position.b - parseInt(left);
        }

        // Pour ne pas sortir nos robots de la grille
        if(this.position.a < 0) {
            this.position.a = 0;
        }

        if(this.position.b < 0) {
            this.position.b = 0;
        }
        
        if(this.position.a > 9) {
            this.position.a = 9;
        }

        if(this.position.b > 9) {
            this.position.b = 9;
        }
    }
}



