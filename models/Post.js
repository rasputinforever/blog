const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postInfoSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  time: { type: Date, required: true }
})

const postSchema = new Schema({
  posts: [postInfoSchema],
});

const Posts = mongoose.model("Posts", postSchema);

module.exports = Posts;
