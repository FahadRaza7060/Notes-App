const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");

// Route 1: Get all the notes using GEt: '/api/notes/getuser'
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("some errors occured");
  }
});

// Route 2: add a new note using POST: '/api/notes/addnote'. Login required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("desription", "Enter a description")
  ],
  async (req, res) => {
    try {
      const { title, description } = req.body;
      // if there are errors return bad requestand the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Note({
        title,
        description,
        user: req.user.id,
      });
      const saveNote = await note.save();

      res.json(saveNote);

    } catch (err) {
      console.log(err.message);
      res.status(500).send("some errors occured");
    }
  }
);

// Route 3: update an existing note using PUT: '/api/notes/updatenote'. Login required
router.put("/updatenote/:id", fetchuser, async (req, res) => {
    const { title, description } = req.body;
    try {  
    // create a newNote Object
    const newNote = {};
    if (title) {newNote.title = title};
    if (description) {newNote.description = description};

    //find the note to be updated
    let note = await Note.findById(req.params.id);
    if (!note) {return res.status(404).send("Not Found")};

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("some errors occured");
  }
});

// Route 4: Delete an existing note using DELETE: '/api/notes/deletenote'.
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    //find the note to be deleted
    let note = await Note.findById(req.params.id);
    if (!note) { return res.status(404).send("Not Found") }

    // allow deletion only if user owns this note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been deleted", note: note });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("some errors occured");
  }
});

module.exports = router;
