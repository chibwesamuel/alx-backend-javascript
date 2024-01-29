const express = require('express');

// Create an Express application
const app = express();

// Define route handlers
app.get('/', (req, res) => {
    // Send "Hello Holberton School!" as plain text for the root endpoint
    res.send('Hello Holberton School!\n');
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
