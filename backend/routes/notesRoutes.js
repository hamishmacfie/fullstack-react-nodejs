const router = require("express").Router();

// Get Notes from Controller
const {
  getAllNotes,
  createNote,
  editNote,
  deleteNote
} = require("../controllers/notesController");

router.get("/notes", getAllNotes);
router.post("/notes", createNote);
router.put("/notes", editNote);
router.delete("/notes", deleteNote);

module.exports = router;
