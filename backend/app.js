import express from "express";

const app = express();
// Middleware
app.use(express.json());

const PORT = process.env.PORT || 8080;

// Routes
app.use("/", (req, res) => {
  console.log("API is running");
  res.send("This is the homepage of the api");
});

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
