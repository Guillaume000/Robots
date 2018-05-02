var armeeRobots = [
    funnyBot = new Robot("Funnybot"),
    robotChien = new Robot("Robotchien"),
    genialO = new Robot("GénialO"),
    mechaStreisand = new Robot("MechaStreisand")
];

for(var x = 0; x < armeeRobots.length; x++) {
    armeeRobots[x].introduce();
    armeeRobots[x].move();
    armeeRobots[x].introduce();
}
