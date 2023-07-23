const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postInfoSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
})

const postSchema = new Schema({
  user: { type: String, required: true },
  books: [postInfoSchema],
});
const Posts = mongoose.model("Posts", postSchema);

module.exports = Posts;
