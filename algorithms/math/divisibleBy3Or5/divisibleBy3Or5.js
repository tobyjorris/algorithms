//returns the sum of all numbers less than an input that are divisible by 3 or 5. Returns 0 if the number is negative, and only counts numbers divisible by BOTH 3 + 5 once.

const divisibleBy3Or5 = number => {
    if (number < 0) {
        return 0
    }

    let count = 0

    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            count += i
        }
    }
    return count
}

module.exports = divisibleBy3Or5