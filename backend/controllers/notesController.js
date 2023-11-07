const asyncHandler = require("express-async-handler");
const { Notes } = require("../models/NotesModel");

// @desc Fetch all Notes
// @route GET /api/v1/notes
// @access Public
exports.getAllNotes = asyncHandler(async (req, res) => {
  try {
    const allNotes = await Notes.find({});

    if (allNotes.length === 0) {
      return res.status(200).json({ message: "Sorry, there are no notes" });
    }
    return res.json(allNotes);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

exports.createNote = asyncHandler(async (req, res) => {
  try {
    const { note } = await req.body;

    if (note) {
      const newNote = new Notes({
        note,
        createdAt: Date.now()
      });
      await newNote.save();
    }
    return res.status(200).json({ message: "Item inserted" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Sorry, there was an error creating a new note" });
  }
});

exports.editNote = asyncHandler(async (req, res) => {
  try {
    const { _id, note } = req.body;

    // Find the id of the document and update it
    await Notes.findByIdAndUpdate(_id, {
      note,
      updatedAt: Date.now()
    });
    // Return successful message
    return res.status(200).json({ message: "Record successfully updated!" });
  } catch (error) {
    res.status(400).json({ Message: error.message });
  }
});

exports.deleteNote = asyncHandler(async (req, res) => {
  try {
    await Notes.findByIdAndDelete(req.body.id);
    return res.status(200).json({ message: "Note deleted!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
