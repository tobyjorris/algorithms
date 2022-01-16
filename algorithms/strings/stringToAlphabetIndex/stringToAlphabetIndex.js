// Given a string, replace every letter with it's position in the alphabet.
//
// If anything in the string isn't a letter, ignore it and don't return it.

const string = 'The Quick Brown Fox'


const stringToAlphabetIndex = sentence => {
    const alphabet = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const sentenceArray = sentence.toLowerCase().split(' ')
    const characterIndex = []

    sentenceArray
        .map(word => {

            for (let character of word.split('')) {
                alphabet.forEach((alphChar, index) => {
                    if (alphChar === character) {
                        characterIndex.push(index)
                    }
                })
            }
        })

    return characterIndex.join(' ')
}

module.exports = stringToAlphabetIndex