const express = require("express");
const Article = require("../models/Articles");
const router = express.Router();

//route 1: add articles in db using POST "/api/articles"
router.post("/", async (req, res) => {
  try {
    const { imgUrl, heading, description } = req.body;

    const article = new Article({
      imgUrl,
      heading,
      description,
    });

    const saveArticle = await article.save();
    res.send(saveArticle);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//route 2: fetch articles using GET "/api/articles"
router.get("/", async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
