const hammingDistance = require('./hammingDistance')

test ('returns 3 dissimilar characters', () => {
    expect (hammingDistance('karolin', 'kathrin')).toBe(3)
})