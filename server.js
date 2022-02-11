const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes/Book");

const app = express();

const mongodbURL = "mongodb://localhost:27017/lab4Practice";
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.use("/api/book", routes);

mongoose.connect(mongodbURL, () => {
	app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));
});
