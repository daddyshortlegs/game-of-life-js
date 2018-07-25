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
    },

    countRow : function(row, x) {
        let count = 0;
        for (let i = x - 1; i <= x + 1; i++) {
           if (row[i] === "*") {
               count++;
           }
        }

        return count;
    }

}

export { gameoflife };