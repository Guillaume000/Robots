var armeeRobots = [
    funnyBot = new Robot("Funnybot", 100, 4, {x: 5, y: 3}, false),
    robotChien = new Robot("Robotchien", 150, 5, {x: 6, y: 4}, false),
    genialO = new Robot("GénialO", 300, 2, {x: 7, y: 0}, false),
    mechaStreisand = new Robot("MechaStreisand", 80, 1, {x: 2, y: 9}, false)
];

var armeeMechants = [
    mechant1 = new Mechant("Méchant1", 300, 2, {x: 2, y: 8}, 10, true),
    mechant2 = new Mechant("Méchant2", 200, 4, {x: 7, y: 1}, 50, false)
];

/*for(var x = 0; x < armeeRobots.length; x++) {
    armeeRobots[x].introduce();
    armeeRobots[x].move();
    armeeRobots[x].introduce();
}*/

//armeeRobots[0].seDeplacerAleatoirement(1);
funnyBot.introduce();
//mechant1.introduce();
//funnyBot.move();
//funnyBot.introduce();
//mechant2.introduce();
