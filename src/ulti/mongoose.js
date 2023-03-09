const dayjs = require("dayjs");
module.exports = {
  muntipleMongooseToObject: function (mongooses) {
    return mongooses.map((mongoose) => {
      var data = {
        ...mongoose.toObject(),
        createdAt: dayjs(mongoose.createdAt).format("DD-MM-YYYY HH:mm"),
      };
      return data;
    });
  },
  mongooseToObject: function (mongoose) {
    var data = {
      ...mongoose.toObject(),
      createdAt: dayjs(mongoose.createdAt).format("DD-MM-YYYY HH:mm"),
    };
    return mongoose ? data : mongoose;
  },
};
