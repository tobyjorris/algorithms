// splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

const splitsStringsToPairs = givenString => {
    const stringArray = givenString.split("")
    const pairedArray = []

    for (let i = 0; i < stringArray.length; i += 2) {
        pairedArray.push(`${stringArray[i]}${stringArray[i + 1] ? [stringArray[i + 1]] : '_'}`)
    }

    return pairedArray
}

module.exports = splitsStringsToPairs