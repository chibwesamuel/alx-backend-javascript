function calculateNumber(a, b) {
    // Check if at least one of the numbers is a float
    if (Number.isInteger(a) && Number.isInteger(b)) {
        // If both are integers, return the sum as is
        return a + b;
    } else {
        // If at least one is a float, round the sum before returning
        return Math.round(a + b);
    }
}

module.exports = calculateNumber;
