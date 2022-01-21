const splitsStringsToPairs = require('./splitsStringsToPairs')

test('returns an array of ["ab", "cd", "e_"]', () => {
    expect(splitsStringsToPairs("abcde")).toStrictEqual(['ab', 'cd', 'e_'])
})

test('returns an array of ["ab", "cd", "ef"]', () => {
    expect(splitsStringsToPairs("abcdef")).toStrictEqual(["ab", "cd", "ef"])
})

test('returns an empty array', () => {
    expect(splitsStringsToPairs("")).toStrictEqual([])
})