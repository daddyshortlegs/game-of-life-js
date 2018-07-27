import {gameoflife} from "./gameoflife";


describe("Game Of Life", () => {
    it("cell should die when less than 2 live neighbours", () => {
        let grid = [
            ['.','.','.','.','.'],
            ['.','.','*','.','.'],
            ['.','.','*','.','.'],
            ['.','.','.','.','.'],
            ['.','.','.','.','.']
        ];

        let nextGen = gameoflife.newGeneration(grid);

        let expected = [
            ['.','.','.','.','.'],
            ['.','.','.','.','.'],
            ['.','.','.','.','.'],
            ['.','.','.','.','.'],
            ['.','.','.','.','.']
        ];

        expect(nextGen).toEqual(expected);
    });

    it("cell should live when 2 neighbours", () => {
        let grid = [
            ['.','.','.','.','.'],
            ['.','.','.','.','.'],
            ['.','.','*','*','.'],
            ['.','.','.','*','.'],
            ['.','.','.','.','.']
        ];

        let nextGen = gameoflife.newGeneration(grid);

        let expected = [
            ['.','.','.','.','.'],
            ['.','.','.','.','.'],
            ['.','.','*','*','.'],
            ['.','.','*','*','.'],
            ['.','.','.','.','.']
        ];

        expect(nextGen).toEqual(expected);
    });

    it("cell should live when 3 neighbours", () => {
        let grid = [
            ['.','.','.','.','.'],
            ['.','.','.','.','.'],
            ['.','.','*','*','.'],
            ['.','.','*','*','.'],
            ['.','.','.','.','.']
        ];

        let nextGen = gameoflife.newGeneration(grid);

        let expected = [
            ['.','.','.','.','.'],
            ['.','.','.','.','.'],
            ['.','.','*','*','.'],
            ['.','.','*','*','.'],
            ['.','.','.','.','.']
        ];

        expect(nextGen).toEqual(expected);
    });

    it("cell should die when more than 3 neighbours", () => {
        let grid = [
            ['.','.','.','.','.'],
            ['.','.','.','.','.'],
            ['.','.','*','*','.'],
            ['.','.','*','*','.'],
            ['.','.','*','.','.']
        ];

        let nextGen = gameoflife.newGeneration(grid);

        let expected = [
            ['.','.','.','.','.'],
            ['.','.','.','.','.'],
            ['.','.','*','*','.'],
            ['.','*','.','.','.'],
            ['.','.','*','*','.']
        ];

        expect(nextGen).toEqual(expected);
    });

    it("dead cell should reanimate with 3 live neighbours", () => {
        let grid = [
            ['.','.','.','.','.'],
            ['.','.','*','.','.'],
            ['.','.','*','.','.'],
            ['.','.','*','.','.'],
            ['.','.','.','.','.']
        ];

        let nextGen = gameoflife.newGeneration(grid);

        let expected = [
            ['.','.','.','.','.'],
            ['.','.','.','.','.'],
            ['.','*','*','*','.'],
            ['.','.','.','.','.'],
            ['.','.','.','.','.']
        ];

        expect(nextGen).toEqual(expected);
    });


    it("should get number of live cells to the left", () => {
        let count = gameoflife.countSingle(['.','*','*','.','.'], 2 - 1);
        expect(count).toEqual(1);
    });

    it("should return no live cells to the left", () => {
        let count = gameoflife.countSingle(['.','.','*','.','.'], 2 - 1);
        expect(count).toEqual(0);
    });

    it("should get number of live cells to the right", () => {
        let count = gameoflife.countSingle(['.','.','*','*','.'], 2 + 1);
        expect(count).toEqual(1);
    });

    it("should return no live cells to the Right", () => {
        let count = gameoflife.countSingle(['.','.','*','.','.'], 2 + 1);
        expect(count).toEqual(0);
    });

    it("should count a row of three", () => {
        let count = gameoflife.countRow(['.','*','*','*','.'], 1);
        expect(count).toEqual(2);
    });

    it("should count a row of three", () => {
        let count = gameoflife.countRow(['.','*','*','*','.'], 2);
        expect(count).toEqual(3);
    });

    it("should count around a single cell", () => {
        let grid = [
            ['.','.','.','.'],
            ['.','*','*','*'],
            ['*','*','.','*'],
            ['.','*','*','*']
        ];
        let count = gameoflife.countAroundCell(grid, 2, 1);
        expect(count).toEqual(5);
    });

    it("should count around a single cell 2", () => {
        let grid = [
            ['.','.','.','.','.'],
            ['.','.','.','.','.'],
            ['.','.','*','*','.'],
            ['.','.','*','*','.'],
            ['.','.','*','.','.']
        ];
        let count = gameoflife.countAroundCell(grid, 3, 0);
        expect(count).toEqual(0);

        count = gameoflife.countAroundCell(grid, 3, 1);
        expect(count).toEqual(3);

        count = gameoflife.countAroundCell(grid, 3, 2);
        expect(count).toEqual(4);

        count = gameoflife.countAroundCell(grid, 3, 3);
        expect(count).toEqual(4);

        count = gameoflife.countAroundCell(grid, 3, 4);
        expect(count).toEqual(2);

    });

});
