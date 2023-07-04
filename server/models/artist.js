const mongoose = require("mongoose");

const ArtistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageURL: { type: String, required: true },
}, {timestamps: true});

module.exports = mongoose.model("artist", ArtistSchema);