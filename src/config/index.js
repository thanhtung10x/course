const { config } = require("dotenv");

config();

module.exports = {
  env: process.env.ENV ?? "development",
  port: process.env.PORT ?? 5000,
  database: {
    url: process.env.DATABASE ?? "mongodb://localhost:27017/courses",
  },
};
