const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema({
  date: String,
  time: String,
  isBooked: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Slot", slotSchema);