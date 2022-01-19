//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

const duplicateEncoder = givenString => {
    const stringArray = givenString.toLowerCase().split('')
    const stringObject = {}

    for (let character of stringArray) {
        if (stringObject[character]) {
            stringObject[character] = ')'
        } else {
            stringObject[character] = '('
        }
    }

    return stringArray.map(character => stringObject[character]).join('')
}

module.exports = duplicateEncoder