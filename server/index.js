const express = require("express");
const dbConnection = require("./config/databaseConfig");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 8080;

app.listen(port, async () => {
  console.log(`server connected to port ${port}`);
  await dbConnection();
});
