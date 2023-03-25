const mongoose = require("mongoose");

const config = require("../index");

async function connect() {
  try {
    await mongoose.connect(config.database.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Connect successfully!!!");
  } catch (error) {
    console.log("Connect failure!!!");
  }
}

module.exports = { connect };
