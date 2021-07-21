const express = require('express');


const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


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



app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});