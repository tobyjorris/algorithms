//Given an array of strings, and an integer, return the first longest string consisting of (integer) consecutive strings taken in the array.

const stringArray = ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"]

const consecutiveStrings = (stringArray, numberOfStrings) => {
    if (numberOfStrings <= 0) {
        return ''
    }

    let longestString = ''

    for (let i = 0; i <= (stringArray.length - numberOfStrings); i++) {
        const stringToCheck = stringArray.slice(i, i + numberOfStrings).join('')
        if (stringToCheck.length > longestString.length) {
            longestString = stringToCheck
        }
    }

    return longestString
}

module.exports = consecutiveStrings