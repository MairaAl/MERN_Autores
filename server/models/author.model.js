const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: 3,
  },
  quotes: {
    type: String,
    required: [true, "Name is required"],
    minlength: 3,
  },
});

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
