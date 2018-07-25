var gameoflife = {


    newGeneration : function(grid) {

        grid.foreach()

        return [];
    },

    countLeft : function(row, x) {
        return this.countSingle(row, x - 1);
    },

    countRight : function(row, x) {
        return this.countSingle(row, x + 1);
    },

    countSingle : function(row, cell) {
        if (row[cell] === "*") {
            return 1;
        }

        return 0;
    }
}

export { gameoflife };