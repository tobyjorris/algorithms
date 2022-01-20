const findOdd = require('./findOdd')

test('returns 5', () => {
    expect(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])).toBe(5)
})

test('returns 0', () => {
    expect(findOdd([0])).toBe(0)
})

