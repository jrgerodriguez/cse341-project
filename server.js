const express = require("express");
const app = express();
const routes = require("./routes");
const db = require("./database/db");

const port = process.env.PORT || 3000;

app.use("/", routes);

db.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Database and App listening on port ${port}`);
    });
  }
});
