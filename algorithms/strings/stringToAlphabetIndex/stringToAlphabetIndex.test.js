const stringToAlphabetIndex = require("./stringToAlphabetIndex")

test('returns a string of "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"', () => {
    expect(stringToAlphabetIndex("The sunset sets at twelve o' clock."))
        .toMatch('20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11')
})