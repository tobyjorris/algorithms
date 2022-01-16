//Hamming Distance - return a numerical 'distance' between two strings

const hammingDistance = (string1, string2) => {
    const string1Array = string1.split('')
    const string2Array = string2.split('')
    let count = 0

    string1Array.forEach((character, index) => {
        if (character !== string2Array[index]) {
            count++
        }
    })

    return count
}

module.exports = hammingDistance