const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: String,
  content: String,
  date: {
    type: Date,
    default: Date.now,
  },
  image: String,
});

module.exports = mongoose.model("Article", articleSchema);
