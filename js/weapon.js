class Weapon {
    constructor(weaponName, attackPoints) {
        this.weaponName = weaponName;
        this.attackPoints = attackPoints;
    }

    weaponDescription() {
        console.log("Bonjour, mon nom est " + this.weaponName + " et j'inflige " + this.attackPoints + " points de dégâts");
    }
}
