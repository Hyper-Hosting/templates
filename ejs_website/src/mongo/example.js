const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  stringExample: {
    type: String,
    required: true,
    unique: true,
  },
  numberExample: Number, // As I haven't made it required or unique I can just straight up say it is a Number
});

module.exports = mongoose.model("Example", Schema);
