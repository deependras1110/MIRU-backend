const mongoose = require("mongoose");

const ItineraryDaySchema = new mongoose.Schema(
  {
    dayTitle: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    date: {
      type: Date,
      require: true,
    },
    time: {
      type: String,
    },
    places: {
      type: Array,
      default: [],
    },
    activities: {
      type: Array,
      default: [],
    },
    additionalInfo: {
      type: String,
      max: 200,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ItineraryDay", ItineraryDaySchema);
