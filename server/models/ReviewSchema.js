const mongoose = require("mongoose");
const Tag = require("./TagSchema");

const { model, Schema } = mongoose;

const reviewSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Game",
    required: true,
  },
  comment: {
    type: String,
  },
  recommend: {
    type: Boolean,
  },
  stars: {
    type: Number,
    min: [1, "Please give a positive integer between 1 and 6"],
    max: [6, "Please enter a positive integer between 1 and 6"],
  },
});

const Review = model("Review", reviewSchema);

module.exports = Tag;
