const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  googleid: String,
  grad_year: Number,
  has_swipes: Boolean,
  major: String,
  gender: String,
});

// compile model from schema
module.exports = mongoose.model("user", UserSchema);
