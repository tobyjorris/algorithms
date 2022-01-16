const isAnagram = require('./isAnagram')

test('returns true given two words with spaces', () => {
    expect(isAnagram('Debit card', 'Bad credit')).toBe(true)
})

test('returns true given one single word and another word with spaces', () => {
    expect(isAnagram('Funeral', 'Real Fun')).toBe(true)
})

test('returns false if the strings aren\'t anagrams', () => {
    expect(isAnagram('works', 'rows')).toBe(false)
})