const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let studentSchema = new Schema({
  name: {
    type: String,
  },
  prenom: {
    type: String,
  },
  TachToDo: {
    type: String,
  },
});

module.exports = mongoose.model("model", studentSchema);
