if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const { PORT, MONGO_PATH } = process.env;

const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fs = require("fs");
const path = require("path");

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect(MONGO_PATH);

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => {
  console.log("Connected to Mongoose");
});

// ----------------DO NOT TOUCH----------------- //
app.set("view engine", "ejs");
app.set("views", __dirname + "/public/html");
app.set("layout", "layout");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.enable("trust proxy");
app.set("etag", false);
app.use(cookieParser());
app.use(
  express.json({
    limit: "50mb",
  })
);
// ---------------------------------------------- //

// ----------------ROUTE HANDLERS---------------- //

// -------GET------- //
function readGetFiles(dir) {
  const filesGet = fs.readdirSync(path.join(__dirname, dir));
  for (const file of filesGet) {
    const stat = fs.lstatSync(path.join(__dirname, dir, file));
    if (stat.isDirectory()) {
      readGetFiles(path.join(dir, file));
    } else {
      const option = require(path.join(__dirname, dir, file));
      if (option && option.name) app.get(option.name, option.run);
    }
  }
}

readGetFiles("./src/get");

// -------POST------- //
function readPostFiles(dir) {
  const filesGet = fs.readdirSync(path.join(__dirname, dir));
  for (const file of filesGet) {
    const stat = fs.lstatSync(path.join(__dirname, dir, file));
    if (stat.isDirectory()) {
      readPostFiles(path.join(dir, file));
    } else {
      const option = require(path.join(__dirname, dir, file));
      if (option && option.name) app.post(option.name, option.run);
    }
  }
}

readPostFiles("./src/post");

// -------ERROR 404 - PAGE NOT FOUND-------- //
app.get("*", async function (req, res) {
  res.render("404", {
    title: "Error 404",
    cssFiles: ["root", "main", "error"],
  });
});

// Listen on port //
app.listen(PORT, "0.0.0.0", async () =>
  console.log(`Website Live on port ${PORT}`)
);
