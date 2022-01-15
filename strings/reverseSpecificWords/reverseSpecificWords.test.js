const reverseSpecificWordsTest = require('./reverseSpecificWords')

test('reverses all words with 5 or more characters', () => {
    expect(reverseSpecificWordsTest('Test words algorithm', 5))
        .toBe('Test sdrow mhtirogla')
})

test('reverses all words with 8 or more characters', () => {
    expect(reverseSpecificWordsTest('Algorithms are essential', 8))
        .toBe('smhtiroglA are laitnesse')
})