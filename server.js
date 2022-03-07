const fs = require("fs");
const path = require("path");
const express = require("express");
const { animals } = require("./data/animals.json");

// these require statements will read the index.js file in each folder.
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
app.use(express.static("public"));
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
