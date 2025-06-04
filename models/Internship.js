const mongoose = require('mongoose');

const InternshipSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  applyUrl: { type: String, required: true },
});

module.exports = mongoose.model('Internship', InternshipSchema);
