const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const horoscopeSchema = new Schema({
  description: String,
  img: String,
  categ: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
});

module.exports = mongoose.model("Horoscope", horoscopeSchema);