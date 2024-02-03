const http = require('http');
const fs = require('fs');
const { exec } = require('child_process');

// Function to read file asynchronously and return a Promise
const readDatabase = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
            } else {
                resolve(data);
            }
        });
    });
};

// Create the HTTP server
const app = http.createServer((req, res) => {
    // Set the response headers
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Handle requests based on URL path
    if (req.url === '/') {
        res.end('Hello Holberton School!\n');
    } else if (req.url === '/students') {
        // Read database file and log student details
        readDatabase(process.argv[2])
            .then(data => {
                const lines = data.split('\n').filter(line => line.trim() !== '');
                const totalStudents = lines.length;
                const students = {};
                for (const line of lines) {
                    const fields = line.split(',');
                    const field = fields[fields.length - 1].trim();
                    students[field] = (students[field] || 0) + 1;
                }
                res.write('This is the list of our students\n');
                res.write(`Number of students: ${totalStudents}\n`);
                for (const field in students) {
                    res.write(`Number of students in ${field}: ${students[field]}. List: ${lines.filter(line => line.endsWith(field)).map(line => line.split(',')[0].trim()).join(', ')}\n`);
                }
                res.end();
            })
            .catch(error => {
                res.end(error.message + '\n');
            });
    } else {
        res.end('404 Not Found\n');
    }
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

module.exports = app;
