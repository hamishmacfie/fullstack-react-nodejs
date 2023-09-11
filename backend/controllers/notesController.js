const asyncHandler = require("express-async-handler");
const { Notes } = require("../models/NotesModel");

// @desc Fetch all Notes
// @route GET /api/v1/notes
// @access Public
const getAllNotes = asyncHandler(async (req, res) => {
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

module.exports = getAllNotes;
