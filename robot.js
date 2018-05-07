class Robot {
    constructor(name, lifePoints, mobility, position) {
        this.name = name;
        this.lifePoints = lifePoints;
        this.mobility = mobility;
        this.position = position;
    }

    introduce() {
        if(this.mobility == 1) {
            console.log("Bonjour, je m'appelle " + this.name + ". J'ai " + this.lifePoints + " points de vie et je me déplace à " + this.mobility + " case par seconde. " + "Je suis à la case de coordonnées (" + this.position.x + "," + this.position.y + ").");
        } else {
            console.log("Bonjour, je m'appelle " + this.name + ". J'ai " + this.lifePoints + " points de vie et je me déplace à " + this.mobility + " cases par seconde. " + "Je suis à la case de coordonnées (" + this.position.x + "," + this.position.y + ").");
        }
    }

    move() {
        if(this.mobility == 1) {
            var droite = prompt("Allez à droite ? (" + this.mobility + " case maximum)");
            var bas = prompt("Allez en bas ? (" + this.mobility + " case maximum)");
            var gauche = prompt("Allez à gauche ? (" + this.mobility + " case maximum)");
            var haut = prompt("Allez en haut ? (" + this.mobility + " case maximum)");
        } else {
            var droite = prompt("Allez à droite ? (" + this.mobility + " cases maximum)");
            var bas = prompt("Allez en bas ? (" + this.mobility + " cases maximum)");
            var gauche = prompt("Allez à gauche ? (" + this.mobility + " cases maximum)");
            var haut = prompt("Allez en haut ? (" + this.mobility + " cases maximum)");
        }


        if(droite != undefined && droite <= this.mobility) {
            this.position.x = this.position.x + parseInt(droite);
            //console.log(this.position.x);
        }

        if(bas != undefined && bas <= this.mobility) {
            this.position.y = this.position.y + parseInt(bas);
            //console.log(this.position.y);
        }

        if(gauche != undefined && gauche <= this.mobility) {
            this.position.x = this.position.x - parseInt(gauche);
            //console.log(this.position.x);
        }

        if(haut != undefined && haut <= this.mobility) {
            this.position.y = this.position.y - parseInt(haut);
            //console.log(this.position.y);
        }

        /*if(this.position[0] == -1) {
            this.position[0] = 9;
        }

        if(this.position[1] == -1) {
            this.position[1] = 9;
        }

        if(this.position[1] == 10) {
            this.position[0] = this.position[0] + 1;
            this.position[1] = 0;
        }*/

        if(this.position.x < 0) {
            this.position.x = 0;
        }

        if(this.position.y < 0) {
            this.position.y = 0;
        }
    }

    seDeplacerAleatoirement(nombreDeplacement) {
        for(var x = 0; x < nombreDeplacement; x++) {
            this.move();
            this.introduce();
        }
    }
}



