const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://course:course@localhost:27017/courses", {
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
