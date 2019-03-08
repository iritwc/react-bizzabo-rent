// Get dependencies
const express = require('express');
const path = require('path');

const app = express();

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// catch 404 and forward to error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

const port = process.env.WEB_PORT || 6060;

app.listen(port, ()=> {
  console.log(`Server running!`);
});
