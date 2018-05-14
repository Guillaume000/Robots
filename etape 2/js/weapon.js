class Weapon {
    constructor(weaponName, power, position) {
        this.weaponName = weaponName;
        this.power = power;
        this.position = position;
    }

    weaponDescription() {
        console.log("Bonjour, mon nom est " + this.weaponName + " et j'inflige " + this.power + " points de dégâts");
    }
}
