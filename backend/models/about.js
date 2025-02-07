const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const Aboutschema = new Schema({
  job_heading: { type: String, required: true },
  about_text: { type: String, required: true },
  time_line: {
    type: [[String]], // 2D array where each subarray contains strings
    required: true,
  },
  image1: {
    url: String,
    title: String,
    description: String
  },
  image2: {
    url: String,
    title: String,
    description: String
  },
  image3: {
    url: String,
    title: String,
    description: String
  }
});

const Aboutmodel = mongoose.model("About", Aboutschema);
module.exports = Aboutmodel;
