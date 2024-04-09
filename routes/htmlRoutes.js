// Dependencies
const path = require('path');


// Routes
module.exports = (app) => {

  // Creating routes
  // GET notes should return the notes.html file.
  app.get('/notes.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/notes.html'));
  });

  // GET * should return the index.html file.
  app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
  })
};