class Grid {
    constructor(size) {
        this.size = size;
        this.occupiedCells = [];
        this.robots = [];
        this.walls = [];
        this.weapons = [];
    }

    createGrid() {
        const grid = [];
        for(let a = 0; a < this.size.height; a++) {
            grid[a] = [];
            $('.board').append(`<tr id='row-${a}'>`);
            for(let b = 0; b < this.size.width; b++) {
                $(`#row-${a}`).append(`<td class='case' id='case-${a}${b}'>`);
            }
        }
    }

    populateGridWith(element) {
        const elements = element + "s";
        const config = new Config;
        let gridElements = this.walls;
        let configElements = config.walls;

        if(elements === "weapons") {
            gridElements = this.weapons;
            configElements = config.weapons;
        }

        if(elements === "robots") {
            gridElements = this.robots;
            configElements = config.robots;
        }

        while(gridElements.length < configElements) {
            let chanceIndex = Math.floor(Math.random() * (this.size.width * this.size.height));

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
                    const gridObject = new Wall({a: chanceIndex[0], b: chanceIndex[1]});
                    gridElements.push(gridObject);
                    $("#case-" + gridObject.position.a + gridObject.position.b).addClass('wall');
                }

                if(elements === "weapons") {
                    const weaponElement = Config.weaponsElements[this.weapons.length];
                    const gridObject = new Weapon(weaponElement.name, weaponElement.power, {a: chanceIndex[0], b: chanceIndex[1]}, weaponElement.classCSS);
                    gridElements.push(gridObject);
                    $("#case-" + gridObject.position.a + gridObject.position.b).addClass('weapon' + (this.weapons.length - 1));
                }

                if(elements === "robots") {
                    const robotElement = Config.robotsElements[this.robots.length];
                    const gridObject = new Robot(robotElement.name, robotElement.lifePoints, robotElement.mobility, robotElement.weapon, {a: parseInt(chanceIndex[0]), b: parseInt(chanceIndex[1])}, robotElement.classCSS);
                    gridElements.push(gridObject);
                    $("#case-" + gridObject.position.a + gridObject.position.b).addClass('robot' + (this.robots.length - 1));
                }
            }
        }
    }
        
    setMobilityWithDirection(direction, player) {
        switch (direction) {
            case "top":
                for(let i = 1; i <= player.mobility; i++) {
                    const gridElement = $("#case-" + (player.position.a - i) + player.position.b);
                    if(!this.setAvailableMoves(gridElement)) {
                        gridElement.off();
                        break;
                    }
                }
            break;
            case "bottom":
                for(let i = 1; i <= player.mobility; i++) {
                    const gridElement = $("#case-" + (player.position.a + i) + player.position.b);
                    if(!this.setAvailableMoves(gridElement)) {
                        gridElement.off();
                        break;
                    }
                }
            break;
            case "left":
                for(let i = 1; i <= player.mobility; i++) {
                    const gridElement = $("#case-" + player.position.a + (player.position.b - i));
                    if(!this.setAvailableMoves(gridElement)) {
                        gridElement.off();
                        break;
                    }
                }
            break;
            case "right":
                for(let i = 1; i <= player.mobility; i++) {
                    const gridElement = $("#case-" + player.position.a + (player.position.b + i));
                    if(!this.setAvailableMoves(gridElement)) {
                        gridElement.off();
                        break;
                    }
                }
            break;
            default:
                console.log("Il n'y a pas de direction");
        }
    }
    
    setAvailableMoves(gridElement) {
        if(gridElement !== undefined) {
            if(gridElement.hasClass("wall") || gridElement.hasClass("robot0") || gridElement.hasClass("robot1")) {
                return false;
            } else {
                gridElement.addClass("mobility");
                return true;
            }
        }
    }
    
    updateStatistics(player) {
        let namePlayer = $('#namePlayer1');
        let lifePointsPlayer = $('#lifePoints1');
        let weaponPlayer = $('#weapon1');
        let protect = $('#protect1');
                
        if(player == this.robots[1]) {
            namePlayer = $('#namePlayer2');
            lifePointsPlayer = $('#lifePoints2');
            weaponPlayer = $('#weapon2');
            protect = $('#protect2');
        }
        
        namePlayer.load('../js/config.js', function() {
            namePlayer.html(player.name).addClass(player.classCSS);
            lifePointsPlayer.html(`Points de vie : ${player.lifePoints}`);
            weaponPlayer.html(`Arme : ${player.weapon.name} (force : ${player.weapon.power})`);
            if($(`.${player.classCSS}`).hasClass('shield')) {
                protect.html(`${player.name} absorbe 50% des dégâts pendant 1 tour`);
            } else {
                protect.html(null);
            }
        });
    }
}
