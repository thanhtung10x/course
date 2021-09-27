class NewsController {
  //[GET] /news
  index(req, res) {
    res.render('news');
  }

  //[GET] /news/:slug
  show(req, res) {
    res.send('ok ok dduowcj rooif nhas');
  }
}

module.exports = new NewsController();
