const router = require("express").Router();

// Get Notes from Controller
const getNotes = require("../controllers/notesController");

router.get("/notes", getNotes);

module.exports = router;
