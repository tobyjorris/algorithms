const consecutiveStrings = require('./consecutiveStrings')

test('returns a string of \"abigailtheta\"', () => {
    const stringArray = ["zone", "abigail", "theta", "form", "libe", "zas"]
    expect(consecutiveStrings(stringArray, 2)).toMatch('abigailtheta')
})

test('returns a string of \"oocccffuucccjjjkkkjyyyeehh\"', () => {
    const stringArray = ["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"]
    expect(consecutiveStrings(stringArray, 1)).toMatch('oocccffuucccjjjkkkjyyyeehh')
})