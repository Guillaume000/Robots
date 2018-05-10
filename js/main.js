var plateau = new Grille({largeur: 10, hauteur: 10, murs: 5});
plateau.creerGrille();

var weapons = [
    remote = new Weapon("Télécommande", 20),
    newspaper = new Weapon("Journal", 35),
    broom = new Weapon("Balai", 50),
    keyboard = new Weapon("Clavier", 60)
];

var armeeRobots = [
    funnyBot = new Robot("Funnybot", 100, 4, {a: 7, b: 0}, fist = new Weapon("Poings", 10)),
    genialO = new Robot("GénialO", 300, 2, {a: 3, b: 9}),
];

for(var x = 0; x < armeeRobots.length; x++) {
    $("#case-" + armeeRobots[x].position.a + armeeRobots[x].position.b).addClass('robot' + x);
}

for(var x = 0; x < weapons.length; x++) {
    //weapons[x].weaponDescription();
}

//funnyBot.introduce();
