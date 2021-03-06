const router = require('express').Router();
const { notes } = require('../../data/notes.json');
const {createNewNote} = require('../../lib/notes');
const {deleteNote} = require('../../lib/notes');

router.get('/notes', (req, res) => {
    let results = notes;
    
    res.json(results);
  });

 router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const note = createNewNote(req.body, notes);
  res.json(req.note);
});

router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const removeNote = deleteNote(id, notes);
    res.json('DELETE Note');
})


module.exports = router;