const express = require("express");
const app = express();

app.get("/users", (req, res) => {
  res.json([{ id: 1, name: "John" }]);
});

app.listen(7002);
