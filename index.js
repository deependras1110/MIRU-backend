//Importing all the necessary dependency
const express = require("express");
const Promise = require("promise");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
var cors = require("cors");

//API ROUTES
const itineraryRoute = require("./routes/itinerary");

//Initializing express app
const app = express();

//env configuration
dotenv.config();

//database mongo configuration
mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("MongoDB connection established");
  }
);

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("connect"));

//using API routes
app.use("/api/itineraryday", itineraryRoute);

//env configuration
let port = process.env.port || 8000;

//port network configuration - localhost:8000
app.listen(port, () => {
  console.log("Backend server started");
});
