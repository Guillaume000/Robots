class Mechant extends Robot {
    constructor(name, lifePoints, mobility, position, damages) {
        super(name, lifePoints, mobility, position);
        this.damages = damages;
    }

    introduce() {
        if(this.range == true) {
            super.introduce();
            console.log("J'inflige " + this.damages);
        } else {
            super.introduce();
            console.log("J'inflige " + this.damages);
        }
    }
}
