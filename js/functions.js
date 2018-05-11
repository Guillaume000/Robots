function randomIndex(nbIndex, width, height) {
    var board = [];
    var counter = 0;
    var chanceIndex;

    while (counter != nbIndex) {
        chanceIndex = Math.floor(Math.random() * (width * height));

        //Si le chiffre tiré == à un chiffre du tableau alors .pop()
        if (!board.includes(chanceIndex)) {
            board.push(chanceIndex);
        } else {
            board.pop();
        }

        if(chanceIndex <= 9) {
            chanceIndex = "0" + chanceIndex;
        }

        chanceIndex = ("" + chanceIndex).split("");
        counter++;
    }
    return board;
}
