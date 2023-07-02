import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  imageURL: { type: String, required: true },
  user_id: { type: String, required: true },
  email_verfied: { type: Boolean, reqruied: true },
  role: { type: String, required: true },
  auth_time: { type: String, required: true }
}, {timestamps: true});

module.export = mongoose.model("user", userSchema)