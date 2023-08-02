const express = require("express");

const app = express();

// Middleware
app.use(express.json());

const PORT = process.env.PORT || 8080;

// Routes
app.use("/", (req, res) => {
  console.log("API is running");
});

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
