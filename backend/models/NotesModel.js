const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notesSchema = mongoose.Schema(
  {
    note: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Notes = mongoose.model("notes", notesSchema);

module.exports = { Notes };
