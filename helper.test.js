const { mean, median, mode } = require("./helper");

describe("Test functions in helper", () => {
    test("Test mean function", () => {
        expect(mean([1, 2, 3, 4])).toEqual(2.5);
        expect(mean([1, 2, 3])).toEqual(2);
    });

    test("Test median function", () => {
        expect(median([4, 1, 3, 2])).toEqual(2.5);
        expect(median([3, 1, 4, 2, 7, 5, 6])).toEqual(4);
    });

    test("Test mode function", () => {
        expect(mode([1, 2, 3, 4, 5, 4, 2, 3, 6, 6])).toEqual(2);
    });
});
