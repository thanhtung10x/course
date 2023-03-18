class NewsController {
  // [GET] /news
  index(req, res) {
    res.render("news", { showLayout: true });
  }

  // [GET] /news/:slug
  show(req, res) {
    res.send("NEWS DETAIL!!!");
  }
}

module.exports = new NewsController();
