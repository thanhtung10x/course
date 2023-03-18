const bcrypt = require("bcrypt");
const User = require("../models/User");

class AuthController {
  // [GET] /auth/login
  loginView(req, res, next) {
    res.render("auth/login", { showLayout: false, title: "Đăng nhập |" });
  }

  // [GET] /auth/register
  registerView(req, res, next) {
    res.render("auth/register", { showLayout: false, title: "Đăng kí |" });
  }

  // [POST] /auth/login
  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const checkPw = await bcrypt.compare(password, user?.password ?? "");

    if (!user || !checkPw) {
      res.render("auth/login", {
        error: "Tài khoản hoặc mật khẩu không chính xác",
      });
    } else {
      req.session.user = user;
      res.redirect("/");
    }
  }

  // [POST] /auth/register
  async register(req, res, next) {
    const { email, password, fullname, avatar } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      res.render("auth/register", {
        error: "Tài khoản đã tồn tại!",
      });
    } else {
      const userNew = await User.create({
        email: email,
        avatar: avatar,
        fullname: fullname,
        password: await bcrypt.hash(password, 10),
      });

      return res.redirect("/auth/login");
    }
  }

  // [POST] /auth/logout
  logout(req, res, next) {
    req.session.destroy(function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Session deleted successfully");
        res.redirect("/auth/login");
      }
    });
  }
}

module.exports = new AuthController();
