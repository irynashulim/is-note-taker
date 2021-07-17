const fs = require('fs');
const path = require('path');
const express = require('express');
const { notes } = require('./data/notes');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


function createNewNote(body, notesArray) {
    const note = body;
  notesArray.push(note);
  fs.writeFileSync(
      path.join(__dirname, './data/notes.json'),
      JSON.stringify({ notes: notesArray }, null, 2)
  );
    return note;
  }

app.get('/api/notes', (req, res) => {
    let results = notes;
    
    res.json(results);
  });


 app.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const note = createNewNote(req.body, notes);
  res.json(req.note);
});

  app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });