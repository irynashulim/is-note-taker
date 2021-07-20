const fs = require('fs');

const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



const PORT = process.env.PORT || 3001;

const { notes } = require('./data/notes');

function createNewNote(body, notesArray) {
    const note = body;
  notesArray.push(note);
  fs.writeFileSync(
      path.join(__dirname, './data/notes.json'),
      JSON.stringify({ notes: notesArray }, null, 2)
  );
    return note;
  }


  // function findById(id, notesArray) {
  //     const result = notesArray.filter(note => note.id === id)[0];
  //     return result;
  // }

app.get('/api/notes', (req, res) => {
    let results = notes;
    
    res.json(results);
  });



 app.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const note = createNewNote(req.body, notes);
  res.json(req.note);
});

// app.delete('/api/notes/:id', (req, res) => {
//     const result = notes;
    

//     res.send('DELETE Request');
// })

  app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });