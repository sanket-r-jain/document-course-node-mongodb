const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb+srv://test:test@cluster0.9s80i0c.mongodb.net/CoursesDB?retryWrites=true&w=majority"

const app = express();

mongoose.connect(url, () => {
  console.log("Connected to DB successfully");
});

app.use(express.json());

const courseRouter = require("./routes/courses");
app.use("/courses", courseRouter);

app.listen(5000, () => {
  console.log("Server started");
});
