// Return an array of integers sorted by their 'weight' - a number's weight is the sum of it's digits. So, 91 would have a 'weight' of 10.

const orderByWeight = string => {
    const sortArray = []

    string.split(' ').sort().forEach(number => {
        const explodedNumber = number.toString().split('')
        let sum = 0
        explodedNumber.forEach(number => sum += Number(number))
        sortArray.push([number, sum])
    })

    return sortArray
        .sort((a, b) => a[1] - b[1])
        .map(pair => pair[0])
        .join(' ')
}

module.exports = orderByWeight