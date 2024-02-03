const express = require('express');
const { exec } = require('child_process');
const countStudents = require('./3-read_file_async');

// Create an Express application
const app = express();

// Define route handlers
app.get('/', (req, res) => {
  // Send "Hello Holberton School!" as plain text for the root endpoint
  res.send('Hello Holberton School!\n');
});

app.get('/students', (req, res) => {
  // Get database filename from command line argument
  const dbFilename = process.argv[2];

  // Read database file and send student details
  countStudents(dbFilename)
    .then(() => {
      res.write('This is the list of our students\n');
      exec(`node 3-read_file_async.js ${dbFilename}`, (error, stdout) => {
        if (error) {
          res.send(error.message);
          return;
        }
        res.send(stdout);
      });
    })
    .catch((error) => {
      res.send(error.message);
    });
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="utf-8">
        <title>Error</title>
        </head>
        <body>
        <pre>Cannot GET ${req.url}</pre>
        </body>
        </html>
    `);
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

module.exports = app;
