
// Receive Article articleSchema
const Article = require("../models/articleSchema");


const article_index_get = (req, res) => {
    // to get data from database =>
    // this is promise
    Article.find()
        .then((result) => {
            res.render("index", { PageTitle: "home", AllArticles: result });
        })
        .catch((err) => {
            console.log(err);
        });
}
const article_post = (req, res) => {
    const article = new Article(req.body);
    article
        .save()
        .then((result) => {
            res.redirect("/all-articles");
        })
        .catch((err) => {
            console.log(err);
        }); // return promise
}
const article_details_get = (req, res) => {
    // console.log(req.url);
    Article.findById(req.params.id)
        .then((result) => {
            res.render("article-details", {
                PageTitle: "article details",
                AllArticles: result,
            });
        })
        .catch((err) => {
            console.log(err);
        });
}
const article_delete = (req, res) => {
    Article.findByIdAndDelete(req.params.id)
        .then((params) => {
            res.json({ home: "/all-articles" });
        })
        .catch((err) => { });
}

module.exports = {
    article_index_get,
    article_post,
    article_details_get,
    article_delete,
}