var armeeRobots = [
    funnyBot = new Robot("Funnybot", 100, 4, {a: 3, b: 5}),
    robotChien = new Robot("Robotchien", 150, 5, {a: 6, b: 4}),
    genialO = new Robot("GénialO", 300, 2, {a: 7, b: 0}),
    mechaStreisand = new Robot("MechaStreisand", 80, 1, {a: 2, b: 9})
];

var armeeMechants = [
    mechant1 = new Mechant("Méchant1", 300, 2, {a: 2, b: 8}, 10, true),
    mechant2 = new Mechant("Méchant2", 200, 4, {a: 7, b: 1}, 50, false)
];

var plateau = new Grille({largeur: 10, hauteur: 10});

plateau.creerGrille();

funnyBot.move();

for(var x = 0; x < armeeRobots.length; x++) {
    //armeeRobots[x].introduce();
    //armeeRobots[x].move();
    //armeeRobots[x].introduce();

    $("#case-" + armeeRobots[x].position.a + armeeRobots[x].position.b).addClass('robot' + x);
    //this.grille.robot = armeeRobots[x];
    //plateau = armeeRobots[x];
    console.log(armeeRobots[x]);

}





