const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController")


//  express.Router // all-articles PATH all-articles
router.get("/", articleController.article_index_get);
// add new article
router.post("/", articleController.article_post);
// to get article-details
router.get("/article-details/:id", articleController.article_details_get);
//  delete article
router.delete("/article-details/:id", articleController.article_delete);
module.exports = router;
