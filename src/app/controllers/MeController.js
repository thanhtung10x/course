const Courses = require('../models/Course');
const { muntipleMongooseToObject } = require('../../ulti/mongoose');
class MeController {
  //[GET] /me/store/courses
  storeCourses(req, res, next) {
    Courses.find({})
        .then( (courses) => {
            res.render('./me/storeCourses', {
                Courses: muntipleMongooseToObject(courses),
            })
        })
        .catch(next);
      
  }
  //[GET] /me/store/courses
    //   home(req, res, next) {
    //   res.redirect('/');
        
    //  }
  

}

module.exports = new MeController();
