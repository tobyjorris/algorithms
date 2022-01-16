//Takes a sentence, and capitalizes every word in it and returns the sentence

const capitalizeEveryWord = string => string.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')

//Variation - could extend the String prototype like this:

// String.prototype.capitalizeEveryWord = function () {
//   return this.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
// };
// 'this is a test'.capitalizeEveryWord()

module.exports = capitalizeEveryWord