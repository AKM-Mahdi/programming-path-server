const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

const topics = require("./Data/lessons.json");
app.use(cors());

app.get("/lessons", (req, res) => {
  res.send(topics);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/lessons/:id", (req, res) => {
  const lesson_id = req.params.id;
  const topic = topics.find((item) => item.id === lesson_id);
  console.log(topic);
  res.send(topic);
});
