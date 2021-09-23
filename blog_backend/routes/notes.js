const express = require("express");
const router = express.Router();
const Notes = require("../models/Notes");
const fetchUser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");

//Route 1: get all notesof user using GET "api/notes/fetchallnotes"  login required
router.get("/fetchallnotes", fetchUser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 2: add a new note using POST "api/notes/addnotes"  login required
router.post(
  "/addnotes",
  fetchUser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Enter a valid description").isLength({ min: 3 }),
  ],
  async (req, res) => {
    try {
      const { title, description } = req.body;

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const note = new Notes({ title, description, user: req.user.id });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//Route 3: update a note using PUT "api/notes/updatenote/:id"  login required
router.put("/updatenote/:id", fetchUser, async (req, res) => {
  try {
    const { title, description } = req.body;
    const newNote = {};
    if (title) {
      newNote.title = title;
    }

    if (description) {
      newNote.description = description;
    }

    let note = await Notes.findById(req.params.id);
    if (!note) {
      res.status(404).send("Not found");
    }

    //checking if correct user is deleting that note
    if (note.user.toString() !== req.user.id) {
      res.status(401).send("Not allowed");
    }

    note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json(note);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 4: delete a note using DELETE "api/notes/deletenote/:id"  login required
router.delete("/deletenote/:id", fetchUser, async (req, res) => {
  try {
    //findind that note of id
    let note = await Notes.findById(req.params.id);
    if (!note) {
      res.status(404).send("Not found");
    }

    //checking if correct user is deleting that note
    if (note.user.toString() !== req.user.id) {
      res.status(401).send("Not allowed");
    }

    //delete operation
    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note deleted", note: note });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
