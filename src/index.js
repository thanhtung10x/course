const path = require("path");
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const handlebars = require("express-handlebars");
const session = require("express-session");

const route = require("./routes");
const db = require("./config/db");
const config = require("./config");

// Connect to DB
db.connect();

const app = express();
const port = config.port;

// Use static folder
app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(methodOverride("_method"));

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

app.use(
  session({
    secret: "testdev",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
    },
  })
);

// Routes init
route(app);

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
