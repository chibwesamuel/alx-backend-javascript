const http = require('http');

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Check the request URL
  if (req.url === '/' || req.url === '/test') {
    // Send the response body
    res.end('Hello Holberton School!\n');
  } else {
    // Send a 404 response for other endpoints
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

module.exports = app;
