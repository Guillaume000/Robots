class Mechant extends Robot {
    constructor(name, lifePoints, mobility, position, damages, range) {
        super(name, lifePoints, mobility, position);
        this.damages = damages;
        this.range = range;
    }

    introduce() {
        if(this.range == true) {
            super.introduce();
            console.log("J'inflige " + this.damages + " et j'attaque à distance");
        } else {
            super.introduce();
            console.log("J'inflige " + this.damages + " mais je n'attaque pas à distance");
        }
    }
}
