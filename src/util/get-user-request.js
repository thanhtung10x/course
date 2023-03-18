module.exports = {
  convertDataUser: (user) => {
    user.avatar = user.avatar ?? "/img/no-avatar.jpg";
    return user;
  },
};
