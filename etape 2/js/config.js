class Config {
    constructor() {
        this.walls = 5;
        this.weapons = 4;
        this.robots = 2;
        this.weaponsNames = [
            {name: "Télécommande", power: 20, classCSS: "weapon0"},
            {name: "Journal", power: 35, classCSS: "weapon1"},
            {name: "Balai", power: 50, classCSS: "weapon2"},
            {name: "Clavier", power: 60, classCSS: "weapon3"},
            {name: "Poings", power: 10, classCSS: "weapon4"}
        ];
        this.robotsNames = [
            {name: "Joueur 1", lifePoints: 100, mobility: 3, weapon: this.weaponsNames[4]},
            {name: "Joueur 2", lifePoints: 100, mobility: 3, weapon: this.weaponsNames[4]}
        ];
    }
}
