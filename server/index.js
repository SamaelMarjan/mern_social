const express = require("express");
const dbConnection = require("./config/databaseConfig");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const helmet = require("helmet"); //security pkg

const app = express();

//middlewares
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const port = process.env.PORT || 8080;

app.listen(port, async () => {
  console.log(`server connected to port ${port}`);
  await dbConnection();
});
