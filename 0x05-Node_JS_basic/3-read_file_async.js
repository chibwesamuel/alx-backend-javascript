const fs = require('fs');

/**
 * Counts the number of students and their distribution by field from a CSV file asynchronously.
 * @param {string} path - The path to the CSV file.
 * @returns {Promise<void>} - A Promise that resolves when the counting is done.
 */
const countStudents = (path) => {
    return new Promise((resolve, reject) => {
        // Attempt to read the database file asynchronously
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                // If the database is not available, reject the Promise with an error
                reject(new Error('Cannot load the database'));
            } else {
                // Split the data by lines and filter out empty lines
                const lines = data.split('\n').filter(line => line.trim() !== '');

                // Initialize counts object to store the number of students per field
                const counts = {};

                // Iterate through each line to count students per field
                for (const line of lines) {
                    // Split the line by commas to extract fields
                    const fields = line.split(',');
                    const field = fields[fields.length - 1].trim(); // Last field is assumed to be the student's field

                    // Increment count for the field
                    counts[field] = (counts[field] || 0) + 1;
                }

                // Log the total number of students
                console.log(`Number of students: ${lines.length}`);

                // Log the number of students per field
                for (const field in counts) {
                    console.log(`Number of students in ${field}: ${counts[field]}. List: ${lines.filter(line => line.endsWith(field)).map(line => line.split(',')[0].trim()).join(', ')}`);
                }

                // Resolve the Promise
                resolve();
            }
        });
    });
};

module.exports = countStudents;
