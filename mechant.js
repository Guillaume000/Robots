class Mechant extends Robot {
    supeconstructor(damages, range) {
        this.damages = damages;
        this.range = range;
    }
    introduce() {
        /*if(this.range == true) {
            console.log("Ha ha ha, je m'appelle " + this.name + ". J'ai " + this.lifePoints + " points de vie et je me déplace à " + this.mobility + " case par seconde. " + "Je suis à la case de coordonnées (" + this.position + "). J'inflige " + this.damages + " et j'attaque à distance");
        } else {
            console.log("Ha ha ha, je m'appelle " + this.name + ". J'ai " + this.lifePoints + " points de vie et je me déplace à " + this.mobility + " case par seconde. " + "Je suis à la case de coordonnées (" + this.position + "). J'inflige " + this.damages + " mais attaque à distance");
        }*/

        console.log(this.damages);
    }



}
