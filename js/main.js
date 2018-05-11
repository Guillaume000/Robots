var plateau = new Grille({largeur: 10, hauteur: 10});
plateau.creerGrille();

var wall = [
    wall0 = new Wall(true, {a: 6, b: 2}),
    wall1 = new Wall(true, {a: 2, b: 2}),
    wall2 = new Wall(true, {a: 3, b: 7}),
    wall3 = new Wall(true, {a: 4, b: 8}),
    wall4 = new Wall(true, {a: 9, b: 2})
];

var weapons = [
    remote = new Weapon("Télécommande", 20, {a: 2, b: 4}),
    newspaper = new Weapon("Journal", 35, {a: 0, b: 1}),
    broom = new Weapon("Balai", 50, {a: 6, b: 8}),
    keyboard = new Weapon("Clavier", 60, {a: 3, b: 7})
];

var armeeRobots = [
    funnyBot = new Robot("Funnybot", 100, 4, {a: 7, b: 0}, fist = new Weapon("Poings", 10)),
    genialO = new Robot("GénialO", 300, 2, {a: 3, b: 9}),
];

for(var x = 0; x < wall.length; x++) {
//wall[x].position.a = randomIndex(wall.length, 10, 10);
    //console.log(wall[x].position.a[0]);
//wall[x].position.b = randomIndex(wall.length, 10, 10);
    //console.log(wall[x].position.b[1]);
    $("#case-" + wall[x].position.a[0] + wall[x].position.b[1]).addClass('wall');
}

for(var x = 0; x < weapons.length; x++) {
//weapons[x].position.a = randomIndex(weapons.length, 10, 10);
    //console.log(weapons[x].position.a[0]);
//weapons[x].position.b = randomIndex(weapons.length, 10, 10);
    //console.log(weapons[x].position.b[1]);
    $("#case-" + weapons[x].position.a[0] + weapons[x].position.b[1]).addClass('weapon' + x);
}

for(var x = 0; x < armeeRobots.length; x++) {
//armeeRobots[x].position.a = randomIndex(armeeRobots.length, 10, 10);
    //console.log(armeeRobots[x].position.a[0]);
//armeeRobots[x].position.b = randomIndex(armeeRobots.length, 10, 10);
    //console.log(armeeRobots[x].position.b[1]);
    $("#case-" + armeeRobots[x].position.a[0] + armeeRobots[x].position.b[1]).addClass('robot' + x);
}

console.log(wall0.position.a = randomIndex(10, 10, 10));
//console.log(wall0.position.b = randomIndex(1, 10, 10));


