const dotenv = require("dotenv");
const { connectDB } = require("./config/dbConfig");
const express = require("express");

const app = express();

dotenv.config();
connectDB();

// Middleware
app.use(express.json());

// Set the port from .env with fallback of 8080
const PORT = process.env.PORT || 8080;

// Routes
app.get("/", (req, res) => {
  console.log("API default routes");
  res.send("API Default Route");
});

app.use("/api/v1/", require("./routes/notesRoutes"));

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
