class Weapon {
    constructor(weaponName, attackPoints, position) {
        this.weaponName = weaponName;
        this.attackPoints = attackPoints;
        this.position = position;
    }

    weaponDescription() {
        console.log("Bonjour, mon nom est " + this.weaponName + " et j'inflige " + this.attackPoints + " points de dégâts");
    }
}
