class Config {
    constructor() {
        //Variables globales
        this.walls = 5;
        this.weapons = 4;
        this.robots = 2;
        this.weaponsNames = [
            {name: "Télécommande", power: 20},
            {name: "Journal", power: 35},
            {name: "Balai", power: 50},
            {name: "Clavier", power: 60}
        ];
        this.robotsNames = [
            {name: "Funnybot", lifePoints: 100, mobility: 3, weapon: "Poings", power: 10},
            {name: "GénialO", lifePoints: 100, mobility: 3, weapon: "Poings", power: 10}
        ];
    }
}
