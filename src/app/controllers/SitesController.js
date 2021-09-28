const Course = require('../models/Course');
const { muntipleMongooseToObject } = require('../../ulti/mongoose');
class SitesController {
  //[GET] /
  index(req, res, next) {
      Course.find({})
      .then(courses => {
        res.render('home', {
          courses: muntipleMongooseToObject(courses)
        });
      })
      .catch(next);
  }

  //[GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SitesController();
