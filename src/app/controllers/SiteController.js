const Course = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");
const { convertDataUser } = require("../../util/get-user-request");

class SiteController {
  // [GET] /
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", {
          showLayout: true,
          user: convertDataUser(req.session.user),
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }

  // [GET] /search
  search(req, res) {
    res.render("search", {
      showLayout: true,
      user: convertDataUser(req.session.user),
    });
  }
}

module.exports = new SiteController();
