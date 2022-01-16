//Searches sentences for words of a certain length, reverses them, and returns the original string with those words replaced

const reverseSpecificWords = (string, wordLength) => {
    return string.split(' ').map(word => word.split('').length >= wordLength ? word.split('').reverse().join('') : word).join(' ')
}

module.exports = reverseSpecificWords