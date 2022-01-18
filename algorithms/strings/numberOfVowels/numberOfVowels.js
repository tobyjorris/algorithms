//Return the number of vowels in a string

const numberOfVowels = sentence => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0

    for (let character of sentence.toLowerCase()) {
        if (vowels.includes(character)) {
            count++
        }
    }
    return count
}

module.exports = numberOfVowels