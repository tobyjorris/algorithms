const orderByWeight = require('./orderByWeight')

test('returns "11 11 2000 10003 22 123 1234000 44444444 9999"', () => {
    expect(orderByWeight('2000 10003 1234000 44444444 9999 11 11 22 123'))
        .toMatch("11 11 2000 10003 22 123 1234000 44444444 9999")
})