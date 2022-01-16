//takes two strings, regardless of spaces, and returns true or false if they are anagrams of each other

const isAnagram = (string1, string2) => {
    const string1Array = string1.replace(' ', '').toLowerCase().split('')
    const string2Array = string2.replace(' ', '').toLowerCase().split('')

    if (string1Array.length !== string2Array.length) {
        return false
    }

    const getCharacterCount = string => {
        let characterCount = {}
        for (let char of string) {
            characterCount[char] = characterCount[char] + 1 || 1
        }
        return characterCount
    }

    const string1Count = getCharacterCount(string1Array)
    const string2Count = getCharacterCount(string2Array)

    for (let char in string1Count) {
        if (string1Count[char] !== string2Count[char]) {
            return false
        }
    }

    return true
}
module.exports = isAnagram