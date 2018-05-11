class Grille {
    constructor(grille) {
        this.grille = grille;
    }

    creerGrille() {
        var grid = [];
        for(var a = 0; a < this.grille.hauteur; a++) {
            grid[a] = [];
            $('.plateau').append('<div class="row" id="row-' + a + '">');
            for(var b = 0; b < this.grille.largeur; b++) {
                //grid[a][b] = "" + a + b;
                grid[a][b] = a + "," + b;
                $('#row-' + a).append('<div class="case" id="case-' + a + b + '">');
            }
        }
    }
}
