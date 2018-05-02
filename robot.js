class Robot {
    constructor(name, lifePoints, mobility, position) {
        this.name = name;
        this.lifePoints = 100;
        this.mobility = 3;
        this.position = [0, 0];

        this.introduce = function() {
            console.log("Bonjour, je m'appelle " + this.name + ". J'ai " + this.lifePoints + " points de vie et je me déplace à " + this.mobility + " cases par seconde. " + "Je suis à la case de coordonnées (" + this.position + ").");
        }

        this.move = function() {
            var droite = prompt("Allez à droite ? (1 à 3 cases)");
            var bas = prompt("Allez en bas ? (1 à 3 cases)");
            var gauche = prompt("Allez à gauche ? (1 à 3 cases)");
            var haut = prompt("Allez en haut ? (1 à 3 cases)");

            switch(droite) {
                case "1":
                    this.position[0] = this.position[0] + 1;
                    break;
                case "2":
                    this.position[0] = this.position[0] + 2;
                    break;
                case "3":
                    this.position[0] = this.position[0] + 3;
                    break;
                default:
                    console.log(this.name + " ne veut pas aller à droite");
            }

            switch(bas) {
                case "1":
                    this.position[1] = this.position[1] + 1;
                    break;
                case "2":
                    this.position[1] = this.position[1] + 2;
                    break;
                case "3":
                    this.position[1] = this.position[1] + 3;
                    break;
                default:
                    console.log(this.name + " ne veut pas aller en bas");
            }

            switch(gauche) {
                case "1":
                    this.position[0] = this.position[0] - 1;
                    break;
                case "2":
                    this.position[0] = this.position[0] - 2;
                    break;
                case "3":
                    this.position[0] = this.position[0] - 3;
                    break;
                default:
                    console.log(this.name + " ne veut pas aller à gauche");
            }

            switch(haut) {
                case "1":
                    this.position[1] = this.position[1] - 1;
                    break;
                case "2":
                    this.position[1] = this.position[1] - 2;
                    break;
                case "3":
                    this.position[1] = this.position[1] - 3;
                    break;
                default:
                    console.log(this.name + " ne veut pas aller en haut");
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

