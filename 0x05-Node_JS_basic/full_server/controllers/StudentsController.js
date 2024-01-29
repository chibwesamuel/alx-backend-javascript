const { readDatabase } = require('../utils');

class StudentsController {
    static async getAllStudents(req, res) {
        try {
            const data = await readDatabase(/* pass file path */);
            // Process data and send response
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        // Similar implementation as above
    }
}

module.exports = StudentsController;
