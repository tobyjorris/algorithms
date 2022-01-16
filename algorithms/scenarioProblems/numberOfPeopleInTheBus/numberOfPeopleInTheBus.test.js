const numberOfPeopleInTheBus = require('./numberOfPeopleInTheBus')

test('returns a final count of 5 people in the bus', () => {
    const stopData = [['10', '0'], ['3', '5'], ['5', '8']]
    expect(numberOfPeopleInTheBus(stopData)).toEqual(5)
})