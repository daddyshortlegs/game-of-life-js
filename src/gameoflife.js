var gameoflife = {


    newGeneration : function(grid) {

        grid.foreach()

        return [];
    },

    countLeft : function(row, x) {
        if (row[x - 1] === "*") {
            return 1;
        }

        return 0;
    },

    countRight : function(row, x) {
        if (row[x + 1] === "*") {
            return 1;
        }

        return 0;
    }
}

export { gameoflife };