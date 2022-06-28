
require("dotenv").config();
const cors = require("cors");

const express = require("express");
const app = express();
app.use(cors());

const route = require("./routes/route");
const mongoose = require("mongoose");

try {
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
} catch (err) {
console.log(err);
}

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());
const port = 8001;

app.use("/taches", route);
app.all("*", (req, res) => {
  res.status(404).send("The route does not exist");
});

// start server
app.listen(port, () => {
  console.log("Server started on port " + port);
});
