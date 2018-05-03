var armeeRobots = [
    funnyBot = new Robot("Funnybot", 100, 4, [5, 3]),
    robotChien = new Robot("Robotchien", 150, 5, [6, 4]),
    genialO = new Robot("GénialO", 300, 2, [7, 0]),
    mechaStreisand = new Robot("MechaStreisand", 80, 1, [2, 9])
];

/*for(var x = 0; x < armeeRobots.length; x++) {
    armeeRobots[x].introduce();
    armeeRobots[x].move();
    armeeRobots[x].introduce();
}*/

armeeRobots[0].seDeplacerAleatoirement(1);

