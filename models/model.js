const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    activity: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
    for: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);


const Certificate = mongoose.model('Certificate', certificateSchema);

module.exports = Certificate;