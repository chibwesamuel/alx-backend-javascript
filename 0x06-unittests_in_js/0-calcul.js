function calculateNumber(a, b) {
    // Check if both numbers are integers
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a + b;
    }

    // Check if one number is an integer and the other is a float
    if ((Number.isInteger(a) && !Number.isInteger(b)) || (!Number.isInteger(a) && Number.isInteger(b))) {
        // If so, round the float and add it to the integer
        const integer = Number.isInteger(a) ? a : b;
        const float = integer === a ? b : a;
        return Math.round(integer + float);
    }

    // Both numbers are floats, round each individually
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);

    // Return the sum of the rounded numbers
    return roundedA + roundedB;
}

module.exports = calculateNumber;
