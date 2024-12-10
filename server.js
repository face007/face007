const express = require("express");
const cors = require("cors");
require("dotenv").config();
const http = require("http");
const mongoose = require("mongoose");

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

/** =================== MongoDB Connection Start =================== */
mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;
db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});
db.once("open", () => {
  console.log("Database connection OK");
});
/** =================== MongoDB Connection End =================== */

/** =================== Routes Connection Start =================== */
const routes = require("./routes/allRoutes");
app.use("/", routes);
/** =================== Routes Connection End =================== */

/** =================== Error Handling Middleware Start =================== */
app.use((err, req, res, next) => {
  console.error("Server error:", err); 
  if (err.kind === 'ObjectId') {
    return res.status(400).json({
      success: false,
      message: 'Invalid ObjectId',
    });
  }
  res.status(500).json({ error: "Internal server error" }); 
});
/** =================== Error Handling Middleware End =================== */

/** =================== Start the Server =================== */
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
