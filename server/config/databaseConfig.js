const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONN);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection error");
  }
};

module.exports = dbConnection;
