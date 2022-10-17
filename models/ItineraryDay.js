const mongoose = require("mongoose");

const activitiesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
    ls,
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

fetch(
  "https://api.apilayer.com/exchangerates_data/latest?symbols={symbols}&base={base}",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
