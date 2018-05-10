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
                //grid[a][b] = String.fromCharCode(a*10+b+35);
                //grid[0][b] = "" + b;
                grid[a][b] = "" + a + b;
                $('#row-' + a).append('<div class="case" id="case-' + a + b + '">');
            }
        }
        //console.log(grid);

        this.grille.murs = this.randomIndex(this.grille.murs, this.grille.largeur, this.grille.hauteur);

        for(var x = 0; x < this.grille.murs.length; x++) {
            $("#case-" + this.grille.murs[x]).addClass('wall');
        }
    }

    randomIndex(nbIndex, width, height) {
        var board = [];
        var counter = 0;
        var chanceIndex;

        while (counter != nbIndex) {
            chanceIndex = Math.floor(Math.random() * (width * height));
            if(chanceIndex <= 9) {
                chanceIndex = "0" + chanceIndex;
            }

            if (board.indexOf(chanceIndex) > -1) continue; {
                board.push(chanceIndex);
                counter++;
            }
        }
        //console.log(board);
        return board;
    }

}
