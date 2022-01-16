//Takes a sentence, and capitalizes every word in it and returns the sentence

const capitalizeEveryWord = string => string.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')

module.exports = capitalizeEveryWord