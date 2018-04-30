class Robot {
    constructor(name, lifePoints, mobility, position) {
        this.name = name;
        this.lifePoints = 100;
        this.mobility = 3;
        this.position = [0, 0];

        this.introduce = function() {
            console.log("Bonjour, je m'appelle " + this.name + ". J'ai " + this.lifePoints + " points de vie et je me déplace à " + this.mobility + " cases par seconde. " + "Je suis à la case de coordonnées (" + this.position + ").");
        }
    }
}

