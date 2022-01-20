//Given an array of integers, find the one that appears an odd number of times.
// 
// There will always be only one integer that appears an odd number of times.

const findOdd = integerArray => {
    const countObject = {}
    let oddInteger = null

    for (const int of integerArray) {
        countObject[int] = countObject[int] + 1 || 1
    }

    for (const [integer, count] of Object.entries(countObject)) {
        if (count % 2) {
            oddInteger = integer
        }
    }

    return Number(oddInteger)
}

//Short alternative:
// const findOdd = integerArray => integerArray.reduce((a, b) => a ^ b);

module.exports = findOdd