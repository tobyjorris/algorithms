const duplicateEncoder = require('./duplicateEncoder')

test('returns "((("', () => {
    expect(duplicateEncoder('dog')).toMatch('(((')
})

test('returns ")())())" (ignoring case)', () => {
    expect(duplicateEncoder('Success')).toMatch(')())())')
})

test('return "))(("', () => {
    expect(duplicateEncoder('(( @"),')).toMatch('))((')
})