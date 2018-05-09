class Grille {
    constructor(grille, robot) {
        this.grille = grille;
        this.robot = robot;
    }

    creerGrille() {
        var grid = [];
        for(var a = 0; a < this.grille.hauteur; a++) {
            grid[a] = [];
            $('.plateau').append('<div class="row" id="row-' + a + '">');
            for(var b = 0; b < this.grille.largeur; b++) {
                //grid[a][b] = String.fromCharCode(a*10+b+35);
                grid[a][b] = "" + a + b;
                $('#row-' + a).append('<div class="case" id="case-' + a + b + '">');
            }
        }
        //console.table(grid);
    }

    afficheRobot() {
        for(var x = 1; x < 5; x++) {
            $("#case-" + this.robot.position.a + this.robot.position.b).addClass('robot' + x);
        }

        //console.log(this.robot.position.a);
        //console.log(this.robot.position.b);
    }

}

    /*var grid = [];
    for(var i = 0; i < width; i++) {
        grid[i] = [];
        $('#board').append('<div class="row" id="row-' + i + '">');
        for(var j = 0; j < height; j++) {
            grid[i][j] = new Cell(i, j);
            $('#row-' + i).append('<div class="cell" id="cell-' + i + '-' + j + '">' + '</div>');
        }
        $('.row').append('</div>');
    }*/
