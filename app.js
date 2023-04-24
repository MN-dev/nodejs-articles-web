//  to controll our website

const express = require("express");
const app = express();
const port = process.env || 8000;
const helmet = require("helmet");

app.set("view engine", "ejs");
app.use(express.static("public"));
// important extended
app.use(express.urlencoded({ extended: true }));

const allArticlesRouter = require("./routes/all-articles");

// for auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
// mongoose
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://huntereyes93:0163070540@cluster0.dldsr3y.mongodb.net/all-data?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(process.env.PORT || port, () => {
      console.log(`example app listnening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });


app.use(helmet());
// get request
app.get("/", (req, res) => {
  res.redirect("/all-articles");
});
app.get("/add-new-article", (req, res) => {
  res.render("add-new-article", { PageTitle: "add new article" });
});
// all-articles PATH all-articles
app.use("/all-articles", allArticlesRouter);
//  express.Router

// add new post

// to get article-details

//  404
app.use((req, res) => {
  res.status(404).send("Sorry can't find that!");
});
