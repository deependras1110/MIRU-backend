const ItineraryDay = require("../models/ItineraryDay");
const router = require("express").Router();

//post a Itinerary Day
router.post("/", async (req, res) => {
  const newItineraryDay = new ItineraryDay(req.body);
  try {
    const savedItineraryDay = await newItineraryDay.save();
    res.status(200).json(savedItineraryDay);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all Itinerary Day
router.get("/", async (req, res) => {
  try {
    const fetchedData = await ItineraryDay.find();
    res.status(200).json(fetchedData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update the Itinerary Day
//URL Param needed - Itinerary Id
router.put("/:id", async (req, res) => {
  try {
    const dataToUpdate = ItineraryDay.findById(req.params.id);
    if (dataToUpdate === null) {
      res.status(402).json("Itinerary Day Not found");
    } else {
      await dataToUpdate.updateOne({ $set: req.body });
      res.status(200).json("Itinerary Day Updated");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete the Itinerary Day
//URL Param needed - Itinerary Id
router.delete("/:id", async (req, res) => {
  try {
    const dataToDelete = ItineraryDay.findById(req.params.id);
    if (dataToDelete === null) {
      res.status(402).json("Unable to find the day");
    } else {
      if (req.body.adminPass === "mentorpassword") {
        await ItineraryDay.findByIdAndDelete(req.params.id);
        res.status(200).json("Success - Day has been deleted");
      } else {
        res.status(401).json("You are not authorized to delete the day");
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
