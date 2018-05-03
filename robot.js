class Robot {
    constructor(name, lifePoints, mobility, position) {
        this.name = name;
        this.lifePoints = lifePoints;
        this.mobility = mobility;
        this.position = position;

        this.introduce = function() {
            if(this.mobility == 1) {
                console.log("Bonjour, je m'appelle " + this.name + ". J'ai " + this.lifePoints + " points de vie et je me déplace à " + this.mobility + " case par seconde. " + "Je suis à la case de coordonnées (" + this.position + ").");
            } else {
                console.log("Bonjour, je m'appelle " + this.name + ". J'ai " + this.lifePoints + " points de vie et je me déplace à " + this.mobility + " cases par seconde. " + "Je suis à la case de coordonnées (" + this.position + ").");
            }
        }

        this.move = function() {
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

            if(droite <= this.mobility) {
                this.position[0] = droite;
            }

            if(bas <= this.mobility) {
                this.position[1] = bas;
            }

            if(gauche <= this.mobility) {
                this.position[0] = this.position[0] - gauche;
            }

            if(haut <= this.mobility) {
                this.position[1] = this.position[1] - haut;
            }

            if(droite > this.mobility) {
                this.position[0] = this.mobility;
            }

            if(bas > this.mobility) {
                this.position[1] = this.mobility;
            }

            if(gauche > this.mobility) {
                this.position[0] = - this.mobility;
            }

            if(haut > this.mobility) {
                this.position[1] = - this.mobility;
            }

            if(this.position[0] < 0) {
                this.position[0] = 0;
            }

            if(this.position[1] < 0) {
                this.position[1] = 0;
            }
        }

        this.seDeplacerAleatoirement = function(nombreDeplacement) {
            for(var x = 0; x < nombreDeplacement; x++) {
                this.move();
            }
        }
    }
}

