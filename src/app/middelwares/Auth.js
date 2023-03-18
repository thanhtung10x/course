class AuthMiddelware {
  authen(req, res, next) {
    const user = req.session.user;
    if (!user) {
      return res.redirect("/auth/login");
    } else {
      next();
    }
  }
}

module.exports = new AuthMiddelware();
