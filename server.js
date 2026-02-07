const express = require("express");
const path = require("path");

const app = express();
const PORT = 5000;

app.use((req, res, next) => {
  res.set("Cache-Control", "no-cache, no-store, must-revalidate");
  res.set("Pragma", "no-cache");
  res.set("Expires", "0");
  next();
});

app.use(express.static(path.join(__dirname, "src", "dbank_assets", "src")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "dbank_assets", "src", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("DBank server running on http://0.0.0.0:" + PORT);
});
