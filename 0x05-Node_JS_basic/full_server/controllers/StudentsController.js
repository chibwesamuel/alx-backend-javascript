const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents() {
    try {
      await readDatabase(/* pass file path */);
      // Process data and send response
    } catch (error) {
      // Handle error if necessary
    }
  }

  static async getAllStudentsByMajor() {
    // Similar implementation as above
  }
}

module.exports = StudentsController;
