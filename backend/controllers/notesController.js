const asyncHandler = require("express-async-handler");
const { Notes } = require("../models/NotesModel");

// @desc Fetch all Notes
// @route GET /api/v1/notes
// @access Public
const getAllNotes = asyncHandler(async (req, res) => {
  const allNotes = await Notes.find({});
  return res.json(allNotes);
});

module.exports = getAllNotes;
