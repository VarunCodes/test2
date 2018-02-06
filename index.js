const express = require("express"); // requires/imports express library
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 5000; // Dynamic port binding
app.listen(PORT);
