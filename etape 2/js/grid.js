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
        for(var a = 0; a < this.size.height; a++) {
            grid[a] = [];
            $('.board').append('<div class="row" id="row-' + a + '">');
            for(var b = 0; b < this.size.width; b++) {
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
            var chanceIndex = Math.floor(Math.random() * (this.size.width * this.size.height));

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
                    var gridObject = new Robot(robotElement.name, robotElement.lifePoints, robotElement.mobility, robotElement.weapon, robotElement.power, {a: parseInt(chanceIndex[0]), b: parseInt(chanceIndex[1])});
                    gridElements.push(gridObject);
                    $("#case-" + gridObject.position.a + gridObject.position.b).addClass('robot' + (this.robots.length -1));
                }
            }
        }
    }
    
    setAvailableMoves(gridElement){
        //Pour chaque direction regarder les mouvements disponibles
        if(gridElement !== undefined) {
            var elementClasses = gridElement.attr("class");
            if(gridElement.hasClass("wall") || gridElement.hasClass("robot0") || gridElement.hasClass("robot1")) {
                return false;
            } else {
                gridElement.addClass("mobility");
                //Quand on clique sur une case verte, on change la position du joueur
                gridElement.click(function() {
                    //Le .click est limité à un (l'erreur c'est que c'est un .click par case)
                    gridElement.off();
                    //Je récupère la position de mon élément cliqué
                    actualPlayer.position = gridElement.attr("id");
                    console.log(actualPlayer.position);
                    //J'essaie d'afficher le résultat
                    gridElement.addClass("robot0").removeClass("mobility");
                });
                return true;
            }
        }
    }
        
    setMobilityWithDirection(direction, player) {
        switch (direction) {
            case "top":
                for(var i = 1; i <= player.mobility; i++) {
                    //on récupère la case en haut
                    var gridElement = $("#case-" + (player.position.a - i) + player.position.b);
                    //Si il y a un obstacle, les cases suivantes sont inaccessibles
                    if(!this.setAvailableMoves(gridElement)) {
                        //Quand il y a un obstacle j'empêche le .click sur eux
                        gridElement.off();
                        break;
                    }
                }
            //Je break ici aussi pour ne pas qu'il aille dans les autres cases
            break;
            case "bottom":
                for(var i = 1; i <= player.mobility; i++) {
                    //on récupère la case en bas
                    var gridElement = $("#case-" + (player.position.a + i) + player.position.b);
                    if(!this.setAvailableMoves(gridElement)) {
                        gridElement.off();
                        break;
                    }

                }
            break;
            case "left":
                for(var i = 1; i <= player.mobility; i++) {
                    //on récupère la case à gauche
                    var gridElement = $("#case-" + player.position.a + (player.position.b - i));
                    if(!this.setAvailableMoves(gridElement)) {
                        gridElement.off();
                        break;
                    }

                }
            break;
            case "right":
                for(var i = 1; i <= player.mobility; i++) {
                    //on récupère la case à droite
                    var gridElement = $("#case-" + player.position.a + (player.position.b + i));
                    if(!this.setAvailableMoves(gridElement)) {
                        gridElement.off();
                        break;
                    }
                }
            break;
        }
    }
}
