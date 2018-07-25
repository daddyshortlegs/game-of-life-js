var gameoflife = {


    newGeneration : function(grid) {

        for (let row = 0; row < grid.length; row++) {
            for (let index = 0; index < grid[row].length; index++) {
                let count = this.countAroundCell(grid[row], index);
                if (count < 2) {
                    grid[row][index] = ".";
                }
            }
        }

        return grid;
    },

    countAroundCell : function(grid, row, y) {
        let count = this.countAbove(grid, row, y);
        count += this.countBelow(grid, row, y);
        count += this.countSingle(grid[row], y - 1);
        count += this.countSingle(grid[row], y + 1);
        return count;
    },

    countSingle : function(row, i) {
        if (row[i] === "*") {
            return 1;
        }

        return 0;
    },

    countAbove : function(grid, row, index) {
        if (row == 0) {
            return 0;
        }
        return this.countRow(grid[row - 1], index);
    },

    countBelow : function(grid, row, index) {
        if (row === grid.length - 1) {
            return 0;
        }
        return this.countRow(grid[row + 1], index);
    },

    countRow : function(row, index) {
        let count = 0;
        for (let i = index - 1; i <= index + 1; i++) {
           if (row[i] === "*") {
               count++;
           }
        }

        return count;
    }

}

export { gameoflife };