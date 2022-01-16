const capitalizeEveryWord = require('./capitalizeEveryWord')

test('returns a sentence with every word capitalized', () => {
    expect(capitalizeEveryWord('the quick brown fox jumps over the sheep'))
        .toBe('The Quick Brown Fox Jumps Over The Sheep')
})