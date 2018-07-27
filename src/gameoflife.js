var gameoflife = {

    newGeneration : function(grid) {
        let newGrid = [];

        for (let row = 0; row < grid.length; row++) {
            let line = "";
            let newLine = "";

            let newRow = [];
            for (let index = 0; index < grid[row].length; index++) {
                let count = this.countAroundCell(grid, row, index);
                console.log("symbol = " + grid[row][index]+ " row = " + row + ", index = " + index + " count = " + count);

                line += grid[row][index] + " ";

                if (grid[row][index] === "*") {
                    console.log("helo, we're a cell");
                    if (count < 2 || count > 3) {
                        console.log("killing off cell count > 3");
                        newRow.push(".");
                    } else {
                        console.log("staying alive");
                        newRow.push("*");
                    }
                } else {
                    if (count === 3) {
                        newRow.push("*");
                        console.log("reanimating");
                    } else {
                        console.log("cells already dead, staying dead");
                        newRow.push(".");
                    }
                }


            }
            newGrid.push(newRow);
            console.log(line);
        }

        return newGrid;
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