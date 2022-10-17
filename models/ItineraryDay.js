const mongoose = require("mongoose");

const activitiesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const ItineraryDaySchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      require: true,
      unique: true,
    },
    dayTitle: {
      type: String,
    },

    activities: {
      type: [activitiesSchema],
      default: [],
    },
    desc: {
      type: String,
      max: 200,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ItineraryDay", ItineraryDaySchema);
