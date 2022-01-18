const numberOfVowels = require('./numberOfVowels')

test('Returns 12', () => {
    expect(numberOfVowels('The Quick Red Fox Jumped Over The Lazy Dog'))
        .toEqual(12)
})

