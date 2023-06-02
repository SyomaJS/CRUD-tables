const express = require("express");
const app = express();
app.use(express.json());

require("dotenv").config();
const PORT = process.env.PORT || 3000;

//* ____________________________________

const routes = require("./routes");
app.use("/", routes);

//___________________END___________________________
app.listen(PORT, () => {
  console.log(`Listening on ${PORT} port`);
});
