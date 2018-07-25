import {gameoflife} from "./gameoflife";


describe("Game Of Life", () => {
    xit("cell should die when less than 2 live neighbours", () => {
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


    it("should get number of live cells to the left", () => {
        let count = gameoflife.countLeft(['.','*','*','.','.'], 2);
        expect(count).toEqual(1);
    });

    it("should return no live cells to the left", () => {
        let count = gameoflife.countLeft(['.','.','*','.','.'], 2);
        expect(count).toEqual(0);
    });

    it("should get number of live cells to the right", () => {
        let count = gameoflife.countRight(['.','.','*','*','.'], 2);
        expect(count).toEqual(1);
    });

    it("should return no live cells to the Right", () => {
        let count = gameoflife.countRight(['.','.','*','.','.'], 2);
        expect(count).toEqual(0);
    });


});
