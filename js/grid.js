class Grid {
    constructor(size) {
        this.size = size;
        this.occupiedCells = [];
        this.robots = [];
        this.walls = [];
        this.weapons = [];
    }

    createGrid() {
        var grid = [];
        for(var a = 0; a < this.size.hauteur; a++) {
            grid[a] = [];
            $('.plateau').append('<div class="row" id="row-' + a + '">');
            for(var b = 0; b < this.size.largeur; b++) {
                $('#row-' + a).append('<div class="case" id="case-' + a + b + '">');
            }
        }
    }

    populateGridWith(element) {
        var elements = element + "s";
        var config = new Config;

        if(elements === "walls") {
            var gridElements = this.walls;
            var configElements = config.walls;
        }

        if(elements === "weapons") {
            var gridElements = this.weapons;
            var configElements = config.weapons;
        }

        if(elements === "robots") {
            var gridElements = this.robots;
            var configElements = config.robots;
        }

        while(gridElements.length < configElements) {
            var chanceIndex = Math.floor(Math.random() * (this.size.largeur * this.size.hauteur));

            if(!this.occupiedCells.includes(chanceIndex)) {
                this.occupiedCells.push(chanceIndex);
                if(elements === "robots") {
                    this.occupiedCells.push(chanceIndex -11, chanceIndex -10, chanceIndex -9, chanceIndex -1, chanceIndex +1, chanceIndex +9, chanceIndex +10, chanceIndex +11);
                }

                if(chanceIndex <= 9) {
                    chanceIndex = "0" + chanceIndex;
                }
                chanceIndex = ("" + chanceIndex).split("");

                if(elements === "walls") {
                    var gridObject = new Wall(true, {a: chanceIndex[0], b: chanceIndex[1]});
                    gridElements.push(gridObject);
                    $("#case-" + gridObject.position.a + gridObject.position.b).addClass('wall');
                }

                if(elements === "weapons") {
                    var weaponElement = config.weaponsNames[this.weapons.length];
                    var gridObject = new Weapon(weaponElement.name, weaponElement.power, {a: chanceIndex[0], b: chanceIndex[1]});
                    gridElements.push(gridObject);
                    $("#case-" + gridObject.position.a + gridObject.position.b).addClass('weapon' + (this.weapons.length -1));
                }

                if(elements === "robots") {
                    var robotElement = config.robotsNames[this.robots.length];
                    var gridObject = new Robot(robotElement.name, robotElement.lifePoints, robotElement.weapon, robotElement.power, {a: chanceIndex[0], b: chanceIndex[1]});
                    gridElements.push(gridObject);
                    $("#case-" + gridObject.position.a + gridObject.position.b).addClass('robot' + (this.robots.length -1));
                }
            }
        }
    }
}
