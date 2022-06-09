const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./server/config/db");
require("colors");

//Connect to database
connectDB();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Api Routes
app.use("/api/travels", require("./server/routes/travelRoutes"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`.yellow.bold);
});
