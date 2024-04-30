const express = require('express');
const routes = require('./routes');

const app = express();

// Use routes defined in routes/index.js
app.use('/', routes);

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

module.exports = app;
