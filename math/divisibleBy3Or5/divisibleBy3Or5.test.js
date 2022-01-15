const divisibleBy3Or5Test = require('./divisibleBy3Or5')

test('returns 23 when passed in 10', () => {
    expect(divisibleBy3Or5Test(10)).toBe(23)
})

test('returns 0 when passed a negative number', () => {
    expect(divisibleBy3Or5Test(-8)).toBe(0)
})