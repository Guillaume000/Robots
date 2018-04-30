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

            var walkX = prompt("Entrez un nombre pour le déplaçement horizontal (1 à 3 cases)");

            var walkY = prompt("Entrez un nombre pour le déplaçement vertical (1 à 3 cases)");

            switch(walkX) {
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
                    console.log("erreur");
            }

            switch(walkY) {
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
                    console.log("erreur");
            }
        }
    }
}

