const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  for (let i = 0; i < notesArray.length; i++) {
    notesArray[i].id = (i + 1).toString();
  };
    fs.writeFileSync(
      path.join(__dirname, './data/notes.json'),
      JSON.stringify({ notes: notesArray }, null, 2)
    );
    return notes;
  };

  function deleteNote(id, notes) {
    notes.forEach((note, index) => {
      if (id == note.id) {
        notes.splice(index, 1);
        for (let i = 0; i < notes.length; i++) {
          notesArray[i].id = (i + 1).toString();
        }
      }
    });
    return notes;
  };

  module.exports = { createNewNote, deleteNote };