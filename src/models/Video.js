const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  youtubeVideoId: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  channel: {
    type: String,
    required: true,
  },
  transcript: {
    type: String,
    required: true,
  },
  transcripts: {
    type: Array,
    default: [],
    required: true,
  },
  transcriptTimeLines: {
    type: Array,
    default: [],
    required: true,
  },
  thumbnailURL: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  documentLength: {
    type: Number,
    required: true,
  },
});

videoSchema.pre("validate", function (next) {
  this.description = this.description || " ";
  this.transcript = this.transcript || " ";
  this.tag = this.tag || " ";
  next();
});

module.exports = mongoose.model("Video", videoSchema);
